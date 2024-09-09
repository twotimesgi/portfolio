import Tag from "./Tag";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { link } from "fs";
interface ProjectCardProps {
  image: StaticImport;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ image, title, description, tags, link }: ProjectCardProps) => {
  return (
    <div className="hover:bg-white/20 hover:shadow-lg rounded-lg w-full transition-all sm:group ">
      <a href={link} className="p-6 flex flex-col sm:gap-5 sm:flex-row gap-2">
      <div className="text-slate-400 w-[150px] pt-1 text-nowrap shrink-0 ">
        <Image src={image} className="rounded-md border-[3px] border-slate-200 group-hover:border-slate-300 transition-all" width={150} alt={`${title} Screenshot`} />
      </div>
      <div>
          <span className="h4 group-hover:text-orange-500 text-slate-700 text-lg font-semibold transition">
            {title} <ArrowUpRight strokeWidth="2" className="size-5  inline-block mb-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </span>
        <div className="mt-4 leading-tight mb-4 text-sm ">
          {description}
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string, index: number) => (
            <Tag label={tag} key={index} />
          ))}

        </div>
      </div>
      </a>
    </div>
  );
}

export default ProjectCard;
