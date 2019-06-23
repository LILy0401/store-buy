import React, { Component } from 'react'
import {Router,Switch,Route,Redirect} from 'dva/router';
import './home.css'
import {setRouters} from '../../routes/index'
export default class Home extends Component {
    routerFn(){
        let {push} = this.props.history
        push('/Home/ShopCar')
    }
    homePageFn(){
        let {push} = this.props.history
        push('/Home/HomePage')
    }
    mePageFn(){
        let {push} = this.props.history
        push('/Home/MePage')
    }
    divFn(){
        console.log(this)
    }
    scrollFn(){
            var scrollH = document.documentElement.scrollHeight;// 文档的完整高度
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop; // 当前滚动条的垂直偏移
            var screenH = window.screen.height;  // 屏幕可视高度
            console.log(scrollH,scrollT,screenH)
            if ((scrollH - scrollT - screenH) < 5) { //5只是一个相对值，可以让页面再接近底面的时候就开始请求
              // 执行请求
              console.log('现在开始加载@！！！')
            }
    }
    render() {
        // 这是一个常识
        let {children,history} = this.props
        return (
            <div className='cll_wrap'>
                <div className="cll_cont" onScroll={this.scrollFn}>
                   <Router history={history}>
                        <Switch>
                            {setRouters(children)}
                        </Switch>
                 </Router>
                </div>
                <div className="cll_bottom">
                    <dl onClick={this.homePageFn.bind(this)}>
                        <dt><span className='iconfont'>&#xe622;</span></dt>
                        <dd>首页</dd>
                    </dl>
                    <dl onClick={this.routerFn.bind(this)}>
                        <dt><span className='iconfont'>&#xe621;</span></dt>
                        <dd>购物车</dd>
                    </dl>
                    <dl onClick={this.mePageFn.bind(this)}>
                        <dt><span className='iconfont'>&#xe604;</span></dt>
                        <dd>我的</dd>
                    </dl>
                </div>
            </div>
        )
    }
}
