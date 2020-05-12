import React, { Component } from 'react'
import { connect } from 'react-redux'
import Vote from './Vote'
import Voted from './Voted'

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
    const myVote = question.optionOne.votes.indexOf(authedUser) > -1
                    ? 1
                    : question.optionTwo.votes.indexOf(authedUser) > -1
                      ? 2
                      : null
    const cn = myVote ? '' : 'avatar-vote'
                      
    return (
      <div className='center'>
        <div className='center new-quesion-header border'>
          Asked by {user.name}
        </div>
        <div className='border new-question-container center inline-block'>
          <img src={user.avatarURL} alt={user.name} className={'avatar-large ' + cn}/>
          {myVote === null
            ? <Vote question={question} id={match.params.id}/>
            : <div className='question-results bold'>
                <div className='bold-title bolder'>Results:</div>
                <Voted myVote={myVote === 1} optText={question.optionOne.text} totalVotes={totalVotes} votes={question.optionOne.votes}/>
                <Voted myVote={myVote === 2} optText={question.optionTwo.text} totalVotes={totalVotes} votes={question.optionTwo.votes}/>
              </div>
          }
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
