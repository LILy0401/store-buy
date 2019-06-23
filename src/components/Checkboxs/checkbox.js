import React, { Component } from 'react';
import './checkbox.css';
class checkbox extends Component {
    state={
        flag:false
    }
    checkeds=()=>{
        this.setState({
            flag:!this.state.flag
        })
        this.props.checked(this.state.flag);
    }
    render() {
        return (
            <div className='checkbox_dom'>
                <span className={this.state.flag?'cll_span_checked':'cll_span'} onClick={this.checkeds}></span>
            </div>
        );
    }
}

export default checkbox;