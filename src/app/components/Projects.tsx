import ProjectCard from "./ProjectCard";
import SlackClone from "../public/slack-clone.png"
import Portfolio from "../public/portfolio.png"
import knn from "../public/knn.png"
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const projects : ProjectCardProps[] = [
  {
    title: "This portfolio",
    image: Portfolio,
    description: "This is a modern and responsive portfolio website designed to showcase projects, skills, and experiences in a clean, user-friendly layout.",
    tags: ["Tailwind", "Next.js", "TypeScript", "React"],
    link: "https://github.com/twotimesgi/portfolio",
  },
  {
    title: "Slack Clone",
    link: "https://github.com/twotimesgi/slack-clone",
    image: SlackClone,
    description: "An end-to-end fullstack, real-time Slack clone with workspaces, channels, 1:1 conversations, threads, reactions, and member roles. This project is built with modern web technologies and provides a fully functional communication platform.",
    tags: ["Convex", "NextAuth", "TypeScript", "Next.js", "Tailwind"],
  },
  {
    title: "KNN",
    description: "In this project, I implemented the K-Nearest Neighbors (KNN) algorithm from scratch using Python. Then, trained the model on a dataset containing Pokémon statistics to predict whether a Pokémon is legendary or not based on its attributes.",
    tags: ["KNN", "Machine Learning", "Python", "Scikit-learn"],
    image: knn,
    link: "https://github.com/twotimesgi/KNN",
  }
];

interface ProjectCardProps {
  image: StaticImport;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const Projects = () => {
    return (
        <section aria-label="Work experience" className="scroll-mt-16 lg:scroll-mt-24 mb-5">
           
           <h2 className="font-bold mt-5 text-xl tracking-tight text-slate-700 sm:text-2xl  uppercase px-6 py-4 hidden sm:block">
           Projects            </h2>
            <h2 className="font-bold mt-5 text-xl tracking-tight text-slate-700 sm:text-2xl uppercase sticky top-0 z-20 w-screen px-6 py-4 backdrop-blur sm:hidden">
            Projects            </h2>
       
            {projects.map((item, index) => (
                <ProjectCard key={index} image={item.image as StaticImport}title={item.title} description={item.description} tags={item.tags} link={item.link}/>
            ))}
        </section>
        
    );
}

export default Projects;