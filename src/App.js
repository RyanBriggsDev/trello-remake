import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { AuthProvider } from "./context/AuthContext";

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PortfolioRedirect from "./redirects/PortfolioRedirect";
import Boards from './pages/Boards'
import PasswordReset from "./pages/PasswordReset";
import Dashboard from "./pages/Dashboard";
import CreateBoard from "./pages/CreateBoard";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
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
              <Route path='/password-reset' element={<PasswordReset />} />
              <Route path='/create-board' element={<CreateBoard />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 