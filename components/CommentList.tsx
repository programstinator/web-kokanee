import { Comment, subscribe } from '../models/Comment'
import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'
import { CommentComponent } from './Comment'
import ReactList from 'react-list';

export interface CommentListProps {
  initialComments: Comment[]
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    commentList: {
      maxHeight: '300px',
      overflow: 'auto',
      border: '1px solid black',
      padding: '20px'
    },
    checkbox: {
      display: 'flex',
      alignItems: 'center',
      userSelect: 'none'
    }
  }
})
interface ListInterface {
  index: number
}

const CommentList: React.FC<CommentListProps> = props => {
  const classes = useStyles()
  const [count, setCount] = useState(props.initialComments.length)
  const [comments, setComments] = useState(props.initialComments)
  const [follow, setFollow] = useState(false)
  useEffect(() => {
    subscribe(comment => {
      console.log('received comment: ', comment)
      setCount(count + 1)
      setComments([...comments, comment])
    })
    if (follow) {
      // @ts-ignore
      ref.scrollTo(comments.length)
    }
  }, [count, follow])

  let ref = useRef(null)
  const renderItem = (index: number, key: number) => {
    return <CommentComponent comment={comments[index]} key={comments[index].id} />
  }

  return (
    <>
      <div className={classes.checkbox}>
        <label htmlFor={'follow'}>Follow</label>
        <input
          value={follow.toString()}
          onChange={event => setFollow(event.target.checked)}
          type={'checkbox'}
          name={'follow'}
          id={'follow'}
        />
      </div>
      <div className={classes.commentList}>
        <ReactList
          // @ts-ignore
          itemRenderer={renderItem}
          length={comments.length}
          type={"uniform"}
          // @ts-ignore
          ref={c => ref = c}
        />
      </div>
    </>
  )
}

export default CommentList
