import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '10px',
  },
  // this makes it only for mobile devices
  [theme.breakpoints.down('sm')]: {
    // makes it so the form box is at the top when viewing it form mobile devices
    postBox: {
      flexDirection: "column-reverse"
    }
  }
}));