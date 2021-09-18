
import React,{Component}  from 'react';

/* 
const Qbox=({question,options})=>(
<div className="questionBox"><div className="question">{question}</div>
<div className="answerBtn">{options}</div>

</div>
) */


class Qbox extends Component {
    state = {
             answer:this.props.options,
            selected:this.props.selected,
            black:true
             
        }
    
  
    render() {
        let answerBtn = this.state.black ? "blackButton" : "answerBtn";
        return (
            <>
            {/* <div className="title"><h3>{this.props.comment} </h3></div> */}
                <div className="questionBox">
                     <div className="question">{this.props.question}</div>
                    {
                    this.state.answer.map((text,index)=>
                        (<button className={answerBtn} key={index} 
                        onClick={()=>
                                        {
                                        this.setState({/* answer:[text], */black: !this.state.black});
                                        this.state.selected(text)
                                       
                                        }
                                } >
                        {text}</button>)
                    )
                    }
                    
                    
                </div>
                </>
            );
       
    }
}

export default Qbox



