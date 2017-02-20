import React from 'react';
import HeaderContainer from '../header/header_container'

class CheckinShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchCheckin(this.props.params.checkinId)
    }
  }

  componentWillReceiveProps(newProps) {
    this.state = newProps.checkin
  }

  render() {
    if (this.props.checkin === undefined) {
      return null;
    }
    else {
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
                  <img src={this.props.checkin.image_url} />

                  <div className='beer-and-brewery'>
                    <p>
                      {this.props.checkin.beer.name}

                    </p>
                    <p>
                      {this.props.checkin.brewery.name}
                    </p>
                  </div>


                  <div className='rating-and-description'>
                    <p>
                      {this.props.checkin.description}
                    </p>
                    <p>{this.props.checkin.rating} / 5</p>
                  </div>
                </div>
              </div>

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
