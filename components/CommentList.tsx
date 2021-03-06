import { CommentType } from '../models/Comment'
import React, { useEffect } from 'react'
import { useMst } from '../models/RootModel'
import { observer } from 'mobx-react-lite'

export interface CommentListProps {}

const CommentList: React.FC<CommentListProps> = observer(props => {
  const {
    comments: { commentsArray, subscribe, produce }
  } = useMst()
  useEffect(() => {
    subscribe(produce)
  }, [commentsArray.length])

  return (
    <div>
      {commentsArray.map((comment: CommentType) => {
        return <div key={comment.id}>{comment.message}</div>
      })}
    </div>
  )
})

export default CommentList
