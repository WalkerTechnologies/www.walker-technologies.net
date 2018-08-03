import React from 'react'
import Link from 'gatsby-link'
import Slider from 'react-slick'
import BicsiLogo from '../theme/images/certifications/bicsi.png'
import CommscopeLogo from '../theme/images/certifications/commscope.png'
import LevitonLogo from '../theme/images/certifications/leviton.svg'
import PanduitLogo from '../theme/images/certifications/panduit.png'
import SBALogo from '../theme/images/certifications/sba.svg'

const settings = {
  autoplay: true,
  fade:true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
}

const Page = () => (
  <React.Fragment>
    <div className="wrapper slider-wrapper">
      <Slider {...settings}>
        <div className="background background-1"></div>
        <div className="background background-2"></div>
        <div className="background background-3"></div>
        <div className="background background-4"></div>
      </Slider>
    </div>

    <section className="connect">
      <p>Walker Technologies connects the world together <Link to="/about" className="walker-button">Learn More</Link></p>
    </section>

    <section className="section">
      <p>As organizations consume data at an ever-growing rate, a reliable network infrastructure becomes crucial for business survival in the 21st Century. Walker Technologies was founded to meet this growing demand and employs the most highly trained technicians to bring their proven expertise to your doorstep.</p>
      <p>Walker Technologies plans, installs, and maintains the voice, data, and video infrastructures that build today's complex networks. Quality workmanship and your satisfaction are our highest priorities at Walker Technologies and believe that every aspect of your network is important. We perform full diagnostic examinations to ensure your networks are running at peak efficiency and certify that your network will exceed TIA/EIA standards for network cabling.</p>
      <p>Expert workmanship, efficient service, and competitive pricing will enable you to secure an affordable and robust network your team can rely upon for years to come.</p>
    </section>

    <section className="certifications-wrapper">

      <p>Walker Technologies is certified to connect your business</p>

      <div className="certifications">
        <img src={SBALogo} alt="SBA Certified"/>
        <img src={PanduitLogo} alt="Panduit Certified"/>
        <img src={BicsiLogo} alt="Bicsi Certified"/>
        <img src={CommscopeLogo} alt="Commscope Certified"/>
        <img src={LevitonLogo} alt="Leviton Certified"/>
      </div>
    </section>

  </React.Fragment>
)

export default Page
