import {
  BrowserRouter,
  Link
} from 'react-router-dom';

import '../styles/navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <BrowserRouter>
          <ul>
            <li><Link to="/2022">Home</Link></li>
            <li><Link to="/cats">Cats</Link></li>
          </ul>
        </BrowserRouter>
      </nav>
    </div>
  );
}

export default Navbar;