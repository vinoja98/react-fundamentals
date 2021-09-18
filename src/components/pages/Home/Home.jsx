import React from 'react';
import Click from '../HOD/Click';
import Move from '../HOD/Move';

function Home(){
    return(
        <>
        <div className="container">
            <h1>WELCOME</h1>
            
            <ul>
                <li> React is a JavaScript library for building user interfaces.</li>
                <li>React is used to build single page applications.</li>
                <li>React allows us to create reusable UI components.</li>
            </ul>
            <u><h3>below - Higher Order Components</h3></u><br></br>
            <Click name="vino"/>
            <Move/>
            <br></br>
            <li>higher order components reduce redundancy</li>
        </div>
        </>
    );
}

export default Home;