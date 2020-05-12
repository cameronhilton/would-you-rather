import React, { Component } from 'react'
import { Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }

  handleChange = (option, e) => {
    const text = e.target.value

    if (option === 1) {
      this.setState({
        optionOneText: text,
      })
    } else {
      this.setState({
        optionTwoText: text,
      }) 
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(optionOneText, optionTwoText))

    this.setState({
      optionOneText: '',
      optionTwoText: '',
      toHome: true,
    })
  }

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state

    if (toHome === true) {
      return <Redirect to={'/'}/>
    }

    return (
      <div>
        <div className='center new-quesion-header border'>
          Create New Question
        </div>
        <div className='border new-question-container center'>
          <div>
            Complete the question:
          </div>
          <div className='new-title'>
            Would you rather ...
          </div>
          <form onSubmit={this.handleSubmit}>
            <textarea
              placeholder="Option One"
              value={optionOneText}
              onChange={this.handleChange.bind(null, 1)}
              className='textarea'
              maxLength={280}
            />
            <div className='new-title'>OR</div>
            <textarea
              placeholder="OptionTwo"
              value={optionTwoText}
              onChange={this.handleChange.bind(null, 2)}
              className='textarea'
              maxLength={280}
            />
            <button
              className='new-btn'
              type='submit'
              disabled={optionOneText === '' || optionTwoText === ''}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(NewQuestion)
