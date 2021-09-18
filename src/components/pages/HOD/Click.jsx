import React, { Component } from 'react'
import UpdatedComponent from './HOD'

class Click extends Component {
    render() {
        const{count,incrementCounter}=this.props
        return (
            <div>
                <button className=" btn btn-primary" onClick={incrementCounter}>{count} times Clicked by {this.props.name}</button>
            </div>
        )
    }
}
export default UpdatedComponent(Click,1);