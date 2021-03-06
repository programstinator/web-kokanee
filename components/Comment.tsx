import React from 'react'
import { Comment } from '../models/Comment'
import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

interface CommentListProps {
  comment: Comment
}
const useStyles = makeStyles((theme: Theme) => {
  return {
    commentWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 10,
      height: 80
    },
    commentMessage: {
      padding: 0,
      margin: 0
    },
    commentAuthorWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    commentAuthorAvatar: {
      width: 40,
      height: 40
    },
    commentAuthorName: {
      width: 140
    }
  }
})
export const CommentComponent: React.FC<CommentListProps> = (props: CommentListProps) => {
  const classes = useStyles()
  const {
    comment: { id, message, author, time }
  } = props
  return (
    <div className={classes.commentWrapper}>
      <div className={classes.commentAuthorWrapper}>
        <img className={classes.commentAuthorAvatar} src={'/assets/images/avatar.svg'} />
        <span className={classes.commentAuthorName}> {author} </span>
      </div>
      <p className={classes.commentMessage}>{message}</p>
    </div>
  )
}
