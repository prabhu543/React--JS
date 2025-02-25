// import React from 'react'

const WelcomeMsg = ({onGetPost}) => {
  return (
    <center>
      <h3>No Posts. Please create a post.</h3>
      <button type="button" className="btn btn-primary" onClick={onGetPost}>Get Posts from Server</button>
    </center>
  )
}

export default WelcomeMsg
