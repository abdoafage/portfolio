import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "lambda function",
    desc: "lambda function it is clone from AWS lambda",
    img: "/static/logos/logo_no_text.svg",
    link: "https://github.com/abdoafage/lambda-function",
    github: "https://github.com/abdoafage/lambda-function",
    tags: ["React", "TailwindCSS", "CSS", "Postgresql", "Django", "Docker"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
