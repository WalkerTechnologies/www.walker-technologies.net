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
        <input name="name" id="name" type="text" className={`contact-input ${form.showErrorsFor('name') ? 'error' : ''}`} value={form.name} onChange={form.update} placeholder={form.showErrors ? 'Your name cannot be blank' : 'Your name'} />
        <input name="email" id="email" type="text" className={`contact-input ${form.showErrorsFor('email') ? 'error' : ''}`} value={form.email} onChange={form.update} placeholder={form.showErrors ? 'Your email cannot be blank' : 'Your email'} />
        <input name="phone" id="phone" type="text" className={`contact-input ${form.showErrorsFor('phone') ? 'error' : ''}`} value={form.phone} onChange={form.update} placeholder={form.showErrors ? 'Your phone cannot be blank' : 'Your phone'} />
        <textarea rows="6" cols="50" name="comments" id="comments" className={`contact-input ${form.showErrorsFor('comments') ? 'error' : ''}`} value={form.comments} onChange={form.update} placeholder={form.showErrors ? 'Comments cannot be blank' : 'Comments and questions'}></textarea>

        <button className="walker-button submit" name="yt0" onClick={form.submit} >Submit</button>

        { form.submissionSucceeded === true &&
          <p className="success-message">Thank you for contacting us–we'll be in touch shortly!</p>
        }
      </form>

      <div className="content-wrapper vertical bottom left"></div>
      <div className="content-wrapper vertical bottom right"></div>
    </div>

  </div>
)

export default inject('form')(observer(Page))
