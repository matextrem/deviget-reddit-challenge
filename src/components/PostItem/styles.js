import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  itemContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  list: {
    marginBottom: '7rem',
  },
  listItem: {
    padding: '1rem .5 1rem .5rem',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginRight: '.5rem',
  },
  title: {
    marginBottom: 0,
  },
  comments: {
    color: '#FF5700',
  },
  author: {
    color: '#C9C9C9',
  },
  removeMessage: {
    borderRadius: 0,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));