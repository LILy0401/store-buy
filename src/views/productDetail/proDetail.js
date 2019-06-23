import React, { Component } from 'react';
import './proDetail.css';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

class proDetail extends Component {
    state={
        index:0
    }
    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container',{
            slidesPerView:3,
            spaceBetween:20
        })
    }
    render() {
  
        return (
            <div className='cll_prodetail'>
                <div className='cll_pro_header'>
                    <span className='iconfont iconjiantou4'>返回</span>
                    <span>商品详情</span>
                    <span className='iconfont icontuya_huabanfuben'></span>
                </div>
                <div className='cll_pro_content'>
                    <div className='cll_pro_img'>
                
                        <div className='swiper-container'>
                            <div className='swiper-wrapper'>
                                
                                <img src='./6.jpg'></img>
                              
                                <img src='./5.jpg'></img>
                               
                                <img src='./4.jpg'></img>
                               
                            </div>  
                        </div>
                    </div>
                    <div className='cll_pro_title'>
                        <p>
                            <span>￥</span>
                            40
                        </p>
                        <p>
                            猫掌柜梅花糖果混合口味喜糖批发零食糖果混合口味喜糖批发零食
                        </p>
                    </div>
                    <div className='cll_pro_select'>

                    </div>
                </div>
                <div className='cll_pro_footer'>

                </div>
            </div>
        );
    }
}

export default proDetail;