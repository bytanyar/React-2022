import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Cats from './pages/Cats';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './styles/reset.css';
import './styles/app.css';

function App() {
  return (
    <div className="app">
      <div className='header-container'>
        <h1>ByTanyaR.com</h1>
        <div className='externals'>
          <a className='angular' href="https://bytanyar.com">Angular</a>
          <a className='git' target="_blank" href="https://github.com/bytanyar/resume-2022">GitHub</a>
        </div>
      </div>

      <Home />

      {/* <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/2022" element={<Home />} />
            <Route exact path="/cats" element={<Cats />} />
          </Routes>
        </Layout>
      </BrowserRouter> */}
      <div className='footer-container'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
