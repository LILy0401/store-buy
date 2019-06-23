import React, { Component } from 'react'
<<<<<<< HEAD
import './homepage.css'
=======
import './index.css'
import SwiperBar from '../../components/swiper/SwiperBar'
import {Router,Switch,Route,Redirect} from 'dva/router';
import {setRouters} from '../../routes/index'
>>>>>>> 2acb5a5b60853ed8412a269ee755cfd2b1b8592b
export default class HomePage extends Component {
    hotFn(){
        let {push} = this.props.history
        push('/Home/HomePage/hot')
    }
    render() {
        let {children,history} = this.props
        return (
            <div className='cll_home_wrap'>
                <div className='cll_home_position'>
                    <span className='iconfont'>&#xe63e;</span> 请选择配送地址
                </div>
                <div className="cll_home_shop">
                    <div className="cll_home_shop_sun">
                        <dl>
                            <dd><img src="./logo.png" alt=""/></dd>
                            <dt>
                                <p>喵掌柜杂货店<span>(已打样)</span></p>
                                <p>满49包邮</p>
                            </dt>
                        </dl>
                    </div>
                    <dl className='cll_home_xin'>
                        <dd><span className='iconfont'>&#xe608;</span></dd>
                        <dt>已关注</dt>
                    </dl>
                </div>
                <div className="cll_home_lunbo">
                    <SwiperBar />
                </div>
                <div className="cll_home_list">
                    <ul className="cll_home_tab">
                        <li onClick={this.hotFn.bind(this)}>热卖商品</li>
                        <li>店家推荐</li>
                        <li>跳楼促销</li>
                    </ul>
                    <div className="cll_home_lists">
                            <Router history={history}>
                                <Switch>
                                    {setRouters(children)}
                                </Switch>
                             </Router>
                    </div>
                </div>
            </div>
        )
    }
}
