import {
    BrowserRouter,
    Link
  } from 'react-router-dom';
  
  import '../styles/footer.css';
  
  function Footer() {
    return (
      <div className="footer">
        <footer>
          <BrowserRouter>
            <ul>
            <li><Link to="/resume-2022">Home</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            </ul>
          </BrowserRouter>
        </footer>
        <div className='copyright'>
            ByTanyaR copyright 2022
        </div>
      </div>
    );
  }
  
  export default Footer;