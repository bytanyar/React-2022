import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
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
        <Navbar />
      </div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/resume-2022" element={<Home />} />
            <Route exact path="/resume-2022/resume" element={<Resume />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <div className='footer-container'>
        <Footer />
      </div>
    </div>
  );
}

export default App;