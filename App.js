import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashbord';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Dashboard</Link> | <Link to="/students">Students</Link> | <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/register" element={<StudentForm />} />
        <Route path="/students/:id" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;