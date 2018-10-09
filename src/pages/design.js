import React from 'react'

const Page = () => (
  <React.Fragment>
    <div className="banner">
      <video autoPlay playsInline muted loop className="banner-video">
      </video>

      <h2 className="banner-title">Design</h2>
    </div>

    <div className="services-content">
      <section className="divided-section-content">
        <p>Don&apos;t know where to start? We have you covered.</p>
        <p>We provide walk-throughs for ever site to plan and prepare for your current and future needs.</p>
        <p>We have the experience to help you minimize costs and bring your site online as rapidly as possible.</p>
      </section>
    </div>
  </React.Fragment>
)


export default Page
