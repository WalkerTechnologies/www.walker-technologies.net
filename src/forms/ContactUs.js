import { types } from 'mobx-state-tree'

const ContactUs = types
  .model('ContactUs')
  .props({
    name: types.optional(types.string, ''),
    email: types.optional(types.string, ''),
    phone: types.optional(types.string, ''),
    comments: types.optional(types.string, ''),
    showErrors: types.optional(types.boolean, false),
    submissionSucceeded: types.optional(types.boolean, false)
  })
  .actions(self => ({
    update(event) {
      self[event.target.name] = event.target.value
      self.submissionSucceeded = false
    },
    submit(event) {
      self.showErrors = true
      event.preventDefault()

      if (self.showErrorsFor('name') || self.showErrorsFor('email') || self.showErrorsFor('phone') || self.showErrorsFor('comments')) {
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
      .then(_ => self.formSucceeded())
    },
    formSucceeded() {
      self.reset()
      self.submissionSucceeded = true
    },
    reset() {
      self.name = ''
      self.email = ''
      self.phone = ''
      self.comments = ''
      self.showErrors = false
      self.submissionSucceeded = false
    }
  }))
  .views(self => ({
    showErrorsFor(key) {
      return self.showErrors && self[key].length < 1
    }
  }))

export default ContactUs
