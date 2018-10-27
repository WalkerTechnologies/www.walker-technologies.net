import React from 'react'
import Video from '../theme/videos/cat-5-banner.mp4'

const Page = () => (
  <React.Fragment>
    <div className="banner">
      <video autoPlay playsInline muted loop className="banner-video">
        <source src={Video} type="video/mp4" />
        <source src={Image} type="image/jpg"/>
      </video>

      <h2 className="banner-title">Contact</h2>
    </div>

    <div className="services-content">
      <section className="divided-section-content">
      </section>
    </div>
  </React.Fragment>
)


export default Page
