import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ModulePage from './pages/ModulePage';
import TutorialPage from './pages/TutorialPage';
import IndexPage from './pages/IndexPage';
import ClassesPage from './pages/ClassesPage';
import InstructorsPage from './pages/InstructorsPage';
import SavedCoursesPage from './pages/SavedCoursesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
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
