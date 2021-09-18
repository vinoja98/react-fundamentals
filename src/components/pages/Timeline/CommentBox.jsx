import React, { Component } from 'react'

export class CommentBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             comment:''
        }
    }
    handleChange=(e)=>{
        const{comment}=this.state;
        this.setState({comment:e.target.value})
    }
    
    render() {
        return (
            <div>
                <b>Comments:</b>
                 <textarea className="form-control mt-3 mb-3" value={this.state.comment} onChange={this.handleChange}>{this.state.comment}</textarea>
            </div>
        )
    }
}

export default CommentBox
