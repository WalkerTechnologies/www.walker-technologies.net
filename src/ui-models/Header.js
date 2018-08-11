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
      console.log(self.links[self.sectionBeingHovered] || [])
      return self.links[self.sectionBeingHovered] || []
    },
    get links() {
      return {
        'About' : [
          { link: '/about/careers', name: 'Careers' },
          { link: '/about/experience', name: 'Experience' },
        ],
        'Services' : [
          { link: '/services/cable-installation', name: 'Cable Installation' },
          { link: '/services/network-design', name: 'Network Design' },
          { link: '/services/network-testing', name: 'Network Testing' },
          { link: '/services/site-maintenance', name: 'Site Maintenance' },
          { link: '/services/badass-software', name: 'Badass Software' },
        ]
      }
    }
  }))

export default Header
