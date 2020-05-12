import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddAnswer } from '../actions/questions'

class Vote extends Component {
  state = {
    vote: null,
  }

  handleChange = (value, e) => {
    this.setState({
      vote: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { vote } = this.state
    const { dispatch, question } = this.props

    dispatch(handleAddAnswer(question.id, vote))
  }

  render() {
    const { question } = this.props
    const optionOne = 'optionOne'
    const optionTwo = 'optionTwo'

    return (
      <div className='question-results bold'>
        <div className='bold-title'>Would You Rather ...</div>
        <form>
          <div>
            <input
              type="radio"
              name="optionOne" 
              value={1} 
              checked={this.state.vote === optionOne} 
              onChange={this.handleChange.bind(null, optionOne)}
            />
            {question.optionOne.text}?
          </div>
          <div>
            <input
              type="radio"
              name="optionTwo" 
              value={2} 
              checked={this.state.vote === optionTwo}
              onChange={this.handleChange.bind(null, optionTwo)}
            />
            {question.optionTwo.text}?
          </div>
          <button
            className='new-btn'
            type='submit'
            disabled={this.state.vote === null}
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(Vote)
