import React from 'react'

class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='comment-form-container'>
        <form>
          <input id='text-input' type='text' placeholder='Add A Comment' />
          <ul className='character-count-and-button'>
            <li>
              0/140
            </li>
            <li>
              <p>Post</p>
            </li>
          </ul>
      </form>
      </div>
    )
  }
}

export default CommentIndex;
