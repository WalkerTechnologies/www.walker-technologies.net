import React from 'react'
import Video from '../../theme/videos/cat5-video.mp4'

const Page = () => (
  <React.Fragment>

    <div className="banner">
      <video autoPlay muted loop id="asdf">
        <source src={Video} type="video/mp4" />
      </video>
    </div>

    <div className="page-head">
      <h2>Cable Installation</h2>
    </div>

    <div className="services-content">
      <section className="divided-section-content">
        <h3>Category-level Cabling</h3>
        <p>Twisted-pair cables form the bulk of an organization's data needs. Using a category-type cable is a cheap and reliable method to connect devices.</p>
        <h3>Coaxial Cable</h3>
        <p>Coaxial cable provide a high bandwidth pipe over moderate distances. Keep coaxial cable in mind if you need to transmit video across your site.</p>
        <h3>Fiber Optic Cable</h3>
        <p>Fiber offers unparalleled bandwidth and reduced latency.  Organizations that need to connect large networks over large distances rely upon optical fiber.</p>
      </section>
    </div>
  </React.Fragment>
)


export default Page
