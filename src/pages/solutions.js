import React from 'react'

const Page = () => (
  <React.Fragment>
    <div className="banner">
      <video autoPlay playsInline muted loop className="banner-video">
      </video>

      <h2 className="banner-title">Our Solutions</h2>
    </div>

    <div className="services-content">
      <section className="divided-section-content">
        <div className="services-content">
          <p>Walker Technologies provides structured cabling services for companies of all sizes. Our experience ranges from the everyday moves/adds/changes to remodels, additions, renovations and new construction of buildings anywhere within the South-Central region of Texas.</p>
          <p>We offer 24-hour services to our customers, not only, for the unexpected emergencies, but also for the flexibility to work in fully operating facilities and limit any hindrance to your employees. High customer satisfaction and positive group dynamics has made us the company we are today.</p>
        </div>
      </section>
    </div>
  </React.Fragment>
)


export default Page