import React, { Component } from 'react'
import './index.css'
import {ShopList} from '../../services'
export default class ListPage extends Component {
    tzFn(){
        let {push} = this.props.history;
        push('/HomePage')
    }
    componentWillMount(){
    }
    render() {
        return (
            <ul className='cfp_listpage_wrap'>
                <li onClick={this.tzFn.bind(this)}>喵掌柜杂货店</li>
            </ul>
        )
    }
}
