import React, {Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Login from './Login'
import Nav from './Nav'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion'

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
              ? null
              : <div>
                  <Route path='/' exact component={Login}/>
                  <Route path='/new' exact component={NewQuestion}/>
                  <Route path='/leaderboard' exact component={Leaderboard}/>
                </div>}
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default connect()(App)
