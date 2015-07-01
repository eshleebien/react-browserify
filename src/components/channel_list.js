'use strict'

var React = require('react/addons'),
    Channels = require('../models/channels'),
    ChannelView = require('../components/channel'),
    ChannelStats = require('../models/channelstats'),
    Graph = require('../components/channel_graph');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            data: []
        }
    },

    componentDidMount: function () {
        var that = this;

        Channels(null, function (err, result) {
            if (err) {
                that.setState({data: []});
            }

            result.body.data.forEach(function (channel) {
                channel.graph = {
                    has_chart: false,
                    charts: [
                        {
                            data: [['date', 'subs']],
                            options: {
                                title: "Subscribers",
                                hAxis: {title: 'Date'},
                                vAxis: {title: 'Count'}
                            },
                        },
                        {
                            data: [['date', 'views']],
                            options: {
                                title: "Views",
                                hAxis: {title: 'Date'},
                                vAxis: {title: 'Count'}
                            },
                        }
                    ]
                }

                channel.has_statistics = false;
                channel.btn_label = "View Statistics";
            });

            that.setState({data: result.body.data});
        });
    },

    handleClick: function (e) {
        var that = this,
            channel = this.state.data[e.currentTarget.id];

        if (this.state.data[e.currentTarget.id].btn_label === 'View Statistics') {
            this.state.data[e.currentTarget.id].btn_label = "Hide Statistics";

            if (!channel.has_statistics && !channel.graph.has_chart) {
                ChannelStats({channel_id: channel.channel_id},
                function (err, result) {
                    var labels = [],
                        length = 0;

                    channel.has_statistics = true;

                    if (err) {
                        channel.graph.has_chart = false;

                        return;
                    }

                    while (length !== result.body.length) {
                        channel.graph.charts[0].data.push([result.body[length].insert_date, result.body[length].subscribers]);
                        channel.graph.charts[1].data.push([result.body[length].insert_date, result.body[length].views]);
                        length++;
                    }

                    channel.graph.has_chart = true;
                    that.setState({data: that.state.data});
                });
            }

        } else {
            this.state.data[e.currentTarget.id].btn_label = "View Statistics";
        }

        this.setState({
            data: this.state.data
        });
    },

    render: function () {
        var channels = this.state.data,
            that = this,
            count = -1;

        return (
            <div className = "row">
                <ul className='collapsible collapsible-accordion' data-collapsible='expandable'>
                    {channels.map(function(channel) {
                        channel.title = channel.title ? channel.title : channel.channel_id;
                        count++;

                        return <li id = {count} onClick = {that.handleClick}>
                            <div className='collapsible-header'>
                                <ChannelView data = {channel}/>
                                <span>
                                    <a key = {channel.channel_id + '-btn'}
                                    className = 'waves-effect waves-light btn red darken-3'>
                                        {channel.btn_label}
                                    </a>
                                </span>
                            </div>
                            <div className='collapsible-body'>
                                <Graph data = {channel}/>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
});
