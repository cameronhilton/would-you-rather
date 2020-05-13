import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { addUserAnswer } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in addQuestion: ', e)
        alert('There was an error adding the question. Try again.')
      })
  }
}

function addAnswer(qid, answer, authedUser) {
  return {
    type: ADD_ANSWER,
    qid,
    answer,
    authedUser,
  }
}

export function handleAddAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
      .then(() => dispatch(addAnswer(qid, answer, authedUser)))
      .then(() => dispatch(addUserAnswer(qid, answer, authedUser)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in addAnswer: ', e)
        alert('There was an error adding the answer. Try again.')
      })
  }
}
