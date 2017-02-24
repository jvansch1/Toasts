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
    this.props.fetchCheckins(this.state.limit, this.state.offset);
  }

  topBeers() {
    return window.top_beers.top_beers.map(beerArray => {
      return (
        <Link to={`beers/${beerArray[0].id}`}>
          <li className='top-beer-index-item'>
            <img className='top-beer-image' src={beerArray[1]} />
            <ul className='top-beer-name'>
              <li>
                <h2>{beerArray[0].name}</h2>
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

  getNextCheckins() {
    this.setState({offset: this.state.offset + 4}, () => this.props.fetchCheckins(this.state.limit, this.state.offset) )

  }

  getPrevCheckins() {
    if (this.state.offset - 4 < 0) {
      this.setState({offset: 0}, () => this.props.fetchCheckins(this.state.limit, this.state.offset))
    }
    else {
      this.setState({offset: this.state.offset - 4}, () => this.props.fetchCheckins(this.state.limit, this.state.offset))
    }

  }


  render() {
    debugger
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
                    return <CheckinIndexItem checkin={checkin} createLike={this.props.createLike}/>
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
                <p className='individual-stat'>
                  <span className='number'>
                    {store.getState().session.currentUser.checkins.length}
                  </span>
                  <p className='title' >Total</p>
                </p>
                <p className='individual-stat'>
                  <span className='number'>
                    {store.getState().session.currentUser.unique_checkins}
                  </span>
                  <p className='title' >Unique</p>
                </p>
              </div>
              <div id='pagination-buttons'>
                <button onClick={this.getPrevCheckins.bind(this)}>Previous</button>
                <button onClick={this.getNextCheckins.bind(this)}>More</button>
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
