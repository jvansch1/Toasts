 import React from 'react';
 import { Link, hashHistory } from 'react-router'
 import { createLike, deleteLike } from '../../actions/like_actions';


 class CheckinIndexItem extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       open: false,
       content: ''
     }
   }

   handleLike(e) {
     e.preventDefault();
     if (!this.renderButton()) {
       this.like()
     }
     else {
       this.unlike()
     }
   }

   like() {
     let like = { user_id: this.props.currentUser.id, checkin_id: this.props.checkin.id }
     this.props.createLike(like)
   }

   unlike() {
     let like = this.props.checkin.likes.filter(like => like.user_id === this.props.currentUser.id)
     this.props.deleteLike(like[0])
   }

   shouldComponentUpdate() {
     if (!this.props.currentUser) {
       return false;
     }
     return true;
   }

   redirectToShow() {
     hashHistory.push(`checkins/${this.props.checkin.id}`)
   }

   renderButton() {
     if (this.props.checkin) {
       return this.props.checkin.likes.some(like => {
         return like.user_id === this.props.currentUser.id
       })
     }
   }

   openCommentBox() {
     if (!this.state.open) {
       $('#' + this.props.checkin.id).removeClass('closed')
       $('#' + this.props.checkin.id).addClass('open')
       this.setState({open: true})
     }
     else {
       $('#' + this.props.checkin.id).addClass('closed')
       $('#' + this.props.checkin.id).removeClass('open')
       this.setState({open: false})
     }
   }

   updateContent(e) {
     this.setState({content: e.currentTarget.value})
   }

   handleSubmit(e) {
     e.preventDefault()
     let comment = {
       user_id: this.props.currentUser.id,
       content: this.state.content,
       checkin_id: this.props.checkin.id
     }
     this.props.createComment(comment).then(hashHistory.push(`checkins/${this.props.checkin.id}`))
   }


   render() {

     if (!this.props.checkin.user) return null;
     const ratingLength = `${this.props.checkin.rating * 25}px`
     const button = this.renderButton() ? "Untoast" : "Toast"
     return (
       <li id='checkin-index-item'>
         <div id='user-info'>
           <div id='image-container'>
             <Link to={`users/${this.props.checkin.user.id}`}><img className='checkin-index-user-image' src={this.props.checkin.user.image_url} /></Link>
           </div>
           <div id='checkin-content'>
             <p>
               <Link to={`users/${this.props.checkin.user.id}`}>{this.props.checkin.user.username}</Link> is drinking a <Link to={`beers/${this.props.checkin.beer.id}`}>{this.props.checkin.beer.name}</Link> by <Link to={`breweries/${this.props.checkin.brewery.id}`}>{this.props.checkin.brewery.name}</Link>
             </p>
             <div id='r-and-d'>
               <p>{this.props.checkin.description}</p>
                <div className='checkin-index-star-ratings-css'>
                  <div className='checkin-index-star-ratings-css-top' style={{width: ratingLength}} >
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <div className='checkin-index-star-ratings-css-bottom'>
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
             </div>
             <div id='checkin-image-container'>
               <img width='500px' id='checkin-index-checkin-image' src={this.props.checkin.image_url} />
             </div>
             <div id='checkin-buttons'>
               <div>
                 <i className="fa fa-comments" aria-hidden="true"></i>
                 <span onClick={this.openCommentBox.bind(this)}>Comment</span>
               </div>

               <div onClick={this.handleLike.bind(this)}>
                 <i className="fa fa-beer" aria-hidden="true"></i>
                 <span>{button}</span>
               </div>
             </div>
             <div id={this.props.checkin.id} className='closed'>
                 <textarea maxLength='140' id='comment-box' onChange={this.updateContent.bind(this)} placeholder='Leave a Comment...'/>
                 <div id='post-button-container'>
                   <p id='comment-length-count'>{this.state.content.length}/140</p>
                   <div id='post-button-2' onClick={this.handleSubmit.bind(this)}><i className="fa fa-sticky-note-o" aria-hidden="true"></i>Post</div>
                 </div>
             </div>

             <div id='checkin-index-stats'>
               <span id='checkin-creation-time'>
                 {this.props.checkin.created_at} ago
               </span>
               <span id='likes'>
                 {this.props.checkin.likes.length} Likes
               </span>
               <span id='link'>
                 <Link to={`checkins/${this.props.checkin.id}`}>View Detailed Checkin</Link>
               </span>
             </div>
           </div>
           <Link to={`beers/${this.props.checkin.beer.id}`}><img id='index-beer-image' src={this.props.checkin.beer_image_url} /></Link>
         </div>

       </li>
     )
   }
 }

export default CheckinIndexItem;
