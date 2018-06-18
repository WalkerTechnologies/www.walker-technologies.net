import React from 'react'

const Page = () => (
	<div id="content-wrapper">
		<div className="content-wrapper vertical top left"></div>
		<div className="content-wrapper vertical top right"></div>

		<form id="contact-form" action="/contact" method="post">
      <label htmlFor="ContactForm_name">Your Name</label>
  		<div className="errorMessage" id="ContactForm_name_em_" style={{display: 'none'}}></div>
      <input name="ContactForm[name]" id="ContactForm_name" type="text" />

      <label htmlFor="ContactForm_email">Your Email</label>
  		<div className="errorMessage" id="ContactForm_email_em_" style={{display: 'none'}}></div>
      <input name="ContactForm[email]" id="ContactForm_email" type="text" />

      <label htmlFor="ContactForm_phone">Phone</label>
  		<div className="errorMessage" id="ContactForm_phone_em_" style={{display: 'none'}}></div>
      <input name="ContactForm[phone]" id="ContactForm_phone" type="text" />

      <label htmlFor="ContactForm_body">Comments and Questions</label>
  		<div className="errorMessage" id="ContactForm_body_em_" style={{display: 'none'}}></div>

      <textarea rows="6" cols="50" name="ContactForm[body]" id="ContactForm_body"></textarea>
      <input className="walker-button" type="submit" name="yt0" value="Submit" />
		</form>

		<div className="content-wrapper vertical bottom left"></div>
		<div className="content-wrapper vertical bottom right"></div>
	</div>
)

export default Page
