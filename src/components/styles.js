import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: '#ffffff',
    padding: '.5rem 0 .5rem 0',
  },
  link: {
    position: 'absolute',
    right: '10px',
    textDecoration: 'none',
  },

  toolbar: theme.mixins.toolbar,
}));