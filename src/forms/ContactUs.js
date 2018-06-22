import { types } from 'mobx-state-tree'

const ContactUs = types
  .model('ContactUs')
  .props({
    name: types.optional(types.string, ''),
    email: types.optional(types.string, ''),
    phone: types.optional(types.string, ''),
    comments: types.optional(types.string, ''),
    showErrors: types.optional(types.boolean, false),
    formFailed: types.optional(types.boolean, false),
    submissionSucceeded: types.optional(types.boolean, false)
  })
  .actions(self => ({
    update(event) {
      self[event.target.name] = event.target.value
    },
    submit(event) {
      self.showErrors = true
      event.preventDefault()

      if (self.shouldShowNameError || self.shouldShowEmailError || self.shouldShowPhoneError || self.shouldShowCommentsError) {
        return;
      }

      const formData = new FormData();

      formData.append('name', self.name)
      formData.append('email', self.email)
      formData.append('phone', self.phone)
      formData.append('comments', self.comments)

      fetch('https://www.elformo.com/forms/2c10cc2c-c1c9-43c1-8fab-ea16e42aba6b', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      })
      .catch(_ => self.formFailed())
      .then(_ => self.succeed())
    },
    formFailed() {
      self.formFailed = true
    },
    succeed() {
      self.submissionSucceeded = true
      self.reset()
    },
    reset() {
      self.name = ''
      self.email = ''
      self.phone = ''
      self.comments = ''
      self.formFailed = false
      self.showErrors = false
    }
  }))
  .views(self => ({
    get shouldShowNameError() {
      return self.showErrors && self.name.length === 0
    },
    get shouldShowEmailError() {
      return self.showErrors && self.email.length === 0
    },
    get shouldShowPhoneError() {
      return self.showErrors && self.phone.length === 0
    },
    get shouldShowCommentsError() {
      return self.showErrors && self.comments.length === 0
    }
  }))

export default ContactUs
