import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    const { users } = this.props
    const sortedUsers = users instanceof Object && Object.keys(users).map((id) => {
      const answered = Object.keys(users[id].answers).length
      const created = users[id].questions.length

      return {
        id,
        answered,
        created,
        total:  answered + created,
      }
    })
      .sort((a, b) => b.total - a.total)

    return (
      <ul className='center wide'>
        {sortedUsers.map((user) => {
          return (
            <li key={user.id} className='leader-card border'>
              <img src={users[user.id].avatarURL} alt={users[user.id].name} className={'avatar-large'}/>
              <div className='flex-row'>
                <div className='flex-col pad-right-10'>
                  <div className='bolder'>
                    {users[user.id].name}
                  </div>
                  <div className='flex-row'>
                    <div>Answered Questions</div>
                    <div>{user.answered}</div>
                  </div>
                  <div className='flex-row'>
                    <div>Created Questions</div>
                    <div>{user.created}</div>
                  </div>
                </div>
                <div className='center leader-score-container'>
                  Score
                  <div className='leader-score bolder'>{user.total}</div>
                </div>
              </div>
            </li>
          )})}
      </ul>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(Leaderboard)
