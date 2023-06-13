import { HashRouter, Link, Route, Routes } from 'react-router-dom';

import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <HashRouter>
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">YourChallenge</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/page1" className='pagelink nav-link active'>Product</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Download</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route exact path='/page1' element={<Product />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

