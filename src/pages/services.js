import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Page = () => (
  <div>
    <div className="h1-group">
      <h1 id='header'>Services at Walker Technologies, Inc.</h1>
      <div className="walker-splitter"></div>
    </div>
    <div id="content-wrapper">
      <div className="content-wrapper vertical top left"></div>
      <div className="content-wrapper vertical top right"></div>
      <nav id='section-menu'>
        <ul>
          <li><span className="walker-button services-button" name="service-section-1"><div className="nav-style top"></div>Cable Installation</span></li>
          <li><span className="walker-button services-button" name="service-section-2"><div className="nav-style top"></div>Network Design</span></li>
          <li><span className="walker-button services-button" name="service-section-3"><div className="nav-style top"></div>Network Testing</span></li>
          <li><span className="walker-button services-button" name="service-section-4"><div className="nav-style top"></div>Site Maintenance</span></li>
          <li><span className="walker-button services-button" name="service-section-5"><div className="nav-style top"></div>Web Development</span></li>
        </ul>
      </nav>
      <div id="section-wrapper">
        <section id="service-section-description">
          <h2 className="service-paragraph">We provide custom installation services that include: </h2>
          <ul className="service-list">
            <li className="service-list-item">Category-Level Copper Cabling</li>
            <li className="service-list-item">Single Mode/Multi Mode Fiber</li>
            <li className="service-list-item">Cabinet/Rack Installation</li>
            <li className="service-list-item">Copper/Fiber Termination</li>
            <li className="service-list-item">Cable Plant Testing/Certification</li>
            <li className="service-list-item">Vendor Certified Installation</li>
            <li className="service-list-item">Pathway Survey and Design</li>
            <li className="service-list-item">Completed InstallationDocumentation</li>
            <li className="service-list-item">Warranty Service</li>
            <li className="service-list-item">Coaxial Cable Installation/Termination</li>
            <li className="service-list-item">Antenna Placement and Installation</li>
            <li className="service-list-item">Patch Panel</li>
            <li className="service-list-item">Cable Management</li>
          </ul>
        </section>
        <section id="service-section-1">
          <h2 className="service-h2">Cable Installation</h2>
          <h3 className="service-h3">Category-level Cabling</h3>
            <p className="service-paragraph">Twisted-pair cables form the bulk of an organization's data needs. Using a category-type cable is a cheap and reliable method to connect devices.</p>
          <h3 className="service-h3">Coaxial Cable</h3>
            <p className="service-paragraph">Coaxial cable provide a high bandwidth pipe over moderate distances. Keep coaxial cable in mind if you need to transmit video across your site.</p>
          <h3 className="service-h3">Fiber Optic Cable</h3>
            <p className="service-paragraph">Fiber offers unparalleled bandwidth and reduced latency.  Organizations that need to connect large networks over large distances rely upon optical fiber.</p>
        </section>
        <section id="service-section-2">
          <h2 className="service-h2">Network Design</h2>
          <h3 className="service-h3">Planning</h3>
            <p className="service-paragraph">Don&apos;t know where to start? We have you covered.</p>
            <p className="service-paragraph">We provide walk-throughs for ever site to plan and prepare for your current and future needs.</p>
            <p className="service-paragraph">We have the experience to help you minimize costs and bring your site online as rapidly as possible.</p>
          <h3 className="service-h3">Server Rack and Server Closet Management</h3>
            <p className="service-paragraph">Every cable needs to go somewhere and most organizations require a server rack to support the devices on their network.</p>
            <p className="service-paragraph">We install racks and the necessary equipment to power your network.</p>
          <h3 className="service-h3">CAD Design</h3>
            <p className="service-paragraph">If an organization needs blueprints created or modified we provide a computer-aided design service to modernize your site's plans.</p>
        </section>
        <section id="service-section-3">
          <h2 className="service-h2">Network Testing</h2>
            <p className="service-paragraph">Even though a cable has been run, terminated, and connected, it may not perform at the level we expect. Testing ensures that each line meets the required standandards.</p>
            <p className="service-paragraph">We test and certify every line we run. This guarantees your network will perform like you need, every time.</p>
        </section>
        <section id="service-section-4">
          <h2 className="service-h2">Site Maintenance</h2>
            <p className="service-paragraph">Things break. We can fix it.</p>
            <p className="service-paragraph">If you experience network-related issues, we can troubleshoot your problems and bring your network back online.</p>
        </section>
        <section id="service-section-5">
          <h2 className="service-h2">Web Development</h2>
            <p className="service-paragraph">The world runs on the Internet, and so should you.</p>
            <p className="service-paragraph">We create reliable web applications for every need.  Whether you need a simple site or an employee-management tool, we can build it.  Expert craftsmanship is just a click away!</p>
        </section>
        <span className="back-to-top" data-role="back-to-menu">Back to Menu</span>
      </div>
      <div className="content-wrapper vertical bottom left"></div>
      <div className="content-wrapper vertical bottom right"></div>
    </div>
    <Helmet>
      <script type="text/javascript" src="/themes/old/scripts/services-menu.js" />
      </Helmet>
  </div>
)

export default Page
