import React from 'react'
import { Theme, Typography, Button, ListItem, List, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CommentList from '../components/CommentList'
import { makeComments } from '../models/Comment'

const numOfInitialComments = 10000

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      fontFamily: '"IBM Plex Sans", Arial, Helvetica',
      width: 800,
      maxWidth: '80vw',
      margin: '20px auto'
    },
    media: {
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    }
  }
})

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img
        className={classes.media}
        alt="Kokanee Creek is also known as Depot Creek"
        src="https://www.waterfallsnorthwest.com/pictures/Depot_Creek_Falls_167.jpg"
      />
      <Typography gutterBottom variant="h2">
        Kokanee Exploratory Project
      </Typography>
      <Typography gutterBottom variant="h3">
        Welcome!
      </Typography>
      <Typography gutterBottom variant="body1">
        Design a comment list component that automatically appends new messages as they arrive. Allow the user to choose
        whether or not to automatically “follow” as new messages arrive.
      </Typography>
      <Typography gutterBottom variant="body2">
        <strong>what does follow mean?</strong> Messages should always be appended to the UI as they arrive. When the
        user is following, the UI should ensure that the newest message is always in the viewport. When the user is not
        following, the messages should append into the UI, but avoid automatically scrolling the viewport, to allow a
        user to read without interruption.
      </Typography>
      <Typography gutterBottom variant="body1">
        Please connect with Hank, your Maven Teammate. Please treat this relationship as you would a normal colleague.
        If you have any questions about the code base, feel free to ask for an orientation. You are also invited, but
        not obligated, to submit a PR for the work and take feedback from the PR.
      </Typography>
      <Typography gutterBottom variant="body1">
        Typescript is preferred, but JavaScript is acceptable.
      </Typography>
      <Typography gutterBottom variant="body1">
        Good luck!
      </Typography>
      <p>
        Have a look around the project and see if anything is helpful. be sure and take a look at models/Comment.ts and
        components/CommentList.tsx. (There is also a javascript version of the CommentList component, in
        components/ComponentListJS.jsx, if you prefer.)
      </p>
      <p>
        If you want to do something like create a new page route, the{' '}
        <a href="https://nextjs.org/docs/basic-features/pages">nextjs docs</a> are quite useful.{' '}
      </p>
      <List>
        <ListItem>
          <ListItemText>
            Extra credit 1: ensure the CommentList can load a large number (~ 10,000) of comments.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Extra credit 2: Ensure there are no duplicate messages in the stream.</ListItemText>
        </ListItem>
      </List>
      <CommentList initialComments={makeComments(numOfInitialComments)} />
    </div>
  )
}

export default Home
