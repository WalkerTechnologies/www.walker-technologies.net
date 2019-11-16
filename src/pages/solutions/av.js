import React from 'react'
import {SetBannerTitle} from '../../layouts/components/BannerTitle'

const Page = () => (
  <React.Fragment>

    <SetBannerTitle value={"Audio / Visual"} />

    <div className="services-content">
      <section className="divided-section-content">
        <p>Walker Technologies offers a wide range of system ideas and will gain a solid understanding of every client’s A/V needs ranging from meeting and board rooms to K-12 classrooms, offices and more. We will help capitalize on the functionality of existing and new facilities for employees, students and/or customers.</p>
      </section>
    </div>
  </React.Fragment>
)

export default Page
