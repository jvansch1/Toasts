import React from 'react';
import HeaderContainer from '../header/header_container';
import { hashHistory } from 'react-router'

class BeerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      style: null,
      brewery_id: null,
      ABV: "",
      IBU: null,
      imageUrl: '',
      imageFile:'',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("beer[name]", this.state.name)
    formData.append("beer[style]", this.state.style)
    formData.append("beer[brewery_id]", this.state.brewery_id)
    formData.append("beer[ABV]", this.state.ABV)
    formData.append("beer[IBU]", this.state.IBU)
    formData.append("beer[image]", this.state.imageFile)
    this.props.createBeer(formData).then((beer) => {
      $('.success-popup').attr("hidden", false)
      const hideDiv = function() {
        $('.success-popup').attr("hidden", true)
        hashHistory.push(`beers/${beer.beer.id}`)
      }
      setTimeout(hideDiv, 750)
      return null;
    });
  }

  update(property) {
    return e => {
      this.setState({[property]: e.target.value});
    };
  }

  componentDidMount() {
    this.props.fetchBreweries();
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

  renderNameCheck() {
    if (this.state.name.length > 0) {
      return (
        <i className="fa fa-check-circle-o" aria-hidden="true"></i>
      )
    }
  }

  renderABVCheck() {
    if (this.state.ABV.length > 0) {
      return (
        <i className="fa fa-check-circle-o" aria-hidden="true"></i>
      )
    }
  }

  renderIBUCheck() {
    if (this.state.IBU) {
      return (
        <i className="fa fa-check-circle-o" aria-hidden="true"></i>
      )
    }
  }

  renderStyleCheck() {
    if (this.state.style) {
      return (
        <i className="fa fa-check-circle-o" aria-hidden="true"></i>
      )
    }
  }

  renderBreweryCheck() {
    if (this.state.brewery_id) {
      return (
        <i className="fa fa-check-circle-o" aria-hidden="true"></i>
      )
    }
  }

  render() {
    return (
      <div id='form-div'>
        <HeaderContainer />
        <div className='form-container'>
          <div className='success-popup' hidden='true'>
            Successfully created!
          </div>
          <form id='beer-form' onSubmit={this.handleSubmit.bind(this)}>
            <span id='beer-form-title'>
              Add A Beer
            </span>
            <div className='beer-input-container'>
              <p>
                Beer Name
              </p>
              <span className='input-check-container'>
                <input className='beer-input' placeholder='Beer Name' onChange={this.update('name')}type="text"/>
                {this.renderNameCheck()}
              </span>
            </div>
            <div className='beer-input-container'>
              <p>
                Style
              </p>
              <span className='input-check-container'>
                <select className='beer-input' onChange={this.update('style')} value={this.state.style || "Choose a style"}>
                  <option disabled>Choose a style</option>
                  {
                    window.styles.styles.map((style, idx) => {
                      return <option value={style} key={idx}>{style}</option>;
                      })
                    }
                  </select>
                  {this.renderStyleCheck()}
              </span>
            </div>
            <div className='beer-input-container'>
              <p>
                Brewery
              </p>
              <span className='input-check-container'>
                <select className='beer-input' onChange={this.update('brewery_id')} value={this.state.brewery_id || 'Choose a brewery'}>
                  <option disabled>Pick a Brewery</option>
                  {
                    this.props.breweries.map((brewery, idx) => {
                      return <option value={brewery.id} key={idx}>{brewery.name}</option>;
                      })
                    }
                  </select>
                  {this.renderBreweryCheck()}
              </span>
            </div>
            <div className='beer-input-container'>
              <p>
                ABV
              </p>
              <span className='input-check-container'>
                <input className='beer-input' placeholder='ABV'onChange={this.update('ABV')} type='text'/>
                {this.renderABVCheck()}
              </span>
            </div>

            <div className='beer-input-container'>
              <p>
                IBU
              </p>
              <span className='input-check-container'>
                <input className='beer-input' placeholder='IBU' onChange={this.update('IBU')} type='number'/>
                {this.renderIBUCheck()}
              </span>
            </div>
            <div className='beer-input-container'>
            </div>
            <div className='beer-input-container'>
              <p>
                Upload Picture
              </p>
              <div id='beer-image-field'>
                <input type='file' id='brewery-picture-input' onChange={this.addFile.bind(this)}/>
                <img src={this.state.imageUrl} id='pending-beer-image'/>
              </div>
              <input id='beer-form-button' type="submit" value="Add New Beer" />
            </div>
            </form>
        </div>
      </div>
    );
  }
}

export default BeerForm;
