import React, { Component } from 'react';
import './count.css';
class count extends Component {
    state={
        count:1
    }
    noadd(){
        if(this.state.count>1){
            this.setState({
                count:this.state.count-=1
            },()=>{
                this.props.getCount(this.state.count);
            })
        }
        
    }
    add(){
        
        this.setState({
            count:this.state.count+=1
        },()=>{
            this.props.getCount(this.state.count);
        })
    }
    render() {
        let { count } = this.state;
        return (
            <div className='cll_count'>
                <span onClick={this.noadd.bind(this)}>-</span>
                <span>{count}</span>
                <span onClick={this.add.bind(this)}>+</span>
            </div>
        );
    }
}

export default count;