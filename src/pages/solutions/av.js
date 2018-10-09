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

      <h2 className="banner-title">Audio / Visual</h2>
    </div>

    <div className="services-content">
      <section className="divided-section-content">
        <p>Walker Technologies offers a wide range of system ideas and will gain a solid understanding of every client’s A/V needs ranging from meeting and board rooms to K-12 classrooms, offices and more. We will help capitalize on the functionality of existing and new facilities for employees, students and/or customers.</p>
      </section>
    </div>
  </React.Fragment>
)

export default Page
