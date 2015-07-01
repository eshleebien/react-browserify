'use strict'

var React = require('react/addons');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            btn_label: 'View Statistics'
        };
    },


    render: function () {
        return (
            <div>
                <span key = {this.props.data.channel_id}>{this.props.data.title}</span>
                <span>{this.props.data.views}</span>
                <span>{this.props.data.subscribers}</span>
            </div>
        );
    }
});
