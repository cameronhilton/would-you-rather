import React from 'react'

function Voted(props) {
  const { myVote, optText, totalVotes, votes } = props
  const optPercent = 100 * votes.length / totalVotes

  return (
    <div className='border ' style={{backgroundColor: myVote ? '#eeeeff' : '#eeeeee'}}>
      {myVote &&
        <div className='my-vote'>
          <div>Your vote</div>
        </div>}
      <div>
        {optText}?
      </div>
      <div
        style={{
          background: `linear-gradient(90deg, #9999ff ${optPercent}%, #dddddd ${optPercent}%)`,
          height: '20px',
          width: '80%',
          textAlign: 'center',
        }}
      >
        {optPercent}%
      </div>
      <div>{votes.length} out of {totalVotes} votes</div>
    </div>
  )
}

export default Voted
