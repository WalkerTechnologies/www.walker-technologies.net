import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'
import HeaderButton from '../components/HeaderButton'
import Helmet from 'react-helmet'
import { Provider, observer } from 'mobx-react'
import ContactUs from '../forms/ContactUs'

import './index.css'

const form = ContactUs.create({})

const Layout = ({ children, data }) => (
  <Provider form={form}>
    <React.Fragment>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/themes/old/images/favicon.png" />
        <link rel="apple-touch-icon-precomposed" sizes="128x128" href="/themes/old/images/retina-favicon.png" />
        <link rel="stylesheet" type="text/css" href="/themes/old/stylesheets/style.css" />
        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
      </Helmet>

      <div id="faux-body-for-sticky-footer">
        <header>
          <address>
            <ul>
            <li>Headquartered in San Antonio, Texas</li>
            <li><a href="tel:210-845-7630">(210) 845-7630</a></li>
            </ul>
          </address>
          <nav id="navigation">
            <Link to="/" id="walker-logo">Walker Technologies, Inc.</Link>
            <ul id="main-navigation">
              <li><HeaderButton linkTo="/about/" text="About" /></li>
              <li><HeaderButton linkTo="/services/" text="Services" /></li>
              <li><HeaderButton linkTo="/contact/" text="Contact" /></li>
            </ul>
          </nav>
        </header>

        <section id="main-body">
          {children()}
        </section>
        <div id="footer-clear"></div>
      </div>

      <footer id="main-footer">
        <div className="walker-thatch"></div>
        <p id="copyright"> © 2013 - 2018 Copyright Walker&nbsp;Technologies,&nbsp;Inc. All&nbsp;Rights&nbsp;Reserved.</p>
      </footer>
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
