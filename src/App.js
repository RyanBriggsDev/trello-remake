import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PortfolioRedirect from "./redirects/PortfolioRedirect";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <div className="content-container">
          <Nav />
            {/* Content */}
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/portfolioRe' element={<PortfolioRedirect />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
     </>
    );
}

export default App; 