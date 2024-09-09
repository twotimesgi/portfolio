import SiliconValley from "./SiliconValley";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import GenoaES from "./GenoaES";
import Hackathons from "./Hackathons";
const Content = () => {
    return (
        <main className="ffade-left pt-5 sm:pt-24 lg:w-1/2 lg:py-24 text-sm ">
            {/* <Bio/> */}
            <WorkExperience/>
            <Projects/>
            <GenoaES/>
            <SiliconValley/>
            <Hackathons/>
        </main>
    );
}

export default Content;