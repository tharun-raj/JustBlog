import './App.css';
import Navbar from './Navbar';
import Home from './home';
import Create from './create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './blogDetails';
import PageNotFound from './PageNotFound';

function App() { 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={ <Create /> } />
            <Route path='/blogs/:id' element={ <BlogDetails /> } />
            <Route path='*' element={ <PageNotFound /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;