import React from 'react';
import HeaderContainer from '../header/header_container';
import { hashHistory } from 'react-router'

class BeerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      style: "",
      brewery_id: null,
      ABV: "",
      IBU: null,
      imageUrl: '',
      imageFile:''
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
    this.props.createBeer(formData).then(() => hashHistory.push('/home'));
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

  render() {
    return (
      <div>
        <HeaderContainer />

        <div className='form-container'>
          <form id='beer-form' onSubmit={this.handleSubmit.bind(this)}>
            <span id='beer-form-title'>
              Add A Beer
            </span>
            <br />
              <p>
                Beer Name
              </p>
              <input className='beer-input' placeholder='Beer Name' onChange={this.update('name')}type="text"/>

            <p>
              Style
            </p>
            <select className='beer-input' onChange={this.update('style')}>
              <option disabled selected>Pick a style</option>
              {
                window.styles.styles.map((style, idx) => {
                  return <option value={style} key={idx}>{style}</option>;
                  })
                }
              </select>



            <p>
              Brewery
            </p>
            <select className='beer-input' onChange={this.update('brewery_id')}>
              <option disabled selected>Pick a Brewery</option>
              {
                this.props.breweries.map((brewery, idx) => {
                  return <option value={brewery.id} key={idx}>{brewery.name}</option>;
                })
              }
            </select>


            <p>
              ABV
            </p>
            <input className='beer-input' placeholder='ABV'onChange={this.update('ABV')} type='text'/>



            <p>
              IBU
            </p>
            <input className='beer-input' placeholder='IBU' onChange={this.update('IBU')} type='number'/>

              <p>
                Upload Picture
              </p>
                <div id='beer-image-field'>
                  <input type='file' id='brewery-picture-input' onChange={this.addFile.bind(this)}/>
                  <img src={this.state.imageUrl} id='pending-beer-image'/>
                </div>
              <input id='beer-form-button' type="submit" value="Add New Beer" />
            </form>
        </div>
      </div>
    );
  }
}

export default BeerForm;
