import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav (props) {
  const { authedUser, user } = props

  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact className='nav-link' activeClassName='active'>
            Questions
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' className='nav-link' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' className='nav-link' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        {user && <span className='nav-name'>
            Hello, {user.name}
            <img
              src={user.avatarURL}
              alt={user.name}
              className='avatar'
            />
          </span>}
        <li>
        {authedUser !== null && 
          <NavLink to='/Login' className='nav-link' activeClassName='active'>
            Logout
          </NavLink>}
        </li>
      </ul>
    </nav>
  )
}

function mapStateToProps({ authedUser, users }) {
  const user = authedUser && users[authedUser]

  return {
    authedUser,
    user,
  }
}

export default connect(mapStateToProps)(Nav)
