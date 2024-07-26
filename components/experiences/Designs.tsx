import React from "react";
import { experience } from "@/data/content/designs";

function Designs() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
      {experience.map((ex, index) => {
        return (
          <div className="w-full" key={index}>
            <a className="w-full">
              <div className="w-full border-2  hover:opacity-75 transition-opacity object-cover">
                <Experience experience={ex} />
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

const Experience = ({ experience }) => {
  const {
    title,
    company_name,
    start_date,
    end_date,
    employment_type,
    location,
    descriptions,
    skills,
  } = experience;

  return (
    <div className="bg-blue-950 shadow-md rounded-lg p-6 mb-6">
      <div className="flex justify-between mb-4">
        <div className="text-left">
          <h2 className="text-2xl font-bold">{title}</h2>
          <h3 className="text-xl text-white">{company_name}</h3>
        </div>
        <div className="text-left">
          <p className="text-white">{employment_type}</p>
          <p className="text-white">{location}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-white">
          {new Date(start_date).toLocaleDateString()} -{" "}
          {end_date ? new Date(end_date).toLocaleDateString() : "Present"}
        </p>
      </div>
      <ul className="text-left list-disc list-inside mb-4">
        {descriptions &&
          descriptions.map((desc, index) => (
            <li key={index} className="text-white">
              {desc}
            </li>
          ))}
      </ul>
      <div className="flex flex-wrap">
        {skills &&
          skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
            >
              {skill}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Designs;
