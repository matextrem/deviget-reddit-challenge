import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import CancelIcon from '@material-ui/icons/Cancel';
import RestoreIcon from '@material-ui/icons/Restore';
import Fab from '@material-ui/core/Fab';
import Fade from '@material-ui/core/Fade';
import Chip from '@material-ui/core/Chip';

import useStyles from './styles';

//Actions
import allActions from '../../actions';

//Utils
import { POST_LIMIT } from '../../utils/constants';

//Components
import Post from '../Post';
import PostItem from '../PostItem';


const PostsList = ({ mdBreakPoint, posts, loading, after, removedAll }) => {
  const classes = useStyles();

  const [selected, setSelected] = useState(false);

  const dispatch = useDispatch();

  const handlePost = postId => {
    setSelected(true);
    dispatch(allActions.postActions.setRead(postId));
    dispatch(allActions.postActions.setSelected(postId));
  };

  const handleRemove = (e, postId) => {
    e.stopPropagation();
    dispatch(allActions.postActions.setRemove(postId));
  };

  const handleRemoveAll = () => {
    dispatch(allActions.postActions.setRemoveAll());
  };

  const handleScroll = e => {
    if (
      !loading &&
      posts.length < POST_LIMIT &&
      e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight
    ) {
      dispatch(allActions.postActions.setPosts({ after }));
    }
  };

  return (
    <>
      <div className={selected && mdBreakPoint ? classes.mdDrawer : ''}>
        <Drawer
          className={
            !selected && mdBreakPoint ? classes.drawerWidth : classes.drawer
          }
          onScroll={handleScroll}
          variant="permanent"
          classes={{
            paper:
              !selected && mdBreakPoint
                ? classes.MdDrawerPaper
                : classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          {removedAll && (
            <Chip
              className={classes.removeMessage}
              label="All posts have been deleted."
              disabled
            />
          )}
          <div>
            <Fab
              className={classes.dismissAll}
              color="secondary"
              variant="extended"
              onClick={handleRemoveAll}
              disabled={removedAll}
            >
              <CancelIcon />
              Dismiss all
            </Fab>
            <Fab
              className={classes.restoreAll}
              color="primary"
              variant="extended"
              onClick={() => dispatch(allActions.postActions.restoreAll())}
            >
              <RestoreIcon />
              Restore all
            </Fab>
          </div>
          <Fade
            onExited={() => dispatch(allActions.postActions.dismissAll())}
            timeout={400}
            in={!removedAll}
          >
            <List className={classes.list}>
              {posts.map(post => (
                <PostItem
                  key={post.id}
                  post={post}
                  handlePost={handlePost}
                  handleRemove={handleRemove}
                />
              ))}
            </List>
          </Fade>
          {loading && <CircularProgress className={classes.loading} />}
        </Drawer>
      </div>
      <div className={!selected && mdBreakPoint ? classes.mdPost : ''}>
      <Post
          selected={selected}
          handleSelect={() => setSelected(false)}
          mdBreakPoint={mdBreakPoint}
        />
      </div>
    </>
  );
};

export default PostsList;
