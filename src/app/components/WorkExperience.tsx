import ExperienceCard from "./ExperienceCard";



const experiences = [
    {
        title: "Software Engineer · Quince",
        date: "2023 - 2024",
        description: "During my Master's program at the University of Genoa and Georgetown University, I founded and developed Quince.party, a platform designed to help Latino families plan their dream quinceañera. I managed all operations, securing two paying customers and generating $65,000 in potential leads within just 10 days of launch.",
        tags: ["TypeScript", "Next.js", "Pandas", "Google Cloud"],
        links: [<a href="https://www.lidonation.com/ja/proposals/logyq-protocol-social-commerce-and-digital-product-passport-f10#:~:text=Luigi%20Bardella%20Gerbi%20is%20our%20first%20employee%20and%20has%20been%20an%20invaluable%20contributor%20to%20our%20development%20work.%20He%20has%20proven%20to%20be%20up%20to%20any%20coding%20challenge%20and%20has%20helped%20us%20extensively%20in%20designing%20our%20product%20suite.">"Luigi Bardella Gerbi is our first employee and has been an invaluable contributor to our development work. He has proven to be up to any coding challenge and has helped us extensively in designing our product suite."</a>]
      },
        {
          title: "Software Engineer · Logyq Protocol",
          date: "2022 - 2023",
          description: "Delivered multiple products and core features. As the first tech hire at Logyq Protocol, I played a pivotal role in shaping the technology stack and guided the development of various projects. This included crafting a Web App, a Mobile App, a Discord bot, and a Shopify App to seamlessly integrate on-chain reviews directly onto product pages.",
          tags: ["Blockchain", "Web3", "Next.js", "TypeScript", "Flutter", "Liquid", "Node.js", "Shopify API", "Discord API", "Python", "Wagmi.js", "Google Cloud", "Cardano Node"],
          links: [<a href="https://www.lidonation.com/ja/proposals/logyq-protocol-social-commerce-and-digital-product-passport-f10#:~:text=Luigi%20Bardella%20Gerbi%20is%20our%20first%20employee%20and%20has%20been%20an%20invaluable%20contributor%20to%20our%20development%20work.%20He%20has%20proven%20to%20be%20up%20to%20any%20coding%20challenge%20and%20has%20helped%20us%20extensively%20in%20designing%20our%20product%20suite.">"Luigi Bardella Gerbi is our first employee and has been an invaluable contributor to our development work. He has proven to be up to any coding challenge and has helped us extensively in designing our product suite."</a>]
        },
        {
          title: "Web Developer · Freelancer ",
          date: "2019 - 2021",
          description: "I helped dozens of SMEs digitalize their business and establish their online presence by building funnels and ecommerce stores.",
          tags: ["Shopify", "Liquid", "Google Tag Manager", "Wordpress","Google Analytics", "Facebook Pixel", "Google Ads", "Facebook Ads", "Photoshop", "PHP"],
          links: [],
        }
      ]

const WorkExperience = () => {
    return (
        <section aria-label="Work experience" className="scroll-mt-16 lg:scroll-mt-24 mb-5">

           {/* <h2 className="font-bold ml-5 mt-5 text-xl tracking-tight text-slate-700 sm:text-2xl uppercase">
                Work Experience
            </h2> */}

            {/* <h2 className="sticky top-0 z-20  mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                Work Experience
            </h2> */}
            <h2 className="font-bold mt-5 text-xl tracking-tight text-slate-700 sm:text-2xl uppercase sticky top-0 z-20   w-screen px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                Work Experience
            </h2>
            {experiences.map((item, index) => (
                <ExperienceCard key={index}date={item.date} title={item.title} description={item.description} tags={item.tags} links={item.links}/>
            ))}
           
        </section>
    );
}

export default WorkExperience;