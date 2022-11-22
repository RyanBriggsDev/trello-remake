// layout
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import Home from './pages/Home'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <div className="layout">
          <Nav />
          <div className="content">
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App; 