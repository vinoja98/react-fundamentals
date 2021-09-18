import React, { Component } from 'react';
import quizService from'./QuizService/index';
import Qbox from './Qbox';
import './style.css';
import Score from './Score';

class Quiz extends Component {
    state={
        questions:[],
        responses:0,
        count:0,
        comment:'NA',
        num:2
    }

    handleInt=(e)=>{
        this.setState({
            //[e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
            num:parseInt(e.target.value)
          });
}
        
    
    computeAns=(answer,correct)=>{
        const{count,responses,num}=this.state;
        if(answer===correct){
            this.setState({
                count:count+1,
                comment:'correct'
            })
        }
        else{this.setState({

            comment:'incorrect'
        })}
        this.setState({
            responses:responses<num? responses+1:num
        })
    }
    playG=()=>{
        const{num}=this.state;
        quizService(num).then(response=>{this.setState({questions:response})})

    }
    replayG=()=>{
        this.playG();
        this.setState({
            responses:0,
        count:0,
        comment:'NA'
        })

    }
    componentDidMount(){
        this.playG()
    }
    render() {
        
        const{questions,responses,count,comment,num}=this.state;
        return (
            <>
             <div className="container">
                 <label><u>Enter number of questions you need</u> and <b>Click the button</b>:<div style={{color:'red'}}>*number of clicks valid=number of questions *</div></label>
                 <input className="input-group-prepend mb-3" type="number"  onChange={this.handleInt}/>
                 <button className="buttton primary" onClick={this.playG}>CLick</button>
                 <div className="title">Current Score- {responses>0? 'no'+responses:'each question'} is {comment}</div> {
             questions.length>0 &&  responses<num &&
             questions.map(
                 ({question,answers,correct,questionId})=>(<Qbox question={question} options={answers} key={questionId} 
                    selected={
                        answer=>this.computeAns(answer,correct)
                    } comment={comment}
                    />))}  
            {responses===num?(<Score count={count} play={this.replayG} num={num}/>):null}     
            </div>
        </>
        )
    }
}

export default Quiz
