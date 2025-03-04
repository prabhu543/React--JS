import React from 'react'
import styled from "styled-components";

const Error = () => {
  return (
    <Error className="error">
      <h2>You have not Selected any Number</h2>
    </Error>
  )
}

export default Error
const Error = styled.div`
  color : red;
`;