import React from 'react'
import Link from 'gatsby-link'
import {inject, observer} from 'mobx-react'
import { slide as Menu } from 'react-burger-menu'
import MediaQuery from 'react-responsive'

const SlideInMenu = ({store}) => (
  <MediaQuery maxWidth={900} >
    <Menu right isOpen={store.SlideMenu.isOpen} onStateChange={state => store.SlideMenu.hasOpened(state)}>
      <div className="menu">
        <div className="wordmark-wrapper-mobile">
          <Link to="/" className="walker-logo-wordmark-mobile"></Link>
        </div>

        <div className="slide-menu-links">
          <Link to="/about" className="main-link">About</Link>
            { store.Header.links.About.map(({link, name}) => <Link to={link} className="sub-link">{name}</Link>)}
          <Link to="/services" className="main-link">Services</Link>
            { store.Header.links.Services.map(({link, name}) => <Link to={link} className="sub-link">{name}</Link>)}
          <Link to="/contact" className="main-link">Contact</Link>
        </div>
      </div>
    </Menu>
  </MediaQuery>
)



export default inject('store')(observer(SlideInMenu))
