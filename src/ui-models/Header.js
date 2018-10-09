import { types, onSnapshot } from 'mobx-state-tree'

const Header = types
  .model({
    isHovering: false,
    sectionBeingHovered: '',
  })
  .actions(self => ({
    activateHover() {
      self.isHovering = true
    },

    deactivateHover() {
      self.isHovering = false
      self.sectionBeingHovered = ''
    },

    hoveringOverSection(name) {
      self.sectionBeingHovered = name
    }
  }))
  .views(self => ({
    get shouldShowLinks() {
      return self.isHovering && self.linksToShow.length > 0
    },

    get linksToShow() {
      return self.links[self.sectionBeingHovered] || []
    },
    get links() {
      return {
        'About' : [
          { link: '/about/who-we-are', name: 'Who We Are' },
          { link: '/about/careers', name: 'Careers' },
          { link: '/about/experience', name: 'Experience' },
        ],
        'Solutions' : [
          { link: '/solutions/structured-cabling', name: 'Structured Cabling' },
          { link: '/solutions/av', name: 'Audio / Visual' },
        ],
        'Design' : [
          { link: '/design/network-infrastructure', name: 'Network Infrastructure' },
          { link: '/design/wireless-infrastructure', name: 'Wireless Infrastructure' },
          { link: '/design/software-architecture', name: 'Software Architecture' },
        ]
      }
    }
  }))

export default Header
