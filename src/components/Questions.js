import React, { Component } from 'react'
import { connect } from 'react-redux'

class Questions extends Component {
  render() {
    const { questionsToShow, questions, users } = this.props

    return (
      <ul>
        {questionsToShow.map((id) => {
          const user = users[questions[id].author]

            return (
              <li key={id}>
                <div className='questions border center'>
                  <div className='question-header'>{user.name} asks:</div>
                  <img
                    src={user.avatarURL}
                    alt={user.name}
                    className='avatar-large inline'
                  />
                  <div className='align-left'>
                    <div className='bold-title'>
                      Would you rather
                    </div>
                    <div className='question-content'>
                      {questions[id].optionOne.text}...
                    </div>
                    <button className='center'>
                      View Poll
                    </button>
                  </div>
                </div>
              </li>
            )
        })}
      </ul>
    )
  }
}

function mapPropsToState({ authedUser, questions, users }, { unanswered }) {
  return {
    questionsToShow: unanswered
      ? Object.keys(questions).filter((question) => question.id in users[authedUser].answers)
      : Object.keys(users[authedUser].answers),
    questions,
    users,
  }
}

export default connect(mapPropsToState)(Questions)
