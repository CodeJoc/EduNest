import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/courses")
      .then((res) => setCourses(res.data))
      .catch(() => alert("Could not load courses"));
  }, []);

  const enroll = async (id) => {
    try {
      await API.post(`/courses/${id}/enroll`);
      alert("Enrolled successfully");
    } catch {
      alert("Enrollment failed");
    }
  };

  return (
    <div className="p-4">
      <h2>All Courses</h2>
      {courses.map((course) => (
        <div key={course._id} className="card mb-2 p-2">
          <h4>{course.title}</h4>
          <p>{course.description}</p>
          <button onClick={() => enroll(course._id)}>Enroll</button>
          <button onClick={() => navigate(`/course/${course._id}`)}>Details</button>
        </div>
      ))}
    </div>
  );
}
