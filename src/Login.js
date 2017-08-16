/**
 * Created by dllo on 17/8/16.
 */
import React, { Component } from 'react';
class Login extends Component {
    render () {
        return (
            <div>
                <input type="text" onChange={this.props.username}/>
                <br/>
                <input type="password"/>
                <br/>
                <input type="submit" value="登录" onClick={this.props.click}/>
            </div>
        )
    }
}
export default Login
