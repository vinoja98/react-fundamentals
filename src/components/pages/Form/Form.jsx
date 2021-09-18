import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             frame:'React'
        }
    }
   /*  handleUser=(event)=>{
        this.setState({username:event.target.value})
    }
    handleComment=(event)=>{
        this.setState({comments:event.target.value})
    }
    handleFramet=(event)=>{
        this.setState({frame:event.target.value})
    } */
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleButton=(event)=>{
        this.setState({button:event.target.value})
    }
    handleSubmit=(event)=>{
        alert(this.state.username+" "+this.state.comments+" "+this.state.frame);
        event.preventDefault();//stop refresh
        let formData = new FormData();
        formData.append('username', this.state.username)
        formData.append('comments', this.state.comments)
        formData.append('frame', this.state.frame)
        formData.append('button', this.state.button)
        const url= "http://localhost/react_php/api/form.php"
        axios(url,formData)
        .then(function (response) {
            //handle success
            console.log(response)

        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
        
    }
    render() {
        const {username,comments,frame}=this.state;
        return (
            
            <div >
               <div className="container border border-dark mt-5" style={{width:'40%',padding:'65px',backgroundColor:'rgb(20,40,60)'}}>
                   <center><h1 style={{color:'white'}}>Form using Controlled Components</h1></center>
               <form onSubmit={this.handleSubmit}>
                <div>
                    <label style={{color:'white'}} >Username :</label>
                    <input type="text" name="username" value={username} onChange={this.handleChange} class="input-group mb-3"/>
                </div>
                <div>
                    <label style={{color:'white'}}>Comments :</label>
                    <textarea name="comments" value={comments} onChange={this.handleChange} class="form-control mb-3"></textarea>
                </div>
                <div>
                    <label style={{color:'white'}}>Frame :</label>
                    <select name="frame" value={frame} onChange={this.handleChange} class="custom-select">
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                    
                </div>
                <div>
                <button type="submit" class="btn btn-primary" name="import"value="submit" onChange={this.handleButton}>Submit</button>
                </div>
                </form>
               </div>
               
                
            </div>
            
        )
    }
}
