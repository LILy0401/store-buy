import React, { Component } from 'react'
import './index.css'
export default class HomePage extends Component {
    render() {
        return (
            <div className='cll_home_wrap'>
                <div className='cll_home_position'>
                    <span>icon</span> 请选择配送地址
                </div>
                <div className="cll_home_shop">
                    <div className="cll_home_shop_sun">
                        <dl>
                            <dd></dd>
                            <dt>
                                <p>12123</p>
                                <p>123</p>
                            </dt>
                        </dl>
                    </div>
                    <dl>
                        <dd></dd>
                        <dt></dt>
                    </dl>
                </div>
                <div className="cll_home_lunbo">
                
                    轮播图呀
                </div>
                <div className="cll_home_list">
                    <div className="cll_home_tab"></div>
                    <ul className="cll_home_lists">
                        <li>this is list</li>
                    </ul>
                </div>
            </div>
        )
    }
}
