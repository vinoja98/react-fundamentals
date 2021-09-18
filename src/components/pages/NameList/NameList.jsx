import React, {useState,useEffect} from 'react'; //useState is a hook
import NameListItem from './NameListItem';

function NameList(){
    const [loadData,setLoadData]=useState(new Date());//new Date is assigned to id
    //nameList has the current state, setNameList is used when we add new person
    //if useState(0) 0 is assigned to nameList, useState is a js ES7 syntax
    const [nameList,setNameList]=useState([
        {
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
);
//useEffect is used to take info by https
//fetch is a promise(asynchronize so use then keyword)
useEffect(()=>{
    fetch("https://randomuser.me/api")
    .then((response)=>{
        return response.json();
    }).then((responseData)=>{
        setNameList(nameList=>[...nameList,responseData.results[0]]);
    });

},[loadData]);//[] used to stop the never ending loop

    const nameListComponenet=()=>{
        return nameList.map((aName)=>{
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

    const addUserHandler=()=>{
        const newUser={
            
                id:6,
                name: {title: "mr",first: "Breaking",last: "Bad",},
                location: {city: "Vegas",},
                email: "b@gmail.com",
                dob: {date: "1998-08-09T09:44:18.674Z",age: 26},
                picture: {medium: "https://randomuser.me/api/portraits/med/men/41.jpg",},
            
        };
        //concat makes a copy of the previous array and add the new item to the copy
        //setNameList(nameList=>nameList.concat(newUser));

        //spread Operator 
        //setNameList([...NameList,newUser]);

        //use wrap up function
        setNameList(nameList=>[...nameList,newUser]);
    };

    const addUserHandler2=()=>{
        setLoadData(new Date());
    };

    return(
        //mt-margin top mb-margin bottom in bootstrap
    <React.Fragment>
            <div className="contain"  style={{backgroundColor:'rgb(60,30,30)',paddingLeft:'10%'}}>
            <button className="btn btn-primary mt-3 mb-3" onClick={addUserHandler2}>Add</button>
            
            <ul className="list-group">{nameListComponenet()}</ul>
            </div>
      
    </React.Fragment>   
    );
}
export default NameList;