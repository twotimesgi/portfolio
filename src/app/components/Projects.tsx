import ProjectCard from "./ProjectCard";
import SlackClone from "../public/slack-clone.png"
import Portfolio from "../public/portfolio.png"
import knn from "../public/knn.png"
import MarketPlace from "../public/marketplace.png"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ArrowUpRight } from "lucide-react";

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
  },
  {
    title: "Decentralized Marketplace (for Logyq Protocol)",
    description: "A blockchain-powered decentralized marketplace, developed by me for Logyq Protocol in 10 days for the Venom Foundation hackathon, allows users to list, buy, sell, and make offers securely via smart contracts on the Venom blockchain. It's functional but not polished due to the tight timeline.",
    tags: ["T-Solidity", "Chai", "Next.js", "Typescript"],
    image: MarketPlace,
    link: "https://github.com/twotimesgi/decentralized-marketplace-frontend",
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
Projects          </h2>
            <h2 className="font-bold mt-20 text-xl tracking-tight text-slate-700 sm:text-2xl uppercase sticky top-0 z-20 w-screen px-6 py-4 backdrop-blur sm:hidden mb-5">
Projects            </h2>
            {projects.map((item, index) => (
                <ProjectCard key={index} image={item.image as StaticImport}title={item.title} description={item.description} tags={item.tags} link={item.link}/>
            ))}
            <a href="https://github.com/twotimesgi" target="_blank" className="h4 px-6 hover:text-orange-500 text-slate-700 text-lg font-semibold transition mb-14 block group">
            View Github <ArrowUpRight strokeWidth="2" className="size-4  inline-block mb-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
          </a>
        </section>
        
    );
}

export default Projects;