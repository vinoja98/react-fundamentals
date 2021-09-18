import React, { Component } from 'react'
import axios from 'axios';
export class Display extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            contacts: []
        }
    }
    componentDidMount() {
        const url = 'http://localhost:80/react_php/api/display.php'
        axios.get(url).then(response => response.data)
        .then((data) => {
          this.setState({ contacts: data })
          console.log(this.state.contacts)
         })
      }
    render() {
        return (
            <div>
               <h1>Contact Management</h1>
        <table border='1' width='100%' >
        <tr>
            <th>Name</th>
            <th>Comments</th>
            <th>Frame</th>
                 
        </tr>

        {this.state.contacts.map(({username,comments,frame} ) => (
        <tr>
            <td>{ username }</td>
            <td>{ comments }</td>
            <td>{ frame }</td>
            
        </tr>
        ))}
        </table> 
            </div>
        )
    }
}

export default Display
