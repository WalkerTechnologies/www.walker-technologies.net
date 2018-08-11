import React from 'react'
import Link from 'gatsby-link'
import { inject, observer } from 'mobx-react'
import MediaQuery from 'react-responsive'

const SiteHeader = inject('store')(observer(({store}) => (
  <header
    className={`site-header ${store.Header.shouldShowLinks ? 'active': ''}`}
    onMouseEnter={store.Header.activateHover}
    onMouseLeave={store.Header.deactivateHover}
    >
    <nav className="navigation">

      <Link to="/" className="walker-link">
        <span className="walker-logo-globe" />
        <span className="walker-logo-wordmark" />
      </Link>

      <div className="navigation-links">
        <Link to="/about/" className="main-link" onMouseEnter={() => store.Header.hoveringOverSection('About')}>About</Link>
        <Link to="/services/" className="main-link" onMouseEnter={() => store.Header.hoveringOverSection('Services')}>Services</Link>
        <Link to="/contact/" className="main-link" onMouseEnter={() => store.Header.hoveringOverSection('Contact')}>Contact</Link>
      </div>
    </nav>

    <div className={`sublinks ${store.Header.shouldShowLinks ? 'active': ''}`}>
      {store.Header.linksToShow.map(({link, name}) => <Link to={link} className="sublink">{name}</Link>)}
    </div>
  </header>
)))

const MobileHeader = inject('store')(observer(({store}) => (
  <header className="site-header-mobile">
    <div className="wordmark-wrapper-mobile">
      <Link to="/" className="walker-logo-wordmark-mobile"></Link>
      <button className="burger-menu" href="" onClick={store.SlideMenu.toggle} />
    </div>
  </header>
)))

const Header = ({...props}) => (
    <MediaQuery maxWidth={900} >
      {(matches) => {
        if (matches) {
          return <MobileHeader {...props} />
        } else {
          return <SiteHeader {...props} />
        }
      }}

    </MediaQuery>
)

export default Header
