import React, { Component } from 'react';
import Photo from './Photo';
import Controlled from './Controlled.PNG';
import HostMeme from './hostMeme.jpg';
import FrontBack from './frontback.jpg';
import Imojis from './impojis.jpg'

export class Timeline extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Timeline</h1><hr/>
                    <Photo title="Program" image={Controlled} /* comment="hi" *//>
                    <Photo title="host meme" image={HostMeme} /* comment="funny" *//>
                    <Photo title="frontend backend" image={FrontBack}/>
                    <Photo title="imojis" image={Imojis}/>

                </div>
                
            </div>
        )
    }
}

export default Timeline
