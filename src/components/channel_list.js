'use strict'

var React = require('react/addons'),
    Channels = require('../models/channels');

module.exports = React.createClass({
    getInitialState: function () {

    },

    render: function () {
        var items = _.map(collection, function(item) {
            return (<ChannelItem 
        });
        return (
            <Channel>
            {items}
            </Channel>
            <div>
            <div id = "header">
                <SearchBox/>
            </div>
            <div id = "content"></div>
            </div>
        );
    }
});
