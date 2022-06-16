import React from 'react';

class ShoesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        manufacturer: '',
        model_name: '',
        color: '',
        picture_url: '',
        bin: '',
        bins: []
    };
    this.binUrl = 'http://localhost:8100/api/bins/';
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
    this.handleChangemodelName = this.handleChangemodelName.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangepictureUrl = this.handleChangepictureUrl.bind(this);
    this.handleChangeBins = this.handleChangeBins.bind(this);
  }

  async componentDidMount() {
    const shoeUrl = 'http://localhost:8080/api/shoe/';

    const shoeResponse = await fetch(shoeUrl);

    if (shoeResponse.ok) {
      const data = await shoeResponse.json();
      this.setState({ shoes: data.shoes });
      console.log("responseok", data)
    }
    const binResponse =await fetch(this.binUrl);
    if(binResponse.ok) {
      const dataBin = await binResponse.json();
      this.setState({bins: dataBin.bins})
    }
    }

  async handleSubmit(event) {
    event.preventDefault();
    // const data = {...this.state};
    // data.model_name = data.modelName;
    // data.picture_url = data.pictureUrl;
    // data.bins = data.bin;
    // delete data.pictureUrl;
    // delete data.modelName;
    // delete data.bin;
    // delete data.shoes;

    const {
      manufacturer, 
      color, 
      modelName : model_name, 
      pictureUrl : picture_url, 
      bin : bins
    } = this.state
    
    const data = {
      manufacturer,
      color, 
      model_name, 
      picture_url,
      bins, 
    };


    const shoeUrl = 'http://localhost:8080/api/shoe/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
   
    const response = await fetch(shoeUrl, fetchConfig);
    if (response.ok) {
      const newShoe = await response.json();
      console.log(newShoe);
      this.setState({
        manufacturer: '',
        model_name: '',
        color: '',
        picture_url: '',
        bin: ''
      });
    }
  }

  handleChangeManufacturer(event) {
    const value = event.target.value;
    this.setState({ manufacturer: value });
  }

  handleChangemodelName(event) {
    const value = event.target.value;
    this.setState({ modelName: value });
  }

  handleChangeColor(event) {
    const value = event.target.value;
    this.setState({ color: value });
  }

  handleChangepictureUrl(event) {
    const value = event.target.value;
    this.setState({ pictureUrl: value });
  }
  
  handleChangeBins(event) {
    const value = event.target.value;
    this.setState({ bin: value });
  }


  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new shoe!</h1>
            <form onSubmit={this.handleSubmit} id="create-shoe-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeManufacturer} placeholder="Name" required type="text" name="manufacturer" id="manufacturer" className="form-control" />
                <label htmlFor="name">Name of Manufacturer</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangemodelName} placeholder="modelName" required type="text" name="model_name" id="model_name" className="form-control" />
                <label htmlFor="starts">Name of Shoe Model</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeColor} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                <label htmlFor="ends">Color of Shoe</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangepictureUrl} placeholder="picture_url" required type="UPLOAD_URL" name="picture_url" id="picture_url" className="form-control" />
                <label htmlFor="ends">Upload a photo URL</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleChangeBins} required name="bins" id="bins" className="form-select">
                  <option value="">Choose a bin location</option>
                  {this.state.bins.map(bin => {
                    return (
                      <option key={bin.id} value={bin.href}>{bin.closet_name}</option>
                    )
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoesForm;

//               <div className="mb-3">
{/* <label htmlFor="description">Description</label>
<textarea onChange={this.handleChangeDescription} className="form-control" id="description" rows="3" name="description" className="form-control"></textarea>
</div> */}