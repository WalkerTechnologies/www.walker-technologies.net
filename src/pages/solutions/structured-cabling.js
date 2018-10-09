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

      <h2 className="banner-title">Cable Installation</h2>
    </div>

    <div className="services-content">
      <section className="divided-section-content">
        <p>It is critical for a business to have a fully reliable and functional network infrastructure system to remain as efficient as possible. Structured cabling is an important factor to assuring the end-user that their computers, phones, wireless access points, and other network devices operate at their full potential. Remaining cognizant of industry standards and best practices, our highly skilled technicians take pride and focus on the craftsmanship of each installation. This strategy allows Walker Technologies to remain competitive and guarantees our customer satisfaction for years to come.</p>
        <p>Our team will take the time to collaborate with our customers to provide a system that will meet their needs of today and tomorrow. We can provide expert advice from backbone requirements, to the optimal number of outlets at every workstation.</p>
      </section>
    </div>
  </React.Fragment>
)




export default Page
