'use strict'

var Request = require('superagent');

module.exports = function (data, next) {
    var start = function () {
        Request
            .get('http://l1.freedom.tm:3000/channels?per_page=10&page=2')
            .end(next);
    }

    start();
}
