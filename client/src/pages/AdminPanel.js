import React, { useState } from 'react';
import '../CSS/AdminPanel.css';

export default function AdminPanel() {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [courses, setCourses] = useState([]);

  const handleCreateCourse = (e) => {
    e.preventDefault();
    const newCourse = { courseName, description };
    setCourses([...courses, newCourse]);
    setCourseName('');
    setDescription('');
    alert("Course created successfully!");
  };

  return (
    <div className="admin-panel">
      <h2>Admin Dashboard</h2>

      <form className="create-course-form" onSubmit={handleCreateCourse}>
        <input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
        <textarea
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Create Course</button>
      </form>

      <h3>Created Courses</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <strong>{course.courseName}</strong>: {course.description}
          </li>
        ))}
      </ul>

      <div className="user-stats">
        <h3>Total Users: 20 (dummy count)</h3>
      </div>
    </div>
  );
}
