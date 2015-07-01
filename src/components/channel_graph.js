'use strict'

var React = require('react/addons'),
    Chart = require('react-google-charts').Chart,
    moment = require('moment');

module.exports = React.createClass({

    getInitialState: function () {
        return {
        };
    },

    render: function () {
        var elem;

        if (this.props.data.graph.has_chart) {
            var subs_length = this.props.data.graph.charts[0].data.length;
            var views_length = this.props.data.graph.charts[1].data.length;

            var old_subs = this.props.data.graph.charts[0].data[1][1];
            var new_subs = this.props.data.graph.charts[0].data[subs_length-1][1];

            var old_views = this.props.data.graph.charts[1].data[1][1];
            var new_views = this.props.data.graph.charts[1].data[subs_length-1][1];

            this.props.data.graph.charts[0].options.title = "Subscribers : " + (((new_subs - old_subs)/old_subs) * 100) + "%";
            this.props.data.graph.charts[1].options.title = "Views : " + (((new_views - old_views)/old_views) * 100) + "%";

            elem =
                (<div className='channel-graph'>
                <Chart chartType={"LineChart"} data = {this.props.data.graph.charts[0].data}
                width={"50%"} height={"500px"} options={this.props.data.graph.charts[0].options}
                graph_id = {this.props.data.channel_id + "-subs-graph"} legend_toggle={true}
                />

                <Chart chartType={"LineChart"} data = {this.props.data.graph.charts[1].data}
                width={"50%"} height={"500px"} options={this.props.data.graph.charts[1].options}
                graph_id = {this.props.data.channel_id + "-view-graph"} legend_toggle={true}
                />
                </div>
                );
        }
        else {
            elem = 'No data';
        }

        return (
            <div className = 'channel-details'>
                <div className='channel-desc'>
                </div>
                {elem}
            </div>
        );
    }
});
