import {types} from 'mobx-state-tree'

const SlideMenu = types
  .model({
    isOpen: false,
  })
  .actions(self => ({
    toggle() {
      self.isOpen = !self.isOpen
    },
    hasOpened(state) {
      self.isOpen = state.isOpen
    }
  }))

export default SlideMenu
