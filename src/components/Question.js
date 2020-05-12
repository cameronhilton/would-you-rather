import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    const { authedUser, match, questions, users } = this.props
    const question = questions[match.params.id]

    if ( !question ) {
      return (
        <p className='bolder center'>404 - This question doesn't exist.</p>
      )
    }

    const user = users[question.author]
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    const opOnePercent = 100 * question.optionOne.votes.length / totalVotes
    const opTwoPercent = 100 * question.optionTwo.votes.length / totalVotes
    const myVote = question.optionOne.votes.indexOf(authedUser) > -1
                    ? 1
                    : question.optionTwo.votes.indexOf(authedUser) > -1
                      ? 2
                      : null

    return (
      <div className='center'>
        <div className='center new-quesion-header border'>
          Asked by {user.name}
        </div>
        <div className='border new-question-container center inline-block'>
          <img src={user.avatarURL} alt={user.name} className='avatar-large' style={{margin: '106px auto'}}/>
          <div className='question-results bold'>
            <div className='bold-title bolder'>Results:</div>
            <div className='border bold' style={{backgroundColor: myVote === 1 ? '#eeeeff' : '#eeeeee'}}>
              <div>
                {question.optionOne.text}?
              </div>
              <div
                style={{
                  background: `linear-gradient(90deg, #9999ff ${opOnePercent}%, #dddddd ${opOnePercent}%)`,
                  height: '20px',
                  width: '80%',
                  textAlign: 'center',
                }}
              >
                {opOnePercent}%
              </div>
              <div>{question.optionOne.votes.length} out of {totalVotes} votes</div>
            </div>
            <div className='border' style={{backgroundColor: myVote === 2 ? '#eeeeff' : '#eeeeee'}}>
              <div>
                {question.optionTwo.text}?
              </div>
              <div
                style={{
                  background: `linear-gradient(90deg, #9999ff ${opTwoPercent}%, #dddddd ${opTwoPercent}%)`,
                  height: '20px',
                  width: '80%',
                  textAlign: 'center',
                }}
              >
                {opTwoPercent}%
              </div>
              <div>{question.optionTwo.votes.length} out of {totalVotes} votes</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users}) {
  return {
    authedUser,
    questions,
    users,
  }
}

export default connect(mapStateToProps)(Question)
