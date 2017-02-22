import React from 'react';
import HeaderContainer from '../header/header_container'
import {Link} from 'react-router'
import CommentIndexContainer from '../comments/comment_index_container'

class CheckinShow extends React.Component {
  constructor(props) {
    super(props)
    if (props.checkins) {
      this.state = {
        likes: props.checkin
      }
    }
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchCheckin(this.props.params.checkinId)
    }
    this.props.fetchLikes()
  }

  componentWillReceiveProps(newProps) {
    this.state = newProps.checkin
    if (newProps.checkin) {
      this.setState(newProps.checkin)
    }
  }

  createLike(e) {
    const like = {
      user_id: window.currentUser.id,
      checkin_id: this.props.checkin.id
    }
    e.preventDefault();
    this.props.createLike(like)
    this.props.fetchCheckin(this.props.checkin.id)
  }

  renderButton() {
    this.props.checkin.likes.every(like => {
      store.getState().session.currentUser.id === like.user_id
    })
  }

  render() {
    debugger
    if (this.props.checkin === undefined) {
      return null;
    }
    else {
      const rating = `${this.props.checkin.rating}px`
      const button = this.renderButton() ? "Untoast" : "Toast"
      return (
        <div>
          <HeaderContainer />

          <div className='checkin-show-container'>
            <div className='checkin-show-left'>

              <div className='checkin-left-top'>
                <div className='user-bar'>
                  <img src={this.props.checkin.user.image_url} />
                  <span className='name'>
                    {this.props.checkin.user.username}
                  </span>
                  <span className='date'>
                    {this.props.checkin.created_at}
                  </span>
                </div>

                <div className='checkin-detail'>
                  <img src={this.props.checkin.beer_image_url} />

                  <div className='beer-and-brewery'>

                    <Link to={`beers/${this.props.checkin.beer.id}`}>
                      <p className='checkin-show-beer-name'>
                        {this.props.checkin.beer.name}
                      </p>
                    </Link>

                    <Link to={`breweries/${this.props.checkin.brewery.id}`}>
                      <p className='checkin-show-brewery-name'>
                        {this.props.checkin.brewery.name}
                      </p>
                    </Link>

                    <div className='rating-and-description'>
                      <p className='checkin-description'>
                        {this.props.checkin.description}
                      </p>

                        <div className='brewery-star-ratings-css'>

                         <div className='brewery-star-ratings-css-top' style={{width: rating}} >
                           <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                         </div>

                         <div className='brewery-star-ratings-css-bottom'>
                           <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                         </div>
                        </div>

                    </div>
                  </div>


                </div>
              </div>

              <div className='checkin-left-bottom'>
                <div className='toast-button'>
                  <p onClick={this.createLike.bind(this)}>
                    {button}
                  </p>


                </div>
                <span>
                  {this.props.checkin.likes.length} Toasts! Nice!
                </span>
              </div>

              <CommentIndexContainer checkin={this.props.checkin}/>

            </div>

            <div className='checkin-show-right'>
              <img src={this.props.checkin.image_url} id='checkin-full-pic'/>
            </div>

          </div>
        </div>
      )
    }
  }
}

export default CheckinShow;
