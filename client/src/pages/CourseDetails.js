import React from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/CourseDetails.css';

const lectureData = {
  1: [
    { title: "Lecture 1: Introduction to React", videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0" },
    { title: "Lecture 2: Components & Props", videoUrl: "https://www.youtube.com/embed/MhkGQAoc7bc" },
  ],
  2: [
    { title: "Lecture 1: Intro to Node.js", videoUrl: "https://www.youtube.com/embed/TlB_eWDSMt4" },
    { title: "Lecture 2: Express.js Basics", videoUrl: "https://www.youtube.com/embed/L72fhGm1tfE" },
  ],
  3: [
    { title: "Lecture 1: HTML Basics", videoUrl: "https://www.youtube.com/embed/pQN-pnXPaVg" },
    { title: "Lecture 2: CSS Styling", videoUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc" },
  ],
};

export default function CourseDetails() {
  const { id } = useParams();
  const lectures = lectureData[id] || [];

  // Optionally set a pseudo course name for demo
  const courseNames = {
    1: "React for Beginners",
    2: "Node.js Essentials",
    3: "HTML & CSS",
  };
  const courseTitle = courseNames[id] || "Course Lectures";

  return (
    <div className="course-details-bg">
      <div className="course-details-container">
        <header className="course-banner">
          <h2 className="course-title">{courseTitle}</h2>
          <p className="course-subtitle">
            {lectures.length} {lectures.length === 1 ? "Lecture" : "Lectures"}
          </p>
        </header>

        <section>
          {lectures.map((lecture, index) => (
            <div key={index} className="lecture-card">
              <div className="lecture-title-row">
                <div className="lecture-number">Lecture {index + 1}</div>
                <div className="lecture-title">{lecture.title}</div>
              </div>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="376"
                  src={lecture.videoUrl}
                  title={lecture.title}
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
