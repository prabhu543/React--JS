import React from 'react'
import styled from "styled-components";

const Error = () => {
  return (
      <Head>You have not Selected any Number</Head>
  )
}

export default Error

const Head = styled.div`
  color:red;
  text-align:right;
  width:100%;
`;