import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
    position: 'relative',
    top: '6rem',
    left: '2rem',
  },
  toolbar: theme.mixins.toolbar,
  card: {
    position: 'relative',
    top: '5rem',
    margin: '2rem',
    padding: theme.spacing(3),
  },
  img: {
    minWidth: '760px',
  },
  comments: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  noContent: {
    top: '100%',
    position: 'relative',
    left: '25%',
  },
  mdCard: {
    position: 'relative',
    top: '5rem',
    margin: '2rem',
    padding: theme.spacing(3),
    maxWidth: '700px',
    overflowX: 'scroll',
    width: 'auto',
  },
}));
