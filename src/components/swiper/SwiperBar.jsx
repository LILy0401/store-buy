import React, { Component } from 'react'
import './style.css'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
export default class SwiperBar extends Component {
    componentDidMount () {
    
        var mySwiper = new Swiper('.swiper-container', {
          autoplay: true,
          loop: true,
          pagination : {
              el: '.swiper-pagination',
          }
        });
  }
    render() {
        return (
            <div className="App swiperBar_swiper">
            <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide"><img src="./1.gif" alt="lunbo"/></div>
              <div className="swiper-slide"><img src="./1.jpg" alt="lunbo"/></div>
            </div>
            <div className='swiper-pagination'></div>
          </div>
          </div>
        )
    }
}














