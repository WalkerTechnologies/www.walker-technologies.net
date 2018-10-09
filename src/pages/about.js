import React from 'react'

const Page = () => (
  <React.Fragment>
    <div className="banner">
      <video autoPlay playsInline muted loop className="banner-video">
      </video>

      <h2 className="banner-title">About Walker Technologies</h2>
    </div>

   <div className="services-content">
      <section className="divided-section-content">
        <p>With experience based on many years in the industry, Walker Technologies, Inc. was designed to meet the growing demand in the low voltage industry. The company has been built with a solid focus on quality work and the ability to deliver solutions to meet our customer’s needs.</p>

        <p>Integrity and dependability have been the cornerstones of our growth and we are committed to keeping our organization at the forefront of the technology and networking industries.</p>

        <p>We have established and developed the success of our company based on hard work and tireless hours. Our design team and skilled specialists are also an important factor to our success. We have the capacity to meet any deadline that might require our team to work hours appropriately tailored to each customer and project.</p>
      </section>
    </div>


  </React.Fragment>
)

const CableInstallation = () => (
  <section className="divided-section-content">
    <h2>Cable Installation</h2>
    <h3>Category-level Cabling</h3>
    <p>Twisted-pair cables form the bulk of an organization's data needs. Using a
      category-type cable is a cheap and reliable method to connect devices.</p>
    <h3>Coaxial Cable</h3>
    <p>Coaxial cable provide a high bandwidth pipe over moderate distances. Keep
      coaxial cable in mind if you need to transmit video across your site.</p>
    <h3>Fiber Optic Cable</h3>
    <p>Fiber offers unparalleled bandwidth and reduced latency. Organizations that
      need to connect large networks over large distances rely upon optical fiber.</p>
  </section>
)

const NetworkDesign = () => (
  <section className="divided-section-content">
    <h2>Network Design</h2>
    <h3>Planning</h3>
    <p>Don&apos;t know where to start? We have you covered.</p>
    <p>We provide walk-throughs for ever site to plan and prepare for your current
      and future needs.</p>
    <p>We have the experience to help you minimize costs and bring your site online
      as rapidly as possible.</p>
    <h3>Server Rack and Server Closet Management</h3>
    <p>Every cable needs to go somewhere and most organizations require a server
      rack to support the devices on their network.</p>
    <p>We install racks and the necessary equipment to power your network.</p>
    <h3>CAD Design</h3>
    <p>If an organization needs blueprints created or modified we provide a
      computer-aided design service to modernize your site's plans.</p>
  </section>
)

const NetworkTesting = () => (
  <section className="divided-section-content">
    <h2>Network Testing</h2>
    <p>Even though a cable has been run, terminated, and connected, it may not
      perform at the level we expect. Testing ensures that each line meets the
      required standandards.</p>
    <p>We test and certify every line we run. This guarantees your network will
      perform like you need, every time.</p>
  </section>
)

const SiteMaintenance = () => (
  <section className="divided-section-content">
    <h2>Site Maintenance</h2>
    <p>Things break. We can fix it.</p>
    <p>If you experience network-related issues, we can troubleshoot your problems
      and bring your network back online.</p>
  </section>
)

const WebDevelopment = () => (
  <section className="divided-section-content">
    <h2>Web Development</h2>
    <p>The world runs on the Internet, and so should you.</p>
    <p>We create reliable web applications for every need. Whether you need a simple
      site or an employee-management tool, we can build it. Expert craftsmanship is
      just a click away!</p>
  </section>
)

export default Page
