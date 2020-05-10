import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav (props) {
  const { user } = props

  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Questions
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        {user && <span>
            Hello, {user.name}
            <img
              src={user.avatarURL}
              alt={user.name}
              className='avatar'
            />
          </span>}
        <li>
          <NavLink to='/Login' activeClassName='active'>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

function mapStateToProps({ authedUser, users }) {
  const user = authedUser && users[authedUser]

  return {
    user,
  }
}

export default connect(mapStateToProps)(Nav)
