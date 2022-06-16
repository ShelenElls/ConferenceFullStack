import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ShoesList from './ShoesList';

function App({shoe}) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="shoe" element={<ShoesList shoes={shoe} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
