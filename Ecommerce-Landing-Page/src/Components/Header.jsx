// import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://s3-alpha-sig.figma.com/img/4517/5a94/d5389cc06b9d40c646878c60ac4bf7ed?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cz9z29nXM1g0fZHFmH2DdQg9kAXnR2ssI7B8uwnlWOnmEiMC6zagvPCWmPnsw--6euR9dFbkp63di4HRXAuwSXwyMAkwTCHw3amJSx1nNqprR4nsZQPQ-r6h~OLoTAgHO-UF2Mknq4QAsHFzeyCo4cAaEDAdVlxAUOiLbRKYlfCTWibXF8f10BKt-JQ5RBthexOVE5T85CEMX3zZuyOKodybfqWBvJmZmJGnop7~1aKomQX4oHjzM9kWEoSu5rFUColTpSCXAAMKcRlgJHdHFgYrzy4XPPYqQ4pE9mh3lt33TR-~6j6alHYXG0aF16CSLIfW-fKuTmtOUbaJRw18aw__" alt="" />
      </div>
      <ul>
        <li><a href="">Menu</a></li>
        <li><a href="">Location</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <button className="btn">Login</button>
    </div>
  )
}

export default Header
