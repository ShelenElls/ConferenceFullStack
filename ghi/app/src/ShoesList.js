// function ShoesList({shoe}) {
//     return (
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Shoes</th>
//           </tr>
//         </thead>
//         <tbody>
//           {shoe.map(shoes => {
//             return (
//               <tr key={shoes.id}>
//                 <td>{ shoes.model_name }</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     );
//   }
  
//   export default ShoesList;

























// import React from 'react';

// function ShoesList(props) {
//     return (
//         <div className="col">
//             {props.shoes.map(data => {
//                 const shoe = data.shoe;
//                 return (
//                     <div key={shoe.id} className="card mb-3 shadow">
//                         <img src={shoe.picture_url} className="card-img-top" />
//                         <div className="card-body">
//                             <h5 className="card-title">{shoe.model_name}</h5>
//                             <h6 className="card-subtitle mb-2 text-muted">
//                                 {shoe.manufacturer}
//                             </h6>
//                             <h6 className="card-subtitle mb-2 text-muted">
//                                 {shoe.color}
//                             </h6>
//                         </div>
//                         <h6 className="card-subtitle mb-2 text-muted">
//                             {shoe.bins}
//                         </h6>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }
// class ListView extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             shoeColumns: [[], []],
//         };
//     }
//     async componentDidMount() {
//         const url = 'http://localhost:8080/api/shoe/';

//         try {
//             const response = await fetch(url);
//             if (response.ok) {
//                 const data = await response.json();
//                 const requests = [];
//                 for (let shoe of data.shoes) {
//                     const detailUrl = `http://localhost:8080${shoe.id}`;
//                     requests.push(fetch(detailUrl));
//                 }
//                 console.log("shoelist", data)
//                 const responses = await Promise.all(requests);
//                 console.log(responses)
//                 const shoeColumns = [[], []];
//                 let i = 0;
//                 for (const shoeResponse of responses) {
//                     if (shoeResponse.ok) {
//                         const details = await shoeResponse.json();
//                         shoeColumns[i].push(details);
//                         i = i + 1;
//                         if (i > 2) {
//                             i = 0;
//                         }
//                     } else {
//                         console.error(shoeResponse);
//                     }
//                 }

//                 // Set the state to the new list of three lists of
//                 // conferences
//                 this.setState({ shoeColumns: shoeColumns });
//             } console.log("afterfor")
//         } catch (e) {
//             console.error(e);
//         }
//     }
//         render() {
//             return (
//                 <>
//                     <div className="px-4 py-5 my-5 mt-0 text-center bg-info">
//                         <h1 className="display-5 fw-bold">Shoes List!</h1>
//                         <div className="col-lg-6 mx-auto">
//                             <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//                             </div>
//                         </div>
//                     </div>
//                     <div className="container">
//                         <h2>Currently in your Bins</h2>
//                         <div className="row">
//                             {this.state.shoeColumns.map((s, index) => {
//                                 return (
//                                     <ShoeColumns key={index} list={s} />
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </>
//             );
//         }
// }

// export default ListView;





            
            // const requests = [];
// for (let shoe of data.shoes) {
// const detailUrl = `http://localhost:8080${shoe.href}`;
// requests.push(fetch(detailUrl));
// }
// const responses = await Promise.all(requests);
// const listShoes = [[], []];
// let i = 0;
{/* <Link to="/attendees/new" className="btn btn-primary btn-lg px-4 gap-3">Attend a conference</Link> */}
// for (const shoesResponse of responses) {
// if (shoesResponse.ok) {
// const details = await shoesResponse.json();
// listShoes[i].push(details);
// i = i + 1;
// if (i > 2) {
// i = 0;
// }
// } else {
// console.error(shoesResponse);
// }
// }
// // Set the state to the new list of three lists of
// // conferences
// this.setState({listShoes: listShoes});
// }
// const binResponse = await fetch(this.binUrl);
// if (binResponse.ok) {
// const dataBin = await binResponse.json();
// this.setState({ bins: dataBin.bins })
// }

// <div className="container">
// <h2>Current Shoes!</h2>
// <div className="row">
// {this.state.listShoes.map((shoesList, index) => {
// return (
// <ShoesList key={index} list={shoesList} />
// );
// })}
// </div>
// </div>

