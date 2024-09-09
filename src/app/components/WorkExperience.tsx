import ExperienceCard from "./ExperienceCard";


interface ExperienceCardProps {
  date: string;
  title: string;
  description: string;
  tags: string[];
  }

const experiences : ExperienceCardProps[] = [
    {
        title: "Software Engineer · Quince",
        date: "2023 - 2024",
        description: "During my Master's program at the University of Genoa and Georgetown University, I founded and developed Quince.party, a platform designed to help Latino families plan their dream quinceañera. I managed all operations, securing two paying customers and generating $65,000 in potential leads within just 10 days of launch.",
        tags: ["TypeScript", "Next.js", "Pandas", "Google Cloud"],
      },
        {
          title: "Software Engineer · Logyq Protocol",
          date: "2022 - 2023",
          description: "Delivered multiple products and core features. As the first tech hire at Logyq Protocol, I played a pivotal role in shaping the technology stack and guided the development of various projects. This included crafting a Web App, a Mobile App, a Discord bot, and a Shopify App to seamlessly integrate on-chain reviews directly onto product pages.",
          tags: ["Blockchain", "Web3", "Next.js", "TypeScript", "Flutter", "Liquid", "Node.js", "Shopify API", "Discord API", "Python", "Wagmi.js", "Google Cloud", "Cardano Node"],
        },
        {
          title: "Web Developer · Freelancer",
          date: "2019 - 2021",
          description: "I helped dozens of SMEs digitalize their business and establish their online presence by building funnels and ecommerce stores.",
          tags: ["Shopify", "Liquid", "Google Tag Manager", "Wordpress","Google Analytics", "Facebook Pixel", "Google Ads", "Facebook Ads", "Photoshop", "PHP"],
        }
      ]

const WorkExperience = () => {
    return (
        <section aria-label="Work experience" className="scroll-mt-16 lg:scroll-mt-24 mb-5">

          


            <h2 className="font-bold mt-5 text-xl tracking-tight text-slate-700 sm:text-2xl  uppercase px-6 py-4 hidden sm:block">
              Work Experience
            </h2>
            <h2 className="font-bold mt-5 text-xl tracking-tight text-slate-700 sm:text-2xl uppercase sticky top-0 z-20 w-screen px-6 py-4 backdrop-blur sm:hidden">
                Work Experience
            </h2>
            {experiences.map((item, index) => (
                <ExperienceCard key={index}date={item.date} title={item.title} description={item.description} tags={item.tags}/>
            ))}
           
        </section>
    );
}

export default WorkExperience;