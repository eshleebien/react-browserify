/** @jsx React.DOM */
'use strict'

var React = require('react/addons'),
    SearchBox = require('../components/search'),
    ChannelList = require('../components/channel_list');

module.exports = React.createClass({

    getInitialState: function () {
        return {value: '', title: 'Channel Growth Feature'};
    },

    render: function () {
        return (
            <div>
            <div id = "header">
            </div>
            <div id = "content">
                <SearchBox/>
                <ChannelList/>
            </div>
            </div>
        );
    }
});
