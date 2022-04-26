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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/resume">Resume</Link></li>
          </ul>
        </BrowserRouter>
      </nav>
    </div>
  );
}

export default Navbar;