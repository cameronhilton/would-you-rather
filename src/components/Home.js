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
    const { showUnanswered } = this.state

    return (
      <div>
        <div className='center home-header wide border'>
          <div
            className='center'
            style={ showUnanswered ? { backgroundColor: '#9999ff' } : {}}
            onClick={() => this.showUnanswered(true)}
          >
            Unanswered Questions
          </div>
          <div
            className='center'
            style={ showUnanswered ? {} : { backgroundColor: '#9999ff' }}
            onClick={() => this.showUnanswered(false)}
          >
            Answered Questions
          </div>
        </div>
        <div className='center home-content wide border'>
          {showUnanswered
            ? <Questions unanswered={true}/>
            : <Questions unanswered={false}/>
          }
        </div>
      </div>

    )
  }
}

export default Home
