import { types } from 'mobx-state-tree'
import Header from './Header'

const RootStore = types
  .model({
    Header: types.optional(Header, {})
  })

export default RootStore
