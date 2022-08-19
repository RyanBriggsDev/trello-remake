import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PortfolioRedirect from "./redirects/PortfolioRedirect";
import Boards from './pages/Boards'
import ForgotPassword from "./pages/ForgotPassword";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateBoard from "./pages/CreateBoard";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <div className="content-container">
          <Nav />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/portfolioRe' element={<PortfolioRedirect />} />
              <Route path='/boards' element={<Boards />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
              <Route path='/create-board' element={<CreateBoard />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
     </>
    );
}

export default App; 