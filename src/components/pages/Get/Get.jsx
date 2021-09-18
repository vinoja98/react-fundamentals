import React, { Component } from 'react';
import axios from 'axios';

class Get extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             msg:''
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            this.setState({posts:response.data})
        })
        .catch(error=>{
            this.setState({msg:'wrong API/not connected to internet'})
        })
        
    }

    render() {
        const{posts,msg}=this.state;
        return (
            <div>
                <h1>List of websites</h1>
                {msg? <div>{msg}</div>:null}
                <table className="table table-dark ml-3" style={{width:'30%',fontSize:'20px'}}>{
                posts.length?
                
                posts.map(post=> <tr  key={post.id}><li style={{paddingLeft:'60px'}} >{post.website}</li></tr> ) :
                null}
               
              
               
            </table>
            </div>
        )
     }
}

export default Get
