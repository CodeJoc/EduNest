import React, { useEffect, useState } from "react";
import API from "../utils/api";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [edu, setEdu] = useState({ school: "", degree: "", years: "" });
  const [exp, setExp] = useState({ company: "", title: "", years: "" });

  useEffect(() => {
    API.get("/user/profile").then((res) => setUser(res.data));
  }, []);

  const addEducation = () => {
    API.post("/user/education", edu).then(() =>
      window.location.reload()
    );
  };

  const addExperience = () => {
    API.post("/user/experience", exp).then(() =>
      window.location.reload()
    );
  };

  return user ? (
    <div className="p-4">
      <h2>Profile: {user.name}</h2>
      <p>Email: {user.email}</p>

      <h4>Education:</h4>
      {user.education.map((e, i) => (
        <p key={i}>{e.degree} at {e.school} ({e.years})</p>
      ))}
      <input placeholder="School" onChange={(e) => setEdu({ ...edu, school: e.target.value })} />
      <input placeholder="Degree" onChange={(e) => setEdu({ ...edu, degree: e.target.value })} />
      <input placeholder="Years" onChange={(e) => setEdu({ ...edu, years: e.target.value })} />
      <button onClick={addEducation}>Add Education</button>

      <h4>Experience:</h4>
      {user.experience.map((e, i) => (
        <p key={i}>{e.title} at {e.company} ({e.years})</p>
      ))}
      <input placeholder="Company" onChange={(e) => setExp({ ...exp, company: e.target.value })} />
      <input placeholder="Title" onChange={(e) => setExp({ ...exp, title: e.target.value })} />
      <input placeholder="Years" onChange={(e) => setExp({ ...exp, years: e.target.value })} />
      <button onClick={addExperience}>Add Experience</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
