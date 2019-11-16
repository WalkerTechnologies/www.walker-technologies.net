import React from 'react'
import {SetBannerTitle} from '../../layouts/components/BannerTitle'

const Page = () => (
  <React.Fragment>

    <SetBannerTitle value={"Software Architecture Design"} />

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
