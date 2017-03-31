import React from 'react';
import { Link } from 'react-router'

const CommentIndexItem = (props) => {
  return (
    <li id='comment-index-item'>
      <img id='comment-user-image' src={props.comment.user_image_url} />
      <ul id='content-and-time'>
        <p id='comment-content'>
          <Link to={`users/${props.comment.user.id}`}><span id='comment-username'>{props.comment.user.username}</span></Link>: {props.comment.content}
        </p>
        <p className='comment-time'>
          {props.comment.created_at} ago
        </p>
      </ul>
    </li>
  )
}

export default CommentIndexItem;
