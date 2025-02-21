// import React from 'react'
import Style from './Error.module.css'
const ErrorHandled = ({text}) => {
  return (
    <div className={`${Style.error}`}>
      {text === 0 && <p>Enter some food to get started</p>}
    </div>
  )
}

export default ErrorHandled
