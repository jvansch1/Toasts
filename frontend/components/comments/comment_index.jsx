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
    this.props.createComment(comment).then(() => this.setState({content: ''}));
  }

  updateContent(e) {
    e.preventDefault();
    this.setState({content: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div >

        <div id='comment-list'>
          <ul>
            {
              this.props.checkin.comments.map(comment => {
                return <CommentIndexItem comment={comment} key={comment.id}/>
              })
            }
          </ul>
        </div>
        <div id='comment-form-container'>
          <form onSubmit={this.handleSubmit}>
            <input autoComplete='off' maxLength='140' onChange={this.updateContent.bind(this)}id='text-input' type='text' placeholder='Add A Comment' value={this.state.content}/>
            <ul className='character-count-and-button'>
              <li>
                {this.state.content.length}/140
              </li>
              <li>
                <p id='post-button' onClick={this.submitComment.bind(this)}>Post</p>
              </li>
            </ul>
        </form>
        </div>
    </div>
    )
  }
}

export default CommentIndex;
