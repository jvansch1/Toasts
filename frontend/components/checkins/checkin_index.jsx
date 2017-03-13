import React from 'react';
import HeaderContainer from '../header/header_container';
import CheckinIndexItem from './checkin_index_item';
import { Link } from 'react-router';

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      limit: 4,
      offset: 0
    }
  }

  componentDidMount() {
    $('#previous-button').addClass('grey');
    this.props.fetchCheckins(this.state.limit, this.state.offset);
  }

  topBeers() {
    return window.top_beers.top_beers.map(beerArray => {
      return (
        <Link to={`beers/${beerArray[0].id}`} key={beerArray[0].id}>
          <li className='top-beer-index-item' key={beerArray[0].id}>
            <img className='top-beer-image' src={beerArray[1]} />
            <ul className='top-beer-name'>
              <li>
                <h2>{beerArray[0].name}</h2>
              </li>
              <li id='top-beer-brewery-name'>
                <h4>{beerArray[2].name}</h4>
              </li>
            </ul>
          </li>
        </Link>
      )
    })
  }


  shouldComponentUpdate() {
    if (!store.getState().session.currentUser) {
      return false;
    }
    return true;
  }

  getNextCheckins(e) {
    if (window.checkin_count.checkins - this.state.offset <= 7) {
      $(e.currentTarget).addClass('grey')
    }
    if (this.state.offset + 4 >= window.checkin_count.checkins) {
      return null;// this.setState({offset: this.state.offset}, () => this.props.fetchCheckins(this.state.limit, this.state.offset));
    }
    else {
      this.setState({offset: this.state.offset + 4}, () => {
        $('#previous-button').removeClass('grey');
        this.props.fetchCheckins(this.state.limit, this.state.offset)
    });
  }
}

  getPrevCheckins(e) {
    //
    if (this.state.offset <= 4) {
      $('#previous-button').addClass('grey');
      this.setState({offset: 0}, () => this.props.fetchCheckins(this.state.limit, this.state.offset))
    }
    else {
      if ($('#next-button').attr('class') !== undefined) {
        $('#next-button').removeClass('grey');
      }
      this.setState({offset: this.state.offset - 4}, () => this.props.fetchCheckins(this.state.limit, this.state.offset))
    }
  }


  render() {
    return (
        <div>
          <HeaderContainer />

          <div id='checkin-index-container'>
            <div id='checkin-index-left'>
              <h2 id='feed-header'>
                Recent Global Activity
              </h2>
              <ul>
                {
                  this.props.checkins.map(checkin => {
                    return <CheckinIndexItem checkin={checkin} createLike={this.props.createLike} key={checkin.id}/>
                  })
                }
              </ul>
            </div>

            <div id='checkin-index-right'>
              <div id='checkin-user-header'>
                <img id='user-home-image' src={store.getState().session.currentUser.image_url} />
                <p id='user-home-name'>
                  {store.getState().session.currentUser.username}
                </p>
              </div>

              <div id='user-stat-list'>
                <section className='individual-stat'>
                  <span className='number'>
                    {store.getState().session.currentUser.checkins.length}
                  </span>
                  <p className='title' >Total</p>
                </section>
                <section className='individual-stat'>
                  <span className='number'>
                    {store.getState().session.currentUser.unique_checkins}
                  </span>
                  <p className='title' >Unique</p>
                </section>
              </div>
              <div id='pagination-buttons'>
                <button id='previous-button' onClick={this.getPrevCheckins.bind(this)}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                <button id='next-button' onClick={this.getNextCheckins.bind(this)}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
              </div>
              <div id='beer-list-container'>
                <h1 id='beer-list-header'>Top Beers</h1>
                <ul id='top-beer-list'>
                  {this.topBeers()}
                </ul>
              </div>
            </div>
          </div>
          <ul>
          </ul>
        </div>
      )
  }
}

export default CheckinIndex;
