import React from 'react';
import moment from 'moment';


import './NameListItem.css';

//something shuld be return from every file in resct js
function NameListItem(props){
    return(
        <React.Fragment>
            <li className="list-group-item shadow-sm" style={{backgroundColor:'lightgreen',width:'65%'}}>
                <div className="row align-items-center">
                    <div className="col-2">
                    <img src={props.avatar} alt={props.name} className="border border-dark rounded-circle"/>
                    </div>
                    <div className="col-13" style={{paddingRight:'30%'}}>
                        <h4><p className="redText">{props.name}</p></h4>
                        <p style={{color:'purple'}}>{props.city} | {props.email}  </p>
                        
                        {/* <p>Birtday: {new Intl.DateTimeFormat('en-GB').format(new Date(props.birthday))}</p> */}
                       {moment(props.birthday).format('DD-MM-YYYY')}
                    </div>
                    
                </div>
                
                
            </li>
            
        </React.Fragment>
    )
}
export default NameListItem;