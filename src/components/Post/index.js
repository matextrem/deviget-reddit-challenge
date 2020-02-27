import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import useStyles from './styles';

//Actions
import allActions from '../../actions';

//Utils
import { formatDate } from '../../utils/format';

const Post = ({ selected, mdBreakPoint, handleSelect }) => {
  const classes = useStyles();

  const posts = useSelector(state => state.posts.posts);

  const post = posts.find(post => post.selected);

  const dispatch = useDispatch();

  return (
    <>
      {(!post || post.removed || !post.selected) && (
        <div className={classes.noContent}>
          <Typography gutterBottom variant="h2" component="h2">
            No content to show.
          </Typography>
        </div>
      )}
      {!post ||
        (!post.removed && post.selected && (
          <>
            {selected && mdBreakPoint && (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSelect}
                className={classes.button}
                startIcon={<ArrowBackIosIcon />}
              >
                Go back
              </Button>
            )}
            <Card className={mdBreakPoint ? classes.mdCard : classes.card}>
              <CardActionArea
                onClick={() => window.open(post.url, '_blank')}
                className={classes.img}
              >
                <CardMedia
                  component="img"
                  alt={post.title}
                  height="400"
                  image={
                    post.thumbnail === 'self' || post.thumbnail === 'default'
                      ? '/images/reddit.png'
                      : post.preview
                  }
                  title={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {post.author} - {formatDate(post.created)} ago
                  </Typography>
                  <Typography
                    className={classes.comments}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <ChatBubbleIcon />
                    {post.comments}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() =>
                    post.inGallery
                      ? dispatch(allActions.postActions.removeGallery(post.id))
                      : dispatch(allActions.postActions.addGallery(post.id))
                  }
                  size="small"
                  color="secondary"
                >
                  {!post.inGallery ? 'ADD TO GALLERY' : 'REMOVE FROM GALLERY'}
                </Button>
              </CardActions>
            </Card>
          </>
        ))}
    </>
  );
};

export default Post;
