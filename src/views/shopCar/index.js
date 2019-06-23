import React, { Component } from 'react'
import './shopcar.css';
import Commodity from '../../components/Commodity/commodity';
import request from '../../utiles/http';
import Cookie from 'js-cookie';
export default class ShopCar extends Component {
    componentDidMount(){
        request.post('/buyer/cart/list',{
            body:{
                token:Cookie.get('token')
            }
        }).then((res)=>{
            console.log(res);
        })
    }
    render() {
        return (
            <div className='cll_shop'>
                <div className='cll_shopcar_header'>
                    <span className='iconfont iconjiantou4'>返回</span>
                    <span>购物车</span>
                    <span className='iconfont iconxinshangbiaoqing'></span>
                </div>
                <div className='cll_shopcar_content'>
                    <Commodity></Commodity>
                </div>
                <div className='cll_shopcar_footer'>

                </div>
            </div>
        )
    }
}
