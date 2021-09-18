import React, {useState} from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import {ReactComponent as Bell} from './icons/notification-bell-svgrepo-com.svg';
import {ReactComponent as Plus} from './icons/plus.svg';
import {ReactComponent as Msg} from './icons/message-svgrepo-com.svg';
import {ReactComponent as Down} from './icons/caret-down.svg';
import {ReactComponent as Chevron} from './icons/chevron.svg';
import {ReactComponent as User} from './icons/user.svg';
import {ReactComponent as Cog} from './icons/cog.svg';
import {ReactComponent as QuizG} from './icons/quiz.svg';
import {ReactComponent as Video} from './icons/video.svg';
import './components/pages/NameList/NameList';
import NameList from './components/pages/NameList/NameList';
import Home from './components/pages/Home/Home';
import Ref from './components/pages/Ref/Ref';
import NameClass from './components/pages/NameClass/NameClass';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Form from './components/pages/Form/Form';
import Get from './components/pages/Get/Get';
import Quiz from'./components/pages/Quiz/Quiz';
import Timeline from './components/pages/Timeline/Timeline';
import Display from './components/pages/Form/Display';

function App() {
  return (
    <div>
    <BrowserRouter>
      <HeaderBar/>
        <Navbar>
          <NavItem icon={<Down/>}>
            <Dropdown>
              <DropItem leftIcon={<User/>} rightIcon={<Video/>}>My Profile</DropItem>
              <New2/>
            </Dropdown>
           
          </NavItem>
          <NavItem icon="😀"></NavItem>
          <NavItem icon={<Bell/>} />
          <NavItem icon={<Msg/>}/>
          <NavItem icon={<Plus/>}/>
          <New/>
        </Navbar>
        <Switch>
          <Route path="/namelist"><NameList/></Route>
          <Route path="/nameclass"><NameClass/></Route>
          <Route path="/form"><Form/></Route>
          <Route path="/ref"><Ref/></Route>
          <Route path="/get"><Get/></Route>
          <Route path="/quiz"><Quiz/></Route>
          <Route path="/timeline"><Timeline/></Route>
          <Route path="/display"><Display/></Route>
          <Route path="/"><Home/></Route>
        </Switch>
      </BrowserRouter>
    </div>
    )
}
function DropItem(props){
  return(
    <a href="#" className="menu-item">
      <span className="icon-button">{props.leftIcon}</span>
    <span style={{paddingLeft:'10px',fontSize:'18px'}}> 
   {props.children}
      
    </span>
     
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  )}

function Dropdown(props){
  return(
  <div className="dropdown">
    {/* <DropItem leftIcon={<User/>} rightIcon={<Video/>}>My Profile</DropItem> */}
    {props.children}
    <DropItem leftIcon={<Cog/>} rightIcon={<Chevron/>}>Settings</DropItem>
    
    </div>
  )
}
function Navbar(props){
  return(
    <nav className="navbar1">
      <h3 style={{float:'left',color:'wheat',padding:'20px'}}>Hello</h3>
      <ul className="navbar-nav1">{props.children}</ul>
    </nav>
  )
}
function NavItem(props){
  const [open,setOpen]=useState(false);
  return(
    
    <li className="nav-item1">
      <a href="#" className="icon-button" onClick={()=>setOpen(!open)}>{props.icon}</a>
      {open && props.children}
    </li>
  )
}
//Below functions let us give a link we like
function New(){
  return(
    <>
    <li className="nav-item1">
      <a href="https://www.educative.io/edpresso/react-form-validation" className="icon-button" >{<Video/>}</a>
    </li>
    <li className="nav-item1">
    <Link to="/quiz" className="icon-button">{<QuizG/>}</Link>
  </li>
  <li className="nav-item1">
    <Link to="/display" className="icon-button">{<QuizG/>}</Link>
  </li>
    <li className="nav-item1">
    <Link to="/ref" className="icon-button">{<Cog/>}</Link>
  </li>
  </>
  )
}
function New2(){
  return(
    <Link to="/timeline" className="menu-item">
      <span className="icon-button">{<Bell/>}</span>
    <span style={{paddingLeft:'10px',fontSize:'18px'}}>Timeline</span>
    <span className="icon-right">{<Msg/>}</span>
    </Link>
  )
}

export default App;
 //switch-only shows the relevant page
 //path="/" should be coded finally
 //routing is used to view multiple pages
 //headerbar should be inside browserRouter because every page should have headerbar