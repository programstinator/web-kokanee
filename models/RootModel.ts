import { types, Instance } from 'mobx-state-tree'
import { createContext, useContext } from 'react'
import { Comments } from './Comments'

export const RootModel = types.model('RootModel', {
  comments: types.optional(Comments, {})
})
export type RootInstance = Instance<typeof RootModel>

export const rootStore = RootModel.create()

const RootStoreContext = createContext<null | RootInstance>(null)

export const Provider = RootStoreContext.Provider
export function useMst() {
  const store = useContext(RootStoreContext)
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }
  return store as RootInstance
}
