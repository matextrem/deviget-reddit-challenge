import React from 'react';
import { useDispatch } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Slide from '@material-ui/core/Slide';
import Chip from '@material-ui/core/Chip';

import useStyles from './styles';

//Actions
import allActions from '../../actions';

//Utils
import { formatDate } from '../../utils/format';

const PostItem = ({ post, handleRemove, handlePost }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <Slide
      direction="right"
      onExited={() => dispatch(allActions.postActions.dismissPost(post.id))}
      timeout={700}
      key={post.id}
      in={!post.removed}
    >
      <ListItem
        selected={post.selected}
        onClick={() => handlePost(post.id)}
        button
        className={classes.listItem}
      >
        <div className={classes.itemContainer}>
          <Badge
            invisible={post.read}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            color="secondary"
            badgeContent=" "
            variant="dot"
          >
            <div className={classes.avatarContainer}>
              <Avatar
                className={classes.avatar}
                alt={post.title}
                src={post.thumbnail}
              />
            </div>
          </Badge>

          <div className={classes.infoContainer}>
            <h4 className={classes.title}>{post.title}</h4>
            <span className={classes.author}>
              {post.author} - {formatDate(post.created)} ago
            </span>
            <span className={classes.comments}>{post.comments} comments</span>
            <span>
              <Chip
                label="Dismiss"
                color="secondary"
                onClick={e => handleRemove(e, post.id)}
              />
            </span>
          </div>
        </div>
      </ListItem>
    </Slide>
  );
};

export default PostItem;