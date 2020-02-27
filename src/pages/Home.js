import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';


//Actions
import allActions from '../actions';


//Utils
import { loadState } from '../utils/storage';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
  }));

  function Home() {
    const classes = useStyles();

    const dispatch = useDispatch();

    const mdBreakPoint = useMediaQuery('(max-width:768px)');

    const posts = useSelector(state => state.posts.posts);

    const loading = useSelector(state => state.posts.loading);

    const after = useSelector(state => state.posts.after);

    const removedAll = useSelector(state => state.posts.removedAll);

    useEffect(() => {
      const data = loadState();
      if (!data) dispatch(allActions.postActions.setPosts());
    }, [dispatch]);

    return (
      <div className={classes.root}>
        <CssBaseline />

        {/*<PostsList
          mdBreakPoint={mdBreakPoint}
          posts={posts}
          loading={loading}
          after={after}
          removedAll={removedAll}
        />*/}
      </div>
    );
  }

  export default Home;