import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  imageContainer: {
    margin: '0 auto',
    position: 'absolute',
    width: '100%',
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    top: '6rem',
  },
  img: {
    margin: '0 auto',
  },
  message: {
    textAlign: 'center',
  },
}));