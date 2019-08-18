import React, { Component } from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions';

//需要 babelrc 配置插件 "plugins": ["@babel/plugin-proposal-decorators"]
// export default @connect(
//     state=>state
// )

class Counter extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={()=>this.props.increment()}>increment</button>
                <button onClick={()=>this.props.increment_async()}>async increment</button>
                <button onClick={()=>this.props.increment_saga()}>saga increment</button>
            </div>
        )
    }
}
export default connect(state=>state,actions)(Counter)
