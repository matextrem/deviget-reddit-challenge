import React from 'react';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.imageContainer}>
      <img
        className={classes.img}
        alt="Page not found"
        src="/images/notFound.png"
      />
      <Typography
        className={classes.message}
        gutterBottom
        variant="h2"
        component="h2"
      >
        Page not found.
      </Typography>
    </div>
  );
};

export default NotFound;