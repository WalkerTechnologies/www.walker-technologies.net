import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Provider, observer } from 'mobx-react'
import ContactUs from '../forms/ContactUs'

import '../theme/stylesheets/index.scss'
import SAMap from '../theme/images/san-antonio-white-red.png'
import WalkerWordMark from '../theme/images/walker-technologies-text.svg'
import { Parallax, Background } from 'react-parallax'

import Image from '../theme/images/backgrounds/data-center.jpg'


const form = ContactUs.create({})

const Layout = ({ children, data }) => (
  <Provider form={form}>
    <React.Fragment>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/themes/old/images/favicon.png" />
        <link rel="apple-touch-icon-precomposed" sizes="128x128" href="/themes/old/images/retina-favicon.png" />
        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
      </Helmet>


      <Parallax
        bgImage={Image}
      >
      <header className="site-header">
        <nav className="navigation">

          <Link to="/" className="walker-link">
            <span className="walker-logo-globe" />
            <span className="walker-logo-wordmark" />
          </Link>

          <div className="navigation-links">
            <Link to="/about/">About</Link>
            <Link to="/services/">Services</Link>
            <Link to="/contact/">Contact</Link>
          </div>
        </nav>

        <div className="thatch"></div>
      </header>

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
          <a className="copyright-logo" href="">Walker Technologies Home</a>
          <p>All&nbsp;Rights&nbsp;Reserved.</p>
        </div>
      </footer>
      </Parallax>

    </React.Fragment>
  </Provider>
)

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
