/** @jsx React.DOM */
'use strict'

var React = require('react/addons'),
    request = require('superagent');

module.exports = React.createClass({
    getInitialState: function () {
        return {value: '', h2: 'Channel Growth Statistics'};
    },

    onChange: function (e) {
        console.log(e.target.value);

        request
            .get('http://l1.freedom.tm:3000/channels')
            .end(function (err, result) {
                console.log(result);
            });
    },

    render: function () {
        return (
            <div className = 'input-field'>
                <input type = 'text'
                    placeholder = 'Search channel'
                    onChange = {this.onChange}
                    className = 'search-box'
                />
                <label className='active'>Channel Growth Statistics</label>
            </div>
        );
    }
});
