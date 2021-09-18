import React, { Component } from 'react'
import Like from './Like';
import CommentBox from './CommentBox';

export class Photo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <div><h3>{this.props.title}</h3></div>
                <div className="row" style={{flexDirection:'row'}} >
                    <div className="col-sm-6 col-md-6 col-lg-7 ">
                        <img src={this.props.image} style={{width:'400px',height:'400px',padding:'10px'}}/>
                    </div>
                    <div className="col-sm-3 col-md-6 col-lg-4 mt-3">
                     <div className="row" style={{flexDirection:'row'}} >
                        <Like icon="😀"/>
                        <Like icon="😢"/>
                        <Like icon="😂"/>
                        <Like icon="😡"/>
                        <Like icon="❤️"/>
                        <Like icon="👍"/>
                     </div>
                     <button className="btn btn-primary mt-3 mb-3">Add React</button>
                    <CommentBox /* comment={this.props.comment} *//>
                        
                    </div>
                </div>
                
                
                <hr/>
            </div>
        )
    }
}

export default Photo
