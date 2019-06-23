import React, { Component } from 'react'
import './listPage.css';
import http from '../../utiles/http';
export default class ListPage extends Component {
    componentWillMount(){
        http.get('/buyer/storelist').then((res)=>{
            console.log(res);
        })
    }
    goDetail(){
        this.props.history.push('/Home/HomePage')
    }
    render() {
        return (
            <div className='cfp_listpage_wrap'>
                <dl className='cfp_listpage_dl' onClick={this.goDetail.bind(this)}>
                    <dt>
                        <img src='./1.png'></img>
                    </dt>
                    <dd>
                        <p>二十和石榴的店(你的专属)</p>
                        <p>规格:高大上</p>
                        <p>宗旨:</p>
                    </dd>
                </dl>
                <dl className='cfp_listpage_dl'>
                    <dt>
                       
                        <img src='./2.jpg'></img>
                    </dt>
                    <dd>
                        <p>二十和石榴的店(你的专属)</p>
                        <p>规格:高大上</p>
                        <p>宗旨:</p>
                    </dd>
                </dl>
            </div>
          
        )
    }
}
