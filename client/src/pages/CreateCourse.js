import React, { useState } from "react";
import API from "../utils/api";

export default function CreateCourse() {
  const [course, setCourse] = useState({ title: "", description: "", videoUrls: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...course,
        videoUrls: course.videoUrls.split(",").map((url) => url.trim())
      };
      await API.post("/courses", payload);
      alert("Course created!");
    } catch (err) {
      alert("Error creating course");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2>Create New Course</h2>
      <input
        placeholder="Title"
        onChange={(e) => setCourse({ ...course, title: e.target.value })}
      />
      <input
        placeholder="Description"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <textarea
        placeholder="Video URLs (comma-separated)"
        onChange={(e) => setCourse({ ...course, videoUrls: e.target.value })}
      />
      <button type="submit">Create</button>
    </form>
  );
}
