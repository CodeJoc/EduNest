import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import LandingPage from './pages/LandingPage';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CourseList from "./pages/CourseList";
import CourseDetails from "./pages/CourseDetails";
import Profile from "./pages/Profile";
import CreateCourse from "./pages/CreateCourse";
import PrivateRoute from "./components/PrivateRoute";
import LandingNavbar from "./components/LandingNavbar";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <LandingNavbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute><Dashboard /></PrivateRoute>}
        />
        <Route
          path="/admin"
          element={<PrivateRoute><AdminPanel /></PrivateRoute>}
        />
        <Route
          path="/courses"
          element={<PrivateRoute><CourseList /></PrivateRoute>}
        />
        <Route
          path="/course/:id"
          element={<PrivateRoute><CourseDetails /></PrivateRoute>}
        />
        <Route
          path="/profile"
          element={<PrivateRoute><Profile /></PrivateRoute>}
        />
        <Route
          path="/create-course"
          element={<PrivateRoute><CreateCourse /></PrivateRoute>}
        />
      </Routes>
    </Router>
  );
}

export default App;

