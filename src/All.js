/**
 * Created by dllo on 17/8/16.
 */
import React, {Component} from 'react';
import Login from './Login';
import NoLogin from './NoLogin';
import Exit from './Exit';
class All extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            layout: '1'
        }
    }

    userText = (e) => {
        this.setState({
            user: e.target.value
        })
    }

    OneClick = () => {
        this.setState({
            layout: '2'
        })
    }
    TwoClick = () => {
        this.setState({
            layout: '3'
        })
    }
    ThreeClick = () => {
        this.setState({
            layout: '1'
        })
    }


    render() {
        if (this.state.layout === '1') {
            return (
                <NoLogin click={this.OneClick}/>
            )
        } else if (this.state.layout === '2') {
            return (
                <Login click={this.TwoClick} username={this.userText}/>
            )
        } else if (this.state.layout === '3') {
            return (
                <Exit click={this.ThreeClick} user={this.state.user}/>
            )
        }

    }
}
export default All

