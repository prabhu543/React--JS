import React from 'react'
import styled from "styled-components";

const HeroDescription = () => {
  return (
    <Paragraph className="description">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
    </Paragraph>
  )
}

export default HeroDescription
const Paragraph = styled.div`
    font-size: 14px;
    width: 60%;
    line-height: 20px;
    color: #5a5959;
    line-height: 22px;
    font-weight: 600;
`;