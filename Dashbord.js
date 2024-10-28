import React from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
  const studentCount = useSelector((state) => state.students.students.length);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total Students: {studentCount}</p>
    </div>
  );
}

export default Dashboard;