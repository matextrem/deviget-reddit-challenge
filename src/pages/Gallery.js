import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    position: 'relative',
    top: '6rem',
    backgroundColor: theme.palette.background.paper,
  },
  noContent: {
    position: 'relative',
    top: '6rem',
    margin: '0 auto',
  },
  gridList: {
  },
  gridTile: {
    width:'100% !important'
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const Gallery = () => {
  const classes = useStyles();

  const posts = useSelector(state => state.posts.posts).filter(
    p => p.inGallery,
  );

  return (
    <>
      {!posts.length && (
        <div className={classes.noContent}>
          <Typography gutterBottom variant="h2" component="h2">
            No content to show.
          </Typography>
        </div>
      )}
      {posts.length && (
        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
            {posts.map(post => (
              <GridListTile className={posts.length === 1 ? classes.gridTile : ''} key={post.id}>
                <img src={post.preview} alt={post.title} />
                <GridListTileBar
                  title={post.title}
                  subtitle={<span>by: {post.author}</span>}
                  actionIcon={
                    <IconButton className={classes.icon}>
                      <a
                        className={classes.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={post.preview}
                      >
                        <PlayForWorkIcon />
                      </a>
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      )}
    </>
  );
};

export default Gallery;