import React from 'react';

const UpdatedComponent=(OriginalComponent,incrementNum)=>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state={count:0}
        }
        incrementCounter=()=>{
            this.setState(prevState=>{
                return{count:prevState.count+incrementNum}
            }
        )
    }
    render(){
        return(<OriginalComponent
        count={this.state.count}
        incrementCounter={this.incrementCounter}
        {...this.props}//spread operator let Move and Click to pass props
        />
       
            )
    }
}
return NewComponent
}
export default UpdatedComponent;