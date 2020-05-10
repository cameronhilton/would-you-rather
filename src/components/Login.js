import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect} from 'react-router-dom'
import Select from 'react-select'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    toHome: false,
  }

  handleChange = (e) => {
    const { dispatch } = this.props
    const id = e.value

    dispatch(setAuthedUser(id))

    this.setState({
      toHome: id ? true : false,
    })
  }

  render() {
    if (this.state.toHome === true) {
      return <Redirect to={'/'}/>
    }

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
        <h3 className='center'>Login</h3>
        <Select
          options={options}
          onChange={this.handleChange}
          placeholder="Select a user"
        />
      </div>
    )
  }
}

function mapStateToProps( { users }) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(Login)
