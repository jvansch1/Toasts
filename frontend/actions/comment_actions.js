import * as CommentApiUtil from '../util/comment_api_util';


export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
})

export const createComment = (comment) => {
  return dispatch => {
    return CommentApiUtil.createComment(comment)
      .then(comment => dispatch(receiveComment(comment)))
  }
}
