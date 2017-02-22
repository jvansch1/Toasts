import React from 'react';
import HeaderContainer from '../header/header_container';
import CheckinIndexItem from './checkin_index_item';

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCheckins();
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
                    return <CheckinIndexItem checkin={checkin}/>
                  })
                }
              </ul>
            </div>

            <div id='checkin-index-right'>

            </div>
          </div>
        </div>
      )
  }
}

export default CheckinIndex;
