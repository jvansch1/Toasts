import React from 'react';

const CommentIndexItem = (props) => {
  debugger
  return (
    <li id='comment-index-item'>
      <img id='comment-user-image' src={props.comment.user_image_url} />
      <ul id='content-and-time'>
        <p>
          <span id='comment-username'>{props.comment.user.username}</span>: {props.comment.content}

        </p>
        <p className='comment-time'>
          {props.comment.created_at}

        </p>
      </ul>
    </li>
  )
}

export default CommentIndexItem;
