import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ModulePage from './pages/ModulePage';
import TutorialPage from './pages/TutorialPage';
import IndexPage from './pages/IndexPage';
import ClassesPage from './pages/ClassesPage';
import InstructorsPage from './pages/InstructorsPage';
import SavedCoursesPage from './pages/SavedCoursesPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated in session
    const authenticated = sessionStorage.getItem('authenticated') === 'true';
    setIsAuthenticated(authenticated);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('authenticated');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/index" element={<IndexPage />} />
          <Route path="/saved-courses" element={<SavedCoursesPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/instructors" element={<InstructorsPage />} />
          <Route path="/module/:moduleId" element={<ModulePage />} />
          <Route path="/tutorial/:tutorialId" element={<TutorialPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
