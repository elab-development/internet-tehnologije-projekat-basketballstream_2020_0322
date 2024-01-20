import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import DrugaStrana from './drugastrana'; // Import the new page

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/drugastrana" element={<DrugaStrana />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

