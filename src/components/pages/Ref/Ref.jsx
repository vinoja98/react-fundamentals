import React, { Component } from 'react';
import CRef from './CreateRef.PNG'

export default class Ref extends Component {
   constructor(props) {
       super(props)
    this.inputRef=React.createRef();
    this.com=React.createRef();
   }
   componentDidMount(){
    this.com.current.focus();
    this.inputRef.current.focus();
      
   }
   clickHandler=(event)=>{
    alert('user: '+this.inputRef.current.value+'  comments: '+this.com.current.value);
    event.preventDefault();
   }
   render() {
    
    return (
        <>
        <div className="row" style={{flexDirection:'row'}} >
           <div className="col-sm-3 col-md-6 col-lg-4 mt-3">
                <img src={CRef} style={{width:'700px',height:'100%',paddingLeft:'10px'}}/>
            </div>
            <div className="col-sm-9 col-md-6 col-lg-8 "> 
           <div className="container border border-dark mt-3" style={{width:'500px',padding:'60px',backgroundColor:'rgb(20,40,60)'}}>
               <center><h1 style={{color:'white'}}>Form using createRef</h1></center>
           <form>
            <div>
                <label style={{color:'white'}} >Username :</label>
                <input type="text" ref={this.inputRef} class="input-group-prepend mb-3"/>
            </div>
            <div>
                <label style={{color:'white'}}>Comments :</label>
                <textarea ref={this.com} class="form-control mb-3" style={{height:'180px'}}></textarea>
            </div>
            <div>
                <label style={{color:'white'}}>Frame :</label>
                <select class="custom-select">
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
                
            </div>
            <div>
                <button  onClick={this.clickHandler} class="btn btn-primary mt-3">Click Here</button>
            </div>
            </form>
           </div>
           </div>
            
        </div>
        </>
    )
}
   
}
