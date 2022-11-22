



import Home from './pages/Home'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App; 