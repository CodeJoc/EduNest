import React, { useEffect, useState } from "react";
import API from "../utils/api";
import "../CSS/Profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [edu, setEdu] = useState({ school: "", degree: "", years: "" });
  const [exp, setExp] = useState({ company: "", title: "", years: "" });
  const [addingEdu, setAddingEdu] = useState(false);
  const [addingExp, setAddingExp] = useState(false);

  useEffect(() => {
    API.get("/user/profile").then((res) => setUser(res.data));
  }, []);

  const addEducation = async () => {
    await API.post("/user/education", edu);
    setEdu({ school: "", degree: "", years: "" });
    API.get("/user/profile").then((res) => setUser(res.data));
    setAddingEdu(false);
  };

  const addExperience = async () => {
    await API.post("/user/experience", exp);
    setExp({ company: "", title: "", years: "" });
    API.get("/user/profile").then((res) => setUser(res.data));
    setAddingExp(false);
  };

  if (!user) {
    return <p className="profile-loading">Loading...</p>;
  }

  return (
    <div className="profile-open-bg">
      <header className="profile-header-plain">
        <div className="profile-initials-open">
          {user.name
            ?.split(" ")
            .map((n) => n[0]?.toUpperCase())
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <h2 className="profile-name-plain">{user.name}</h2>
          <div className="profile-email-plain">{user.email}</div>
        </div>
      </header>

      <section className="profile-section-open">
        <div className="profile-sec-title">
          Education
          <button className="bare-btn" onClick={() => setAddingEdu((v) => !v)}>
            {addingEdu ? "Cancel" : "+ Add"}
          </button>
        </div>
        <ul>
          {user.education?.length > 0 ? (
            user.education.map((e, i) => (
              <li key={i}>
                <span className="degree">{e.degree}</span> at <span className="school">{e.school}</span>{" "}
                <span className="years">({e.years})</span>
              </li>
            ))
          ) : (
            <li className="muted">No education added yet.</li>
          )}
        </ul>
        {addingEdu && (
          <form
            className="inline-form"
            onSubmit={(e) => {
              e.preventDefault();
              addEducation();
            }}
          >
            <input
              placeholder="School"
              value={edu.school}
              onChange={(e) => setEdu({ ...edu, school: e.target.value })}
              required
            />
            <input
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => setEdu({ ...edu, degree: e.target.value })}
              required
            />
            <input
              placeholder="Years"
              value={edu.years}
              onChange={(e) => setEdu({ ...edu, years: e.target.value })}
              required
            />
            <button type="submit">Add</button>
          </form>
        )}
      </section>

      <section className="profile-section-open">
        <div className="profile-sec-title">
          Experience
          <button className="bare-btn" onClick={() => setAddingExp((v) => !v)}>
            {addingExp ? "Cancel" : "+ Add"}
          </button>
        </div>
        <ul>
          {user.experience?.length > 0 ? (
            user.experience.map((e, i) => (
              <li key={i}>
                <span className="degree">{e.title}</span> at <span className="school">{e.company}</span>{" "}
                <span className="years">({e.years})</span>
              </li>
            ))
          ) : (
            <li className="muted">No experience added yet.</li>
          )}
        </ul>
        {addingExp && (
          <form
            className="inline-form"
            onSubmit={(e) => {
              e.preventDefault();
              addExperience();
            }}
          >
            <input
              placeholder="Company"
              value={exp.company}
              onChange={e => setExp({ ...exp, company: e.target.value })}
              required
            />
            <input
              placeholder="Title"
              value={exp.title}
              onChange={e => setExp({ ...exp, title: e.target.value })}
              required
            />
            <input
              placeholder="Years"
              value={exp.years}
              onChange={e => setExp({ ...exp, years: e.target.value })}
              required
            />
            <button type="submit">Add</button>
          </form>
        )}
      </section>
    </div>
  );
}
