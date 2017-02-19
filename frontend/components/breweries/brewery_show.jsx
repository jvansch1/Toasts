import React from 'react';
import HeaderContainer from '../header/header_container';

class BreweryShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  componentDidMount() {
    this.state = this.props.fetchBrewery(this.props.params.breweryId)
  }

  componentWillReceiveProps(newProps) {
    this.state = newProps.brewery
  }




  render() {
    if (this.props.brewery === undefined) return null;
      return (
        <div>
          <HeaderContainer />

          <section className='breweryShow'>
            <div id='brewery-name-flex'>
              <img className='brewery-image' src={this.props.brewery.image_url} />
              <span className='brewery-show-name'>

                {this.props.brewery.name}

              </span>
                <span className='brewery-show-location'>

                  {this.props.brewery.city}, {this.props.brewery.state}
                </span>
            </div>

            <div className='brewery-checkin-stats'>
              <span className='checkin-count'>
                <p className='first'>
                  Checkins: 100
                </p>
                <p className='second'>
                  &nbsp;Unique: 100
                </p>
              </span>
            </div>

            <ul id='brewery-stats'>
              <li>Rating</li>
              <li>10000 ratings</li>
              <li>80 beers</li>
              <li>Added on 07/03/2012</li>
            </ul>
          </section>
        </div>
      )
    }
}

export default BreweryShow;
