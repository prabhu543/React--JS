// import React from 'react'
import styled from "styled-components"
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://s3-alpha-sig.figma.com/img/4517/5a94/d5389cc06b9d40c646878c60ac4bf7ed?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cz9z29nXM1g0fZHFmH2DdQg9kAXnR2ssI7B8uwnlWOnmEiMC6zagvPCWmPnsw--6euR9dFbkp63di4HRXAuwSXwyMAkwTCHw3amJSx1nNqprR4nsZQPQ-r6h~OLoTAgHO-UF2Mknq4QAsHFzeyCo4cAaEDAdVlxAUOiLbRKYlfCTWibXF8f10BKt-JQ5RBthexOVE5T85CEMX3zZuyOKodybfqWBvJmZmJGnop7~1aKomQX4oHjzM9kWEoSu5rFUColTpSCXAAMKcRlgJHdHFgYrzy4XPPYqQ4pE9mh3lt33TR-~6j6alHYXG0aF16CSLIfW-fKuTmtOUbaJRw18aw__" alt="" />
      </div>
      <Ul>
        <li><A href="#">Menu</A></li>
        <li><A href="#">Location</A></li>
        <li><A href="#">About</A></li>
        <li><A href="#">Contact</A></li>
      </Ul>
      <button className="btn log">Login</button>
    </div>
  )
}

export default Header

const Ul = styled.div`
  display: flex;
  list-style: none;
  gap: 35px;
  font-size: 16px;
  font-weight: 600;
  font-family: poppins;
`;

const A = styled.div`
  text-decoration: none;
  color: #2e2e2e;
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;