/** @jsx React.DOM */
'use script'

var React = require('react/addons'),
    request = require('superagent');

module.exports = React.createClass({
    getInitialState: function () {
        return {value: '', h2: 'Channel Growth Statistics'};
    },

    onChange: function (e) {
        console.log(e.target.value);

        request
            .get('localhost:3000/channels')
            .end(function (result) {
                console.log(result);
            });
    },

    render: function () {
        return (
            <div>
            <h2>{this.state.h2}</h2>
            <input
                type = "text"
                onChange={this.onChange}
                className="search-box"
            />
            </div>
        );
    }
});
