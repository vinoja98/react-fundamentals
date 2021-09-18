import React, {Component} from 'react';
import NameListItem from '../NameList/NameListItem';

class NameClass extends Component{
    //constructor is also a life cycle method
    constructor(){
        super();
        this.state={
            ready:false,
            nameList:[{
                id:1,//since each child should have a unique key
                name: {title: "mr",first: "Brad",last: "Gibson",},
                location: {city: "Mount-Lavinia",},
                email: "brad.gibson@example.com",
                dob: {date: "1993-07-20T09:44:18.674Z",age: 26},
                picture: {medium: "https://randomuser.me/api/portraits/med/men/11.jpg",},
                },
                {
                    id:2,
                    name: {title: "mrs",first: "Ana",last: "Moya",},
                    location: {city: "Galle",},
                    email: "moya@example.com",
                    dob: {date: "1999-08-20T09:44:18.674Z",age: 26},
                    picture: {medium: "https://randomuser.me/api/portraits/med/women/11.jpg",},
                },
                {
                    id:3,
                    name: {title: "mr",first: "Saul",last: "Goodman",},
                    location: {city: "Mexico city",},
                    email: "saul@example.com",
                    dob: {date: "1998-03-02T09:44:18.674Z",age: 26},
                    picture: {medium: "https://randomuser.me/api/portraits/med/men/32.jpg",},
                },
                {
                    id:4,
                    name: {title: "ms",first: "Kim",last: "Wexler",},
                    location: {city: "Moratuwa",},
                    email: "kim@example.com",
                    dob: {date: "1999-08-25T09:44:18.674Z",age: 26},
                    picture: {medium: "https://randomuser.me/api/portraits/med/women/33.jpg",},
                },
                {
                    id:5,
                    name: {title: "ms",first: "Vino",last: "Rat",},
                    location: {city: "Colombo",},
                    email: "v@gmail.com",
                    dob: {date: "1998-08-02T09:44:18.674Z",age: 26},
                    picture: {medium: "https://randomuser.me/api/portraits/med/women/65.jpg",},
                },

            ]
        };

    }
    //componentDidMount lifecycle method is called when code is executed
    componentDidMount(){
        fetch("https://randomuser.me/api")
    .then((response)=>{
        return response.json();
    }).then((responseData)=>{
        this.setState({nameList:[...this.state.nameList,responseData.results[0]]});
        
    });
    }

    //componentDidUpdate lifecycle method is called when a state is changed(when setState method is called)
    componentDidUpdate(){
        //check whether ready is true
        if(this.state.ready){ fetch("https://randomuser.me/api")
        .then((response)=>{
            return response.json();
        }).then((responseData)=>{
            this.setState({
                ready:false,
                nameList:[...this.state.nameList,responseData.results[0]]});
             
        });}
       
    }
    nameListComponenet=()=>{
        return this.state.nameList.map((aName)=>{
        return(
            <NameListItem 
        key={aName.id}
        name={aName.name.first+ ' '+aName.name.last}
        city={aName.location.city}
        email={aName.email}
        birthday={aName.dob.date}
        avatar={aName.picture.medium}
        />
        );
    });
    };
    addUserHandler3=()=>{
        this.setState({ready:true});
    }
    render(){ return(
        <>
         <div className="contain"  style={{backgroundColor:'rgb(10,20,30)',paddingLeft:'10%'}}>
            
            <button className="btn btn-primary mt-3 mb-3" onClick={this.addUserHandler3}>Add A Person</button>
            
            <ul className="list-group">{this.nameListComponenet()}</ul>
            </div>
            <div></div>
           
        </>
    );}
   
}

export default NameClass;