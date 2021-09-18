import React from 'react';
import {Link} from 'react-router-dom';
function HeaderBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar shadow-md" style={{backgroundColor:'gold'}}>
            <span className="navbar-brand mb-0 h1">React JS</span>
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" style={{paddingLeft:'10px',fontSize:'20px'}} to="/">HOD</Link></li>
                <li className="nav-item"><Link className="nav-link" style={{paddingLeft:'10px',fontSize:'20px'}} to="/namelist">Name-List</Link></li>
                <li className="nav-item"><Link className="nav-link" style={{paddingLeft:'10px',fontSize:'20px'}} to="/nameclass">Name-Class</Link></li>
                <li className="nav-item"><Link className="nav-link" style={{paddingLeft:'10px',fontSize:'20px'}} to="/form">Form</Link></li>
                <li className="nav-item"><Link className="nav-link" style={{paddingLeft:'10px',fontSize:'20px'}} to="/ref">Ref</Link></li>
                <li className="nav-item"><Link className="nav-link" style={{paddingLeft:'10px',fontSize:'20px'}} to="/get">Http-get</Link></li>
                
            </ul>
        </nav>
    )
}

export default HeaderBar;
