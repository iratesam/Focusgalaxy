import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import './App.css';
import Clock from './components/Clock';
import DailyPlanner from './components/DailyPlanner';
import StudyTimetable from './components/StudyTimetable';
import FeynmanTechnique from './components/FeynmanTechnique';
import AuthPage from './components/AuthPage';
import Progress from './components/Progress';
import ProtectedRoute from './components/ProtectedRoute';

function Home({ user }) {
  return (
    <div className="home">
      <div className="clock-container">
        <Clock />
      </div>
      <div className="cards">
        <Link to="/daily" className="card">
          <h3>Daily Planner</h3>
          <p>Organize your day like a starship captain.</p>
        </Link>
        <Link to="/timetable" className="card">
          <h3>Study Timetable</h3>
          <p>Chart your learning across the galaxy.</p>
        </Link>
        <Link to="/feynman" className="card">
          <h3>Feynman Technique</h3>
          <p>Master concepts at warp speed.</p>
        </Link>
      </div>
      {user && (
        <div className="nav-buttons">
          <Link to="/progress" className="progress-btn">
            Progress
          </Link>
          <button onClick={() => signOut(auth)} className="logout-btn">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
                <Home user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/daily"
            element={
              <ProtectedRoute user={user}>
                <DailyPlanner user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/timetable"
            element={
              <ProtectedRoute user={user}>
                <StudyTimetable user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/feynman"
            element={
              <ProtectedRoute user={user}>
                <FeynmanTechnique user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/progress"
            element={
              <ProtectedRoute user={user}>
                <Progress user={user} />
              </ProtectedRoute>
            }
          />
        </Routes>
        <div className="footer">Iratesam</div>
      </div>
    </Router>
  );
}

export default App;