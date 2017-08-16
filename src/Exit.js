/**
 * Created by dllo on 17/8/16.
 */
import React, {Component} from 'react';
class Exit extends Component {
    render () {
        return (
            <div>
                <span>{this.props.user}已登录</span>
                <br/>
                <button onClick={this.props.click}>退出</button>
            </div>
        )
    }
}
export default Exit