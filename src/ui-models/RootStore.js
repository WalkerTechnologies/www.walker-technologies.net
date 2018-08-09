import { types } from 'mobx-state-tree'
import Header from './Header'
import SlideMenu from './SlideMenu'

const RootStore = types
  .model({
    Header: types.optional(Header, {}),
    SlideMenu: types.optional(SlideMenu, {})
  })

export default RootStore
