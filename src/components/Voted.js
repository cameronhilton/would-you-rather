import React from 'react'

function Voted(props) {
  const { optText, totalVotes, votes } = props
  const optPercent = 100 * votes.length / totalVotes

  return (
    <div className='border' style={{backgroundColor: props.myVote === 1 ? '#eeeeff' : '#eeeeee'}}>
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
