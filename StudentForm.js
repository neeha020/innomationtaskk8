import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../redux/studentSlice';

function StudentForm() {
  const [student, setStudent] = useState({ name: '', email: '', age: '', class: '', address: '', phone: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent({ ...student, id: Date.now() }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="age" placeholder="Age" onChange={handleChange} required />
      <input name="class" placeholder="Class" onChange={handleChange} required />
      <input name="address" placeholder="Address" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}
export default StudentForm;