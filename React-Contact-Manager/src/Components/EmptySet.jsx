// import React from 'react'

const EmptySet = ({ userInfoLength }) => {
  return (
    <div>
      { (userInfoLength == 0) && 
      (<p className="empty-status">Empty Contacts list.</p>)}
    </div>
  )
}

export default EmptySet
