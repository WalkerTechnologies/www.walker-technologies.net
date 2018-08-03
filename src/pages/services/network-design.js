import React from 'react'

const Page = () => (
  <React.Fragment>
    <div className="banner"></div>

    <div className="page-head">
      <h2>Network Design</h2>
    </div>

    <div className="services-content">
      <section className="divided-section-content">
        <h3>Planning</h3>
        <p>Don&apos;t know where to start? We have you covered.</p>
        <p>We provide walk-throughs for ever site to plan and prepare for your current and future needs.</p>
        <p>We have the experience to help you minimize costs and bring your site online as rapidly as possible.</p>
        <h3>Server Rack and Server Closet Management</h3>
        <p>Every cable needs to go somewhere and most organizations require a server rack to support the devices on their network.</p>
        <p>We install racks and the necessary equipment to power your network.</p>
        <h3>CAD Design</h3>
        <p>If an organization needs blueprints created or modified we provide a computer-aided design service to modernize your site's plans.</p>
      </section>
    </div>
  </React.Fragment>
)

export default Page
