import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import Gen1 from './pages/Gen1';
import Gen2 from './pages/Gen2';
import Gen3 from './pages/Gen3';
import Contact from './pages/Contacto';
import UserInfo from './components/UserInfo';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Header/>  
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gen1" element={<Gen1 />} />
        <Route path="/gen2" element={<Gen2 />} />
        <Route path="/gen3" element={<Gen3 />} />
        <Route path="/contact" element={<Contact />}>
          <Route path=":username" element={<UserInfo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
