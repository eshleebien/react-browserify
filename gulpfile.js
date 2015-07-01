var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps')
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),
    rename = require('gulp-rename'),
    del = require('del'),

    paths = {
        scripts: ['src/build/main.js',
            'public/bower_components/jquery/dist/jquery.min.js',
            'public/bower_components/materialize/dist/js/materialize.min.js'],
        watch: ['src/components/*', 'src/scripts/*', 'src/models/*'],
        browserify: ['src/scripts/*']
    };

gulp.task('clean', function (next) {
    del(['public/js/build'], next);
});

gulp.task('scripts', ['clean', 'browserify'], function () {
    return gulp.src(paths.scripts)
//        .pipe(uglify())
        .pipe(concat('script.min.js'))
//        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('public/js/build'));
});

gulp.task('browserify', function () {
    var b = browserify();
    b.transform(reactify);
    b.add('src/scripts/home.js');

    return b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('src/build'));
});

gulp.task('watch', function () {
    gulp.watch(paths.watch, ['scripts']);
});

gulp.task('default', ['watch', 'scripts'], function() {
    console.log('done');
});
