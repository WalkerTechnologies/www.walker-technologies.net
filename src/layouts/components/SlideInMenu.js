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
        <div className="wordmark-wrapper-mobile side-menu">
          <ClosableLink to="/" className="walker-logo-wordmark-mobile"></ClosableLink>
        </div>

        <div className="slide-menu-links">
          <ClosableLink to="/about" className="main-link">About</ClosableLink>
            { store.Header.links.About.map(({link, name}) => <ClosableLink to={link} key={link} className="sub-link">{name}</ClosableLink>)}
          <ClosableLink to="/solutions" className="main-link">Solutions</ClosableLink>
            { store.Header.links.Solutions.map(({link, name}) => <ClosableLink to={link} key={link} className="sub-link">{name}</ClosableLink>)}
          <ClosableLink to="/design" className="main-link">Design</ClosableLink>
            { store.Header.links.Design.map(({link, name}) => <ClosableLink to={link} key={link} className="sub-link">{name}</ClosableLink>)}
          <ClosableLink to="/contact" className="main-link">Contact</ClosableLink>
        </div>
      </div>
    </Menu>
  </MediaQuery>
)



export default inject('store')(observer(SlideInMenu))
