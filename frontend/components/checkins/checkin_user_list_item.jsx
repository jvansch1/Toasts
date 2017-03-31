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
        {console.log(this.props.checkin)}
        {this.props.checkin.id}
      </div>
    )
  }
}

export default CheckinUserListItem;
