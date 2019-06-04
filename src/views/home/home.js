import React, { Component } from 'react'
import {connect} from 'react-redux';
 class Home extends Component {
    render() {
        return (
            <div>
                {/* Get user email from redux */}
               User {this.props.user.email} is logged in.
            </div>
        )
    }
}


export default connect(state => state)(Home);
