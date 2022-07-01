import {BrowserRouter, Routes, Route} from 'react-router-dom'

import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
