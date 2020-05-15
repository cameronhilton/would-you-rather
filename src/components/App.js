import React, {Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard'
import Login from './Login'
import Nav from './Nav'
import AddQuestion from './AddQuestion'
import Question from './Question'
import Home from './Home'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar/>
          <div className='container'>
            <Nav/>
            {this.props.loading === true
              ? <h3 className='center'>
                  Please Login
                  <Route path='/login' component={Login}/>
                </h3>
              : <div>
                  <Route path='/' exact component={Home}/>
                  <Route path='/add' component={AddQuestion}/>
                  <Route path='/question/:id' component={Question}/>
                  <Route path='/leaderboard' exact component={Leaderboard}/>
                  <Route path='/login' component={Login}/>
                </div>}
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)
