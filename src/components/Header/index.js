import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const Header = () => {
  const [appLocation, setAppLocation] = useState('/');

  usePageViews();
  const classes = useStyles();

  function usePageViews() {
    let location = useLocation();
    useEffect(() => {
      setAppLocation(location.pathname);
      setPageName(getRouteName(location.pathname));
    }, [location]);
  }

  const getRouteName = location => (location === '/' ? 'GALLERY' : 'POSTS');

  const [pageName, setPageName] = useState(getRouteName);
  const getRoute = location => {
    const route = {
      ...location,
      pathname: appLocation === '/' ? '/gallery' : '/',
    };
    return route;
  };

  const updateRoute = () => setPageName(getRouteName(appLocation));
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          <Link to="/">
            <img src="images/reddit.png" alt="reddit" width="150" />
          </Link>
        </Typography>
        <Link className={classes.link} to={location => getRoute(location)}>
          <Button onClick={updateRoute} color="secondary">
            GO TO {pageName}
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
