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

      <h2 className="banner-title">Network Infrastructure Design</h2>
    </div>

    <div className="services-content">
      <section className="divided-section-content">
        <p>If selected as your design-build contractor, you will have one point of contact from the evolution to the completion of a project. This method not only saves our customers money, it decreases the overall duration of a project to meet challenging deadlines.</p>
        <p>Our on-staff BICSI Registered Communications Distribution Designer (RCDD) and industry experts can offer value-engineered advantages to provide cost-savings for any solution. We believe transparency is a vital key to the success of a project and all details will be communicated during its conception.</p>
      </section>
    </div>
  </React.Fragment>
)

export default Page
