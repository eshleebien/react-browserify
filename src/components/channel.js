'use strict'

var React = require('react/addons');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            btn_label: 'View Statistics'
        };
    },

    handleClick: function (e) {

        if (this.state.btn_label === 'View Statistics') {
            this.setState({btn_label: 'Hide Statistics'});
        } else {
            this.setState({btn_label: 'View Statistics'});
        }
    },

    render: function () {
        return (
            <div style = {{width:'100%', height:'100%'}} onClick = {this.handleClick}>
                <span key = {this.props.data.channel_id}>{this.props.data.title}</span>
                <span>{this.props.data.views}</span>
                <span>{this.props.data.subscribers}</span>
                <span>
                    <a key = {this.props.data.channel_id}
                    className = 'waves-effect waves-light btn red darken-3'>
                        {this.state.btn_label}
                    </a>
                </span>
            </div>
        );
    }
});
