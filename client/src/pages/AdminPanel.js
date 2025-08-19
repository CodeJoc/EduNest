import React, { useState } from 'react';
import '../CSS/AdminPanel.css';

const demoCourses = [
  { courseName: "React for Beginners", description: "Learn React from scratch." },
  { courseName: "Node.js Essentials", description: "Backend with Node.js." },
  { courseName: "HTML & CSS", description: "Basics of web development." },
];

export default function AdminPanel() {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [courses, setCourses] = useState(demoCourses);

  const handleCreateCourse = (e) => {
    e.preventDefault();
    const newCourse = { courseName, description };
    setCourses(prev => [...prev, newCourse]);
    setCourseName('');
    setDescription('');
    alert("Course created successfully!");
  };

  return (
    <div className="admin-panel-bg-alt">
      <div className="admin-panel-top">
        <h2 className="admin-title-bright">Admin Dashboard</h2>
        <form className="create-course-form-alt" onSubmit={handleCreateCourse}>
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
      </div>

      <section className="courses-bubble-section">
        <h3 className="courses-bubble-title">All Courses</h3>
        <div className="courses-bubble-list">
          {courses.length === 0 ? (
            <div className="empty-state-bright">No courses created yet!</div>
          ) : (
            courses.map((course, idx) => (
              <div key={idx} className="bubble-course">
                <div className="bubble-initial">{course.courseName[0]?.toUpperCase() || "C"}</div>
                <div>
                  <div className="bubble-course-name">{course.courseName}</div>
                  <div className="bubble-course-desc">{course.description}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <div className="user-stats-alt">
        <h3>
          Total Users: <span style={{ color: "#127bc7" }}>20</span>
        </h3>
      </div>
    </div>
  );
}
