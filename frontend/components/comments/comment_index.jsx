import React from 'react'
import CommentIndexItem from './comment_index_item'

class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  submitComment(e) {
    e.preventDefault();
    let comment = {
      user_id: this.props.currentUser.id,
      content: this.state.content,
      checkin_id: this.props.checkin.id
    }
    this.props.createComment(comment)
  }

  updateContent(e) {
    e.preventDefault();
    this.setState({content: e.target.value})
  }

  render() {
    debugger
    return (
      <div >

        <div id='comment-list'>
          <ul>
            {
              this.props.checkin.comments.map(comment => {
                return <CommentIndexItem comment={comment} />
              })
            }
          </ul>
        </div>
        <div id='comment-form-container'>
          <form >
            <input onChange={this.updateContent.bind(this)}id='text-input' type='text' placeholder='Add A Comment' />
            <ul className='character-count-and-button'>
              <li>
                0/140
              </li>
              <li>
                <p onClick={this.submitComment.bind(this)}>Post</p>
              </li>
            </ul>
        </form>
        </div>
    </div>
    )
  }
}

export default CommentIndex;
