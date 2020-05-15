import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Questions extends Component {
  toQuestion = (e, id) => {
    e.preventDefault()

    this.props.history.push(`/question/${id}`)
  }

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
                    <button className='center' onClick={(e) => this.toQuestion(e, id)}>
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
  const questionsToShow = (unanswered
    ? Object.keys(questions).filter((question) => !(question in users[authedUser].answers))
    : Object.keys(users[authedUser].answers))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  return {
    questionsToShow,
    questions,
    users,
  }
}

export default withRouter(connect(mapPropsToState)(Questions))
