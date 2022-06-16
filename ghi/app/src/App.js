import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
// import ShoesList from './ShoesList';
import ShoesForm from './ShoesForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="shoe" element={<ShoesList shoes={shoe} />} /> */}
          <Route path="shoe/new" element={<ShoesForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
