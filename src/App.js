import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/home'
import Figuratif from './components/figuratif/figuratif';
import About from './components/about/about';
import Abstrait from './components/abstrait/abstrait';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/figuratif" element={<Figuratif />} />
        <Route path="/abstrait" element={<Abstrait />} />
        <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
