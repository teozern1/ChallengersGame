import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game-page" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;