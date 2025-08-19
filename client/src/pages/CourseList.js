import React from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa"; 
import "../CSS/CourseList.css";

const courseList = [
  { _id: "1", title: "React for Beginners", description: "Learn React from scratch.", icon: <FaReact color="#62dafb" size={36} /> },
  { _id: "2", title: "Node.js Essentials", description: "Backend with Node.js.", icon: <FaNodeJs color="#70c141" size={36} /> },
  { _id: "3", title: "HTML & CSS", description: "Basics of web development.", icon: <FaHtml5 color="#e54d26" size={36} /> },
];

export default function CourseList() {
  const navigate = useNavigate();

  const enroll = async (id) => {
    alert("Enrolled in course " + id );
  };

  return (
    <div className="course-list-bg">
      <div className="course-list-header">
        {/* <span className="logo-main">EduNest</span> */}
        <h2 className="course-list-title">All Courses</h2>
      </div>
      <div className="vertical-course-list">
        {courseList.map((course) => (
          <div key={course._id} className="vertical-course-item">
            <div className="course-icon-box">{course.icon}</div>
            <div>
              <h4 className="vertical-course-name">{course.title}</h4>
              <p className="vertical-course-desc">{course.description}</p>
            </div>
            <div className="vertical-course-btns">
              <button onClick={() => enroll(course._id)}>Enroll</button>
              <button onClick={() => navigate(`/course/${course._id}`)}>Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
