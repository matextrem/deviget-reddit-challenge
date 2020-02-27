import { makeStyles } from '@material-ui/core/styles';

import { DRAWER_WIDTH } from '../../utils/constants';

export default makeStyles(theme => ({
  shape: {
    backgroundColor: theme.palette.primary.main,
    width: 40,
    height: 40,
  },
  shapeCircle: {
    borderRadius: '50%',
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerWidth: {
    width: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    maxWidth: DRAWER_WIDTH,
    marginTop: '5rem',
    paddingBottom: '5rem',
  },
  mdDrawerPaper: {
    width: '100%',
    marginTop: '5rem',
    paddingBottom: '5rem',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  list: {
    marginBottom: '7rem',
  },
  title: {
    marginBottom: 0,
  },
  loading: {
    display: 'block',
    margin: '8px auto',
    color: '#FF5700',
  },
  dismissAll: {
    position: 'fixed',
    bottom: '.75rem',
    zIndex: 999,
    left: '.25rem',
  },
  restoreAll: {
    position: 'fixed',
    bottom: '4rem',
    zIndex: 999,
    left: '.25rem',
  },
  removeMessage: {
    borderRadius: 0,
  },
  mdPost: {
    display: 'none',
  },
  mdDrawer: {
    display: 'none',
  },
}));