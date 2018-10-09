import React from 'react'
import Video from '../../theme/videos/cat-5-banner.mp4'
import Image from '../../theme/videos/cat-5-banner.png'

const Page = () => (
  <React.Fragment>

    <div className="banner">
      <video autoPlay playsInline muted loop className="banner-video">
        <source src={Video} type="video/mp4" />
        <source src={Image} type="image/jpg"/>
      </video>

      <h2 className="banner-title">Wireless Infrastructure Design</h2>
    </div>

    <div className="services-content">
      <section className="divided-section-content">
        <p>Our familiarity and experience providing wireless network designs allows us to offer our clients a variety of dependable solutions. Wireless networks are one of top leading options to connecting businesses, schools, universities, hospitals, stadiums and many other facilities. Our team of experts will assist and offer the best solution tailored to each client’s needs.</p>
      </section>
    </div>
  </React.Fragment>
)

export default Page
