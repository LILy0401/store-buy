import React, { Component } from 'react'
import {Goodslist} from '../../services'
import './hotBuy.css'
export default class hotBuy extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentWillMount(){
        Goodslist({
            query:{
                page:2
            }
        }).then(res=>{
            if(res.code===1){
                this.setState((state)=>{
                    return {data:res.data}
                })
            }else{
                alert('err:未能获取到数据')
            }
        })
    }
    //点击商品跳到详情
    go_proDetail(){
        this.props.history.push('/proDetail')
    }
    render() {
        let {data} = this.state;
        console.log(data)
        return (
            <div className='hotBuy_swiper'>   
                    {
                         data.map((item,i)=>{
                        return  <dl key={item.rank} className='hotBuy_item' onClick={this.go_proDetail.bind(this)}>
                                <dt><img src={item.img_url}></img></dt>
                                <dd>
                                    <p>{item.product_name}</p>
                                    <p>{item.publisher}</p>
                                    <div className='hotBuy_last'>
                                        <span>{item.price.original_price}</span>
                                        <div className='hotBuy_button'>
                                            <p style={{display:'none'}}><span>-</span><span>0</span></p>
                                            <span>+</span>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                    })
                    }
            </div>
        )
    }
}