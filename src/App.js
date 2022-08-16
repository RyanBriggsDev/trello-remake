import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <div className="content-container">
          <Nav />
            {/* Content */}
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
     </>
    );
}

export default App; 