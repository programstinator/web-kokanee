import { name } from './names'
import { Instance, types } from 'mobx-state-tree'

export interface IComment {
  id: number
  author: string
  message: string
  time: Date
}

export const Comment = types
  .model('Comment', {
    id: types.identifierNumber,
    author: '',
    message: '',
    time: types.maybeNull(types.Date)
  })
  .actions(self => {
    return {
      afterCreate() {
        self.author = name()
        self.time = new Date()
      }
    }
  })

const tempComment = Comment.create({id: 99999})
export interface CommentType extends Instance<typeof tempComment> {}
