import React from 'react';
import { hashHistory } from 'react-router';

const RATING_SCALE = [0,.25,.50,.75,1,1.25,1.50,1.75,2, 2.25,2.50, 2.75, 3, 3.25, 3.50, 3.75, 4, 4.25, 4.5, 4.75, 5];

class CheckinForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: "",
      rating: '0',
      beer_id: props.beer.id,
      imageFile: '',
      imageUrl: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("checkin[description]", this.state.description)
    formData.append("checkin[rating]", this.state.rating)
    formData.append("checkin[image]", this.state.imageFile)
    formData.append("checkin[beer_id]", this.state.beer_id)
    this.props.createCheckin(formData).then(() => hashHistory.push(`beers/${this.props.beer.id}`));
  }

  cancelSubmit(e) {
    e.preventDefault();
    hashHistory.push(`/beers/${this.props.beer.id}`)
  }

  update(property) {
    return e => {
      e.preventDefault();
      this.setState({[property]: e.target.value})
    }
  }

  addFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result })
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  clickFile() {
    document.getElementById('file-select').click()
  }

  resetSliderValue(e) {
    e.preventDefault()
    this.setState({rating: e.target.value})
  }

  renderImageUploadCheck() {
    if (this.state.imageUrl.length > 0) {
      return (
        <i id='image-check' className="fa fa-check-circle-o" aria-hidden="true"></i>
      )
    }
  }

  render() {
    return (
      <div height='100%' width='100%'>
        <div id='transparent-background'>
        </div>
        <div id='checkin-form-container'>
          <section id='checkin-title'>
            <span>
              Check-in
            </span>
            <i onClick={this.cancelSubmit.bind(this)} className="fa fa-times" aria-hidden="true"></i>
          </section>
          <form id='checkin-form' onSubmit={this.handleSubmit.bind(this)}>
          <p>Description: </p>
            <input className='checkin-input' placeholder='What did you think?' onChange={this.update('description')}type='text'/>
            <p>
              Rating
            </p>
            <section id='checkin-slider'>
              <input type='range' min='0' max='5' step='0.25' onChange={this.update('rating')} value={this.state.rating}/>
              <p id='checkin-rating'>
                {this.state.rating}
              </p>
            </section>
            <div id='file-select-container'>
              <i onClick={this.clickFile.bind(this)}className="fa fa-camera" aria-hidden="true"></i>
              {this.renderImageUploadCheck()}
              <input id='file-select' onChange={this.addFile.bind(this)} type='file'/>
            </div>
            <input onSubmit={this.handleSubmit.bind(this)} className='checkin-button' type='submit' value="Confirm"/>
        </form>
        </div>
      </div>
    )
  }
};

export default CheckinForm;
