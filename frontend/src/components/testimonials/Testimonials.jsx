import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
        id: 1,
        name: "John",
        position: "Student",
        message:
        "EduNest has completely changed the way I study. The lessons are simple, clear, and really fun to follow.",
        image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: 2,
        name: "Priya",
        position: "Student",
        message:
        "I love how interactive the courses are. The videos helped me remember concepts much better.",
        image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: 3,
        name: "Charles",
        position: "Student",
        message:
        "The platform feels like a personal tutor. I can learn at my own pace and revisit lessons whenever I need.",
        image:
        "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
        id: 4,
        name: "Neha",
        position: "Student",
        message:
        "EduNest makes learning exciting. The colorful lessons and easy explanations keep me engaged every day.",
        image:
        "https://randomuser.me/api/portraits/women/36.jpg",
    },
    {
        id: 5,
        name: "Rohan",
        position: "Student",
        message:
        "The best part is the variety of activities. I actually look forward to studying because it never feels boring.",
        image:
        "https://randomuser.me/api/portraits/men/47.jpg",
    },
    {
        id: 6,
        name: "Ananya",
        position: "Student",
        message:
        "EduNest has helped me improve so much in a short time. I feel more confident and motivated to learn new things.",
        image:
        "https://randomuser.me/api/portraits/women/50.jpg",
    },
  ];
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;