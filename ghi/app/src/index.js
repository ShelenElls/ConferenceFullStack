import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// async function loadShoes() {
//   const response = await fetch('http://localhost:8080/api/shoe/');
//   if (response.ok) {
//     const data = await response.json();
//     console.log("awork", data)
//     root.render(
//       <React.StrictMode>
//         <App shoes={data.shoes} />
//       </React.StrictMode>
      
//     );
//     console.log("hi mom")
//   } else {
//     console.error(response);
//   }
// }
// loadShoes();