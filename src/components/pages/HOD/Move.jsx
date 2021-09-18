import React, { Component } from 'react';
import UpdatedComponent from './HOD';

class Move extends Component {
    
    render() {
        const{count,incrementCounter}=this.props;
        return (
            <div>
                <div className="border border-dark mt-3" style={{width:'400px',height:'200px'}} onMouseEnter={incrementCounter}>
                    <center>
                        <h4>Mouse Entered and left {count} times</h4>
                </center></div>
            </div>
        )
    }
}
export default UpdatedComponent(Move,2);