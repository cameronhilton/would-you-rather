import React, { Component } from 'react'
import Questions from './Questions'

class Home extends Component {
  state = {
    showUnanswered: true,
  }

  showUnanswered = (show) => {
    this.setState({
      showUnanswered: show,
    })
  }

  render() {
    return (
      <div>
        <div className='center home-header border'>
          <div
            className='center'
            onClick={() => this.showUnanswered(true)}
          >
            Unanswered Questions
          </div>
          <div
            className='center border-left'
            onClick={() => this.showUnanswered(false)}
          >
            Answered Questions
          </div>
        </div>
        <div className='center home-content border'>
          {this.state.showUnanswered
            ? <Questions unanswered={true}/>
            : <Questions unanswered={false}/>
          }
        </div>
      </div>

    )
  }
}

export default Home
