import SiliconValley from "./SiliconValley";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import GenoaES from "./GenoaES";
import Hackathons from "./Hackathons";
const Content = () => {
    return (
        <main className="fade-left pt-5 sm:pt-24 lg:w-1/2 lg:py-24 text-md ">
            {/* <Bio/> */}
            <WorkExperience/>
            <Projects/>
            <GenoaES/>
            <SiliconValley/>
            <Hackathons/>
            {/* <p>Designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel.  </p>*/}
        </main>
    );
}

export default Content;