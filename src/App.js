import './App.css';
import MuiCard from './components/MuiCard';
import PortfolioHome from './components/PortfolioHome';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" 
        element={<MuiCard 
          name='Shazia Badur' 
          email='shazbadur@gmail.com' 
          githubURL='github.com/shaziabadur' 
          linkedInURL="linkedin.com/in/shazia-badur"/>} 
        />

      <Route path="/portfolios" element={<PortfolioHome />} />
        
     </Routes>

    </Router>
    </>
    );
}

export default App;
