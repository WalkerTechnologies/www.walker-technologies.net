import React from 'react'
import { inject, observer } from 'mobx-react'

const Page = ({form}) => (
  <div>
    <div className="h1-group">
      <h1 id='header'>Contact Us</h1>
      <div className="walker-splitter"></div>
    </div>

    <div id="content-wrapper">
      <div className="content-wrapper vertical top left"></div>
      <div className="content-wrapper vertical top right"></div>

      <form id="contact-form" action="#" method="post">
        <label htmlFor="name">Your Name</label>
        <div className={`errorMessage ${form.shouldShowNameError ? 'visible' : ''}`}>Your name cannot be blank.</div>
        <input name="name" id="name" type="text" value={form.name} onChange={form.update} />

        <label htmlFor="email">Your Email</label>
        <div className={`errorMessage ${form.shouldShowEmailError ? 'visible' : ''}`}>Your email cannot be blank.</div>
        <input name="email" id="email" type="text" value={form.email} onChange={form.update} />

        <label htmlFor="phone">Phone</label>
        <div className={`errorMessage ${form.shouldShowPhoneError ? 'visible' : ''}`}>Your phone number cannot be blank.</div>
        <input name="phone" id="phone" type="text" value={form.phone} onChange={form.update} />

        <label htmlFor="comments">Comments and Questions</label>
        <div className={`errorMessage ${form.shouldShowCommentsError ? 'visible' : ''}`}>Comments and Questions cannot be blank.</div>
        <textarea rows="6" cols="50" name="comments" id="comments" value={form.comments} onChange={form.update}></textarea>


        <button className="walker-button submit" name="yt0" onClick={form.submit} >Submit</button>

        { form.submissionSucceeded === true &&
          <p className="errorMessage">Thank you for contacting us–we'll be in touch shortly!</p>
        }
      </form>

      <div className="content-wrapper vertical bottom left"></div>
      <div className="content-wrapper vertical bottom right"></div>
    </div>

  </div>
)

export default inject('form')(observer(Page))
