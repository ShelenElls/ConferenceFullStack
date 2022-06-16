import React from 'react';
import { Link } from 'react-router-dom';



class ShoesList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        manufacturer: '',
        model_name: '',
        color: '',
        picture_url: '',
        bin: '' 
      };
    }
  
    async componentDidMount() {
      const url = 'http://localhost:8080/api/shoe/';
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log("aftercomponent:", data)
        this.setState({ shoe: data.shoe });
      }
    }
    render(){
    return (
        <div className="col">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>List of Shoes</th>
                    </tr>
                </thead>
                    <tbody>
                        {props.shoe.map(shoe => {
                                return (
                                    <tr required name="location" id="location" key={shoe.id}>
                                        <img src={shoe.picture_url} className="card-img-top" />
                                        <td>{shoe.manufacturer}</td>
                                        <td>{shoe.modelName}</td>
                                        <td>{shoe.color}</td>
                                        <td>{shoe.bin}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
            </table>
        </div>
    );
}
}
export default ShoesList;

// {this.state.states.map(state => {
//     return (
//         <option key={state.abbreviation} value={state.abbreviation}>
//             {state.name}
//         </option>
//     );
// })}