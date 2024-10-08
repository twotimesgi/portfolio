import Image from "next/image";
import VarGroup from "../public/vargroup.jpeg";

const GenoaES = () => {
    return (
        <section aria-label="Work experience" className="scroll-mt-16 mb-5 lg:scroll-mt-24">
            
            
            
            <h2 className="font-bold mt-5 text-xl tracking-tight text-slate-700 sm:text-2xl  uppercase px-6 py-4 hidden sm:block">
Building cool stuff fast            </h2>
            <h2 className="font-bold mt-20 text-xl tracking-tight text-slate-700 sm:text-2xl uppercase sticky top-0 z-20 w-screen px-6 py-4 backdrop-blur sm:hidden">
            Building cool stuff fast             </h2>
<div className="px-6 mb-4 mt-5">
            <p className="mb-4">I&apos;ve always had a passion for hackathons—they&apos;re a perfect blend of creativity, problem-solving, and collaboration. Over the years, I&apos;ve participated in several exciting hackathons, including Talent Garden x VarGroup (1st prize), Encode x Algorand (2nd prize) and MasterZ (2nd prize).</p>

<p className="mb-4">Each event has been an exhilarating challenge that pushes me to think on my feet and solve problems under pressure. Whether it&apos;s developing a new app in just 48 hours or collaborating with a diverse team of thinkers, these experiences are where I truly get to embrace my love for building and creating.</p>

<p className="mb-4">The fast-paced environment and the chance to tackle real-world problems head-on keep me coming back for more.</p>

                <Image src={VarGroup} alt="Awards" width={800} height={500} className="mt-5"/>
            </div>
           
        </section>
    );
}

export default GenoaES;