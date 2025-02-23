// import React from 'react'
import { useContext } from "react"
import { UserDataContext } from "../store/UserData"

const EmptySet = () => {
  
  const { userInfo } = useContext(UserDataContext);

  return (
    <div>
      { (userInfo.length == 0) && 
      (<p className="empty-status">Empty Contacts list.</p>)}
    </div>
  )
}

export default EmptySet
