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

  return (
    <div className="course-details">
      <h2>Course Lectures</h2>
      {lectures.map((lecture, index) => (
        <div key={index} className="lecture">
          <h4>{lecture.title}</h4>
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src={lecture.videoUrl}
              title={lecture.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}
