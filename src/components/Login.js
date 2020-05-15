import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  handleChange = (e) => {
    const { dispatch } = this.props
    const id = e.value

    dispatch(setAuthedUser(id))

    this.props.history.push(`/`)
  }

  componentDidMount() {
    const { authedUser, dispatch } = this.props

    // Logout user if logged in
    if (authedUser !== null) {
      dispatch(setAuthedUser(null))
    }
  }

  render() {
    const { users } = this.props
    const options = Object.keys(users).map((user) => ({
      label: <span>
                <img
                  className='avatar'
                  src={users[user].avatarURL}
                  alt={users[user].name}
                />
                <span className='menu-item'>{users[user].name}</span>
              </span>,
      value: users[user].id,
    }))

    return (
      <div>
        <Select
          options={options}
          onChange={this.handleChange}
          placeholder="Select a user"
          className='center login-select'
        />
      </div>
    )
  }
}

function mapStateToProps( { authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(Login)
