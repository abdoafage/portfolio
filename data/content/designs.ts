type Experience = {
  title?: string;
  company_name?: string;
  start_date?: Date | string;
  end_date?: Date | string;
  employment_type?: string;
  location?: string;
  descriptions?: string[];
  skills?: string[];
};

export const experience: Experience[] = [
  {
    title: "Software Engineer",
    company_name: "ISemantics.ai",
    start_date: new Date("Jan 2024"),
    end_date: "Present",
    employment_type: "Full-time",
    location: "Cairo, Egypt",
    descriptions: [
      "1- I worked with PM and senior engineers to design multiple systems.",
      "2- I led two teams to build these systems from scratch to deploy them.",
      "3- Implemented Docker for streamlined deployment, cutting release cycles by 50%.",
      "4- Developed and optimized features using JavaScript/React and Python/Django.",
      "5- Developed and tested applications on my EC2, Deployed and managed applications on the DigitalOcean platform.",
      "6- Collaborated in Agile teams, delivering features within sprint timelines.",
      "7- Maintained version control with Git, streamlining collaborative development in an Agile environment, and conducting regular code reviews.",
      "8- Learned a lot of soft skills, like communication, Team Collaboration, writing reports and estimations, documentation for a project, presentation, and leadership, problem-solving.",
      "9- Learned a lot of technical skills, like cleaning code, code reviews, Scrum, Pytest (Python), Django (Python), simple CI/CD, Git, SQL, Reactjs.",
    ],
    skills: [
      "python",
      "fastapi",
      "monitoring",
      "system design",
      "redis",
      "postgresql",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "bld.ai",
    start_date: new Date("Nov 2022"),
    end_date: new Date("Nov 2023"),
    employment_type: "Full-time",
    location: "Cairo, Egypt",
    descriptions: [],
  },
];
