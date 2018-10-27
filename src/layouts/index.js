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
import Header from './components/Header'
import SlideInMenu from './components/SlideInMenu'

const form = ContactUs.create({})
const store = RootStore.create({})

const Layout = ({ children, data }) => (
  <Provider store={store} form={form}>
    <React.Fragment>
      <SlideInMenu />

      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/themes/old/images/favicon.png" />
        <link rel="apple-touch-icon-precomposed" sizes="128x128" href="/themes/old/images/retina-favicon.png" />
        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

        <title>{data.site.siteMetadata.title}</title>
        <meta property="og:title" content={"Connect the World Together"} />
        <meta property="og:image" content={`${WalkerGlobe}`} />
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
            <a href="mailto:afreeman@walker-technologies.net">afreeman@walker-technologies.net</a>
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
