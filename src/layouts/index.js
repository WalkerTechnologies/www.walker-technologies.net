import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Provider, observer } from 'mobx-react'
import ContactUs from '../forms/ContactUs'

import '../theme/stylesheets/index.scss'
import SAMap from '../theme/images/san-antonio-white-red.png'
import WalkerWordMark from '../theme/images/walker-technologies-text.svg'


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

      <div className="certifications">
        <h3>Certficiations</h3>
        <p>Walker Technologies is certified to serve your team</p>


      </div>

      <div className="section">
        <div className="content-wrapper">
          <p>As organizations consume data at an ever-growing rate, a reliable network infrastructure becomes crucial for business survival in the 21st Century. Walker Technologies was founded to meet this growing demand and employs the most highly trained technicians to bring their proven expertise to your doorstep.</p>
          <p>Walker Technologies plans, installs, and maintains the voice, data, and video infrastructures that build today's complex networks. Quality workmanship and your satisfaction are our highest priorities at Walker Technologies and believe that every aspect of your network is important. We perform full diagnostic examinations to ensure your networks are running at peak efficiency and certify that your network will exceed TIA/EIA standards for network cabling.</p>
          <p>Expert workmanship, efficient service, and competitive pricing will enable you to secure an affordable and robust network your team can rely upon for years to come.</p>
        </div>
      </div>



      <div className="contact-wrapper">
        <div className="sa-map-wrapper">
          <img src={SAMap} alt="San Antonio Roadways"/>
        </div>

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

      <footer className="site-footer">
        <div className="thatch"></div>
        <div className="copyright-wrapper">
          <p>&copy; 2013 &ndash; {(new Date()).getFullYear()} Walker&nbsp;Technologies,&nbsp;Inc.</p>
          <a className="copyright-logo" href="">Walker Technologies Home</a>
          <p>All&nbsp;Rights&nbsp;Reserved.</p>
        </div>
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
