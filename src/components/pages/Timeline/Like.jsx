import React, { Component } from 'react'

export class Like extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    handleCount=()=>{
        const{count}=this.state;
        this.setState({count:count+1})
    }
    
    render() {
        return (
            <div>
                <div className="icon-button" style={{margin:'5px',width:'40px',height:'40px',backgroundColor:'aqua'}}
                onClick={this.handleCount}>
                    {this.props.icon}
                </div>
                <div>{this.state.count}</div>
            </div>
        )
    }
}

export default Like
