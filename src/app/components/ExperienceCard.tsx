import Tag from "./Tag";

interface ExperienceCardProps {
    date: string;
    title: string;
    description: string;
    tags: string[];
    }

const ExperienceCard = ({date, title, description, tags}: ExperienceCardProps) => {
    return (
        <div className="hover:bg-white/20 hover:shadow-lg rounded-lg p-6 w-full transition-all group flex flex-col sm:gap-5 sm:flex-row">
        <div className="text-slate-400 text-sm w-[100px] pt-1 text-nowrap  justify-start flex sm:justify-center shrink-0">
          {date}
        </div>
      <div>
        <h4 className="group-hover:text-orange-500 text-slate-700 text-lg font-semibold mb-2 transition">
          {title}
        </h4>
      
        <div className="mt-4 leading-tight mb-4 text-sm">
          {description}
        </div>
      
        <div className="flex flex-wrap gap-2">
            {tags.map((tag: string, index: number) => (
                <Tag label={tag} key={index}/>
            ))}
          
        </div>
        </div>
      </div>
    );
}

export default ExperienceCard;
