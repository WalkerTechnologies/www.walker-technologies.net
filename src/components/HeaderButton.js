import React from 'react'
import Link from 'gatsby-link'

const HeaderButton = ({linkTo, text, ...props}) => (
  <Link to={linkTo} className="walker-button" {...props} >
    <div className="nav-style top"></div>
    <div className="nav-style left"></div>
    {text}
    <div className="nav-style right"></div>
  </Link>
)

export default HeaderButton
