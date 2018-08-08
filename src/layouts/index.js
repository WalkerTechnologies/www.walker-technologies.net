import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { Parallax, Background } from 'react-parallax'
import { Provider, observer, inject } from 'mobx-react'
import ContactUs from '../forms/ContactUs'
import WalkerWordMark from '../theme/images/walker-technologies-text.svg'
import Image from '../theme/images/backgrounds/data-center.jpg'
import '../theme/stylesheets/index.scss'
import RootStore from '../ui-models/RootStore'
import WalkerGlobe from '../theme/images/walker-technologies-globe.svg'

const form = ContactUs.create({})
const store = RootStore.create({})

const Layout = ({ children, data }) => (
  <Provider store={store} form={form}>
    <React.Fragment>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/themes/old/images/favicon.png" />
        <link rel="apple-touch-icon-precomposed" sizes="128x128" href="/themes/old/images/retina-favicon.png" />
        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

        <title>{data.site.siteMetadata.title}</title>
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:image" content={WalkerGlobe} />
      </Helmet>


      <Parallax
        bgImage={Image}
      >
        <Header />

        <main>
          {children()}
        </main>

        <div className="contact-wrapper">
          <div className="sa-map-wrapper" />

          <address className="walker-address">
            <img src={WalkerWordMark} alt="Walker Technologies Wordmark"/>
            <p className="walker-address-location">Headquartered in San Antonio, Texas</p>
            <a href="tel:210-845-7630">(210) 845-7630</a>
            <a href="mailto:adam@walker-technologies.net">adam@walker-technologies.net</a>
          </address>

          {/* <div className="walker-contact-form">
            <input type="text" name="name" placeholder="Your name" />
            <input type="text" name="email" placeholder="Your email"/>
            <textarea name="comments" cols="30" rows="10" placeholder="Questions, comments, etc."></textarea>
          </div> */}
        </div>

      <div className="newsletter-form">
        <p>Join our Newsletter</p>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <button>Submit</button>
      </div>

      <footer className="site-footer">
        <div className="thatch"></div>
        <div className="copyright-wrapper">
          <p>&copy; 2013 &ndash; {(new Date()).getFullYear()} Walker&nbsp;Technologies,&nbsp;Inc.</p>
          <Link className="copyright-logo" to="/">Walker Technologies Home</Link>
          <p>All&nbsp;Rights&nbsp;Reserved.</p>
        </div>
      </footer>
      </Parallax>

    </React.Fragment>
  </Provider>
)

const Header = inject('store')(observer(({store}) => (
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

Layout.propTypes = {
  children: PropTypes.func,
}

export default observer(Layout)

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
