/** @jsx React.DOM */
'use strict'

var React = require('react/addons'),
    SearchBox = require('../components/search');

module.exports = React.createClass({
    getInitialState: function () {
        return {value: '', title: 'Channel Growth Feature'};
    },

    render: function () {
        return (
            <div>
            <div id = "header">
                <SearchBox/>
            </div>
            <div id = "content"></div>
            </div>
        );
    }
});
