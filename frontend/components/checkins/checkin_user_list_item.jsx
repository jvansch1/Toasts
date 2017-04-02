import React from 'react';

class CheckinUserListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBeer(this.props.beerId)
  }

  render() {
    return (
      <div>
        {this.props.checkin.id}
      </div>
    )
  }
}

export default CheckinUserListItem;
