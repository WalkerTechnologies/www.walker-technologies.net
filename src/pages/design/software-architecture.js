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

      <h2 className="banner-title">Software Architecture Design</h2>

    </div>

    <div className="services-content">
      <section className="divided-section-content">
        <p>We create real-time web services and applications to help our customers serve theirs better.</p>
        <p>We deploy modern software tech to build highly available, scalable, and performant software systems. It <em>can</em> be done.</p>
        <p>React, Elixir, and Docker are the techs we use around here.</p>
      </section>
    </div>
  </React.Fragment>
)

export default Page
