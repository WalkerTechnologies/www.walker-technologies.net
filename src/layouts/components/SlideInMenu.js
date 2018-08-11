import React from 'react'
import Link from 'gatsby-link'
import {inject, observer} from 'mobx-react'
import { slide as Menu } from 'react-burger-menu'
import MediaQuery from 'react-responsive'

const ClosableLink = inject('store')(observer(({store, ...props}) => (
  <Link {...props} onClick={store.SlideMenu.close} />
)))

const SlideInMenu = ({store}) => (
  <MediaQuery maxWidth={900} >
    <Menu right isOpen={store.SlideMenu.isOpen} onStateChange={state => store.SlideMenu.hasOpened(state)}>
      <div className="menu">
        <div className="wordmark-wrapper-mobile">
          <ClosableLink to="/" className="walker-logo-wordmark-mobile"></ClosableLink>
        </div>

        <div className="slide-menu-links">
          <ClosableLink to="/about" className="main-link">About</ClosableLink>
            { store.Header.links.About.map(({link, name}) => <ClosableLink to={link} className="sub-link">{name}</ClosableLink>)}
          <ClosableLink to="/services" className="main-link">Services</ClosableLink>
            { store.Header.links.Services.map(({link, name}) => <ClosableLink to={link} className="sub-link">{name}</ClosableLink>)}
          <ClosableLink to="/contact" className="main-link">Contact</ClosableLink>
        </div>
      </div>
    </Menu>
  </MediaQuery>
)



export default inject('store')(observer(SlideInMenu))
