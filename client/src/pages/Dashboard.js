import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Dashboard.css';

const dummyCourses = [
  { id: 1, title: 'React for Beginners', description: 'Learn React from scratch' },
  { id: 2, title: 'Node.js Essentials', description: 'Backend with Node.js' },
  { id: 3, title: 'HTML & CSS', description: 'Basics of web development' },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-bg">
      <div className="dashboard-content">
        <h2>Welcome to Your Dashboard</h2>
        <div className="courses">
          {dummyCourses.map((course) => (
            <div
              key={course.id}
              className="course-card"
              onClick={() => navigate(`/course/${course.id}`)}
            >
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button>View Course</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
