'use strict'

var React = require('react/addons'),
    Channels = require('../models/channels'),
    ChannelView = require('./components/channel');

module.exports = React.createClass({
    getInitialState: function () {
        return {data: []};
    },

    handleClick: function (e) {

    },

    componentDidMount: function () {
        var that = this;

        Channels(null, function (err, result) {
            if (err) {
                console.log(err);
                that.setState({data: []});
            }

            that.setState({data: result.body.data});
        });
    },

    render: function () {
        var channels = this.state.data,
            that = this;

        return (
            <div className = "row">
                <ul className='collapsible popout collapsible-accordion' data-collapsible='accordion'>
                    {channels.map(function(channel) {
                        channel.title = channel.title ? channel.title : channel.channel_id;

                        return <li data = {channel.channel_id} onClick={that.handleClick}>
                            <div className='collapsible-header'>
                                <span key = {channel.channel_id}>{channel.title}</span>
                                <span>{channel.views}</span>
                                <span>{channel.subscribers}</span>
                                <span>
                                    <a className = 'waves-effect waves-light btn red darken-3'>
                                        View Statistics
                                    </a>
                                </span>
                            </div>
                            <div className='collapsible-body'>
                                <p>aaaa</p>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
});
