import React, { Component } from 'react';
import './commodity.css';
import Checkboxs from '../Checkboxs/checkbox';
import Count from '../Count/count';
class commodity extends Component {
    state={
        count:null,
        flag:false
    }
    checked=(flag)=>{
        this.setState({
            flag:flag
        })
    }   
    getCount=(count)=>{
        this.setState({
            count:count
        }) 
    }
    render() {
        return (
            <>
                <div className='cll_commodity_css'>
                    <Checkboxs checked={this.checked}></Checkboxs>
                    <dl className='cll_commodity_dl'>
                        <dt className='cll_commodity_dt'>
                            <img src='./4.jpg'></img>
                        </dt>
                        <dd className='cll_commodity_dd'>
                            <div className='cll_dd_title'>
                                <p>二十和石榴的幸福套餐</p>
                                <span className='iconfont iconshanchu'></span>
                            </div>
                            <p className='cll_dd_two'>
                                无限套餐xN;
                            </p>
                            <div className='cll_car_count'>
                                <span>￥102.00</span>
                               
                                <Count  getCount={this.getCount.bind(this)}></Count>
                                
                            </div>
                        </dd>
                    </dl>
                </div>
            </>
        );
    }
}

export default commodity;