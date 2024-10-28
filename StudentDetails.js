import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function StudentDetails() {
  const { id } = useParams();
  const student = useSelector((state) =>
    state.students.students.find((s) => s.id === parseInt(id))
  );

  if (!student) return <p>Student not found.</p>;

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>
      <p>Class: {student.class}</p>
      <p>Address: {student.address}</p>
      <p>Phone: {student.phone}</p>
    </div>
  );
}

export default StudentDetails;