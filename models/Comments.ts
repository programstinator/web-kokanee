import { types } from 'mobx-state-tree'
import { Comment, CommentType } from './Comment'
import { name } from './names'
import { loremIpsum } from 'lorem-ipsum'

export const Comments = types
  .model('Comments', {
    nextId: 0,
    comments: types.optional(types.map(Comment), {}),
    lastComment: types.maybeNull(types.reference(Comment))
  })
  .views(self => {
    return {
      get commentsArray() {
        return Array.from(self.comments.values());
      }
    }
  })
  .actions(self => {
    return {
      afterCreate() {
        this.makeComments(10)
      },
      makeComments(count: number) {
        let comments = [];
        for (let i = 0; i < count; i++) {
          comments.push(
            self.comments.put(this.makeComment())
          )
        }
        return self.comments
      },
      makeComment() {
        self.nextId = self.nextId++
        const comment = Comment.create({
          id: self.nextId,
          author: name(),
          message: loremIpsum({ count: ~~(Math.random() * 3) }),
          time: new Date()
        });
        self.comments.put(comment);
        console.log(comment);
        return comment;
      },
      produce() {
        // every once in a while we send a dupe message
        if (!this.makeDupe()) {
          self.lastComment = this.makeComment()
        }
      },
      subscribe(callback: (comment: CommentType | null) => void) {
        const interval = Math.random() * 1000 + 2000
        console.log(`subscribing for next message, will arrive in ${interval.toFixed(0)} ms`)

        setTimeout(callback, interval)
      },
      makeDupe(): boolean {
        return Math.random() < 0.1 && !!self.lastComment
      }
    }
  })
