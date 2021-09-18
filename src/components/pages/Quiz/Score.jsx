import React, { Component } from 'react'

class Score extends Component {
  
    
    render() {
        return (
            <div>
                <div className="score-board">
                    <div className="score">Marks {this.props.count} out of {this.props.num}</div>
                    <button className="playBtn" onClick={this.props.play}>Play again</button>
                </div>
            </div>
        )
    }
}

export default Score
