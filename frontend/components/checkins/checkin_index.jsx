import React from 'react';
import ReactDOM from 'react-dom'
import HeaderContainer from '../header/header_container';
import CheckinIndexItem from './checkin_index_item';
import { Link } from 'react-router';
import Infinite from 'react-infinite'

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      limit: 4,
      offset: 0,
      mounted: false
    }
    this.checkIfBottom = this.checkIfBottom.bind(this)
    this.getPrevCheckins = this.getPrevCheckins.bind(this)
    this.getNextCheckins = this.getNextCheckins.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(this.checkIfBottom, 1000)
    this.setState({mounted: true})
    $('#previous-button').addClass('grey');
    this.props.fetchCheckins(this.state.limit, this.state.offset);
  }

  renderImage(src) {
    if (src === "default_beer_Image.png") {
      return <img className='top-beer-image' src='https://s3.amazonaws.com/untappd-dev/beers/default_beer_Image.png'/>
    }
    else {
      return <img className='top-beer-image' src={src} />
    }
  }


  topBeers() {
    return window.top_beers.top_beers.map(beerArray => {
      return (

          <li className='top-beer-index-item' key={beerArray[0].id}>
            {
              this.renderImage(beerArray[1])
            }
            <ul className='top-beer-name'>
              <Link to={`beers/${beerArray[0].id}`}>
                <li>
                  <h2 id='new-name'>{beerArray[0].name}</h2>
                </li>
              </Link>
              <Link to={`breweries/${beerArray[2].id}`}>
                <li id='top-beer-brewery-name'>
                  <h4 id='new-brewery'>{beerArray[2].name}</h4>
                </li>
              </Link>
            </ul>
          </li>
      )
    })
  }

  componentWillUnmount() {
    if(this.state.mounted) {
      clearInterval(this.interval)
      this.setState({mounted: false})

    }
  }

  shouldComponentUpdate() {
    if (!this.props.currentUser) {
      return false;
    }
    return true;
  }

  getNextCheckins(e) {
    if (!this.state.mounted) return null;
    if (window.checkin_count.checkins - this.state.offset <= 7) {
      $('#next-button').addClass('grey')
    }
    if (this.state.offset + 4 >= window.checkin_count.checkins) {
      return;
    }
    else {
      this.setState({offset: this.state.offset + 4}, () => {
        $('#previous-button').removeClass('grey');
        this.props.fetchSomeCheckins(this.state.limit, this.state.offset)
      });
      return;
    }
  }

  checkIfBottom() {
    if ((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight) {
      this.getNextCheckins();
    }
  }

  getPrevCheckins(e) {
    if (!this.state.mounted) return null;
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
                      return <CheckinIndexItem checkin={checkin} createLike={this.props.createLike} deleteLike={this.props.deleteLike} key={checkin.id} currentUser={this.props.currentUser}/>
                    })
                  }
              </ul>
            </div>

            <div id='checkin-index-right'>
              <div id='checkin-user-header'>
                <img id='user-home-image' src={this.props.currentUser.image_url} />
                <Link to={`users/${this.props.currentUser.id}`}>
                  <p id='user-home-name'>
                    {this.props.currentUser.username}
                  </p>
                </Link>
              </div>

              <div id='user-stat-list'>
                <section className='individual-stat'>
                  <span className='number'>
                    {this.props.currentUser.checkins.length}
                  </span>
                  <p className='title' >Total</p>
                </section>
                <section className='individual-stat'>
                  <span className='number'>
                    {this.props.currentUser.unique_checkins}
                  </span>
                  <p className='title' >Unique</p>
                </section>
              </div>
              <div id='pagination-buttons'>
                <p hidden>

                </p>
                <button hidden id='previous-button' onClick={this.getPrevCheckins}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                <button hidden id='next-button' onClick={this.getNextCheckins}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
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
