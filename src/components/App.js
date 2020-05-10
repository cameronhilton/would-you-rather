import React, {Component, Fragment } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard'
import Login from './Login'
import Nav from './Nav'
import NewQuestion from './NewQuestion'
import Questions from './Questions'

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
              ? <div>
                  <Redirect to='login'/>
                  <Route path='/login' component={Login}/>
                </div>
              : <div>
                    <Route path='/' exact component={Questions}/>
                    <Route path='/new' component={NewQuestion}/>
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
