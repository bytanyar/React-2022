import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Layout from './components/Layout';

import './styles/app.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/resume" element={<Resume />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
