import Image from 'next/image';
import Washington from '../public/dc.jpg';
const GenoaES = () => {
    return (
        <section aria-label="Work experience" className="scroll-mt-16 mb-5 lg:scroll-mt-24">
            
                      
            <h2 className="font-bold mt-5 text-xl tracking-tight text-slate-700 sm:text-2xl  uppercase px-5 py-4 hidden sm:block">
GenoaES            </h2>
            <h2 className="font-bold mt-5 text-xl tracking-tight text-slate-700 sm:text-2xl uppercase sticky top-0 z-20 w-screen px-6 py-4 backdrop-blur sm:hidden">
            GenoaES            </h2>
            <div className="p-5">
                <p className="mb-4">
                This groundbreaking collaboration between the University of Genoa and Georgetown University in Washington, DC, allowed me to dive into full-time startup development while still pursuing my education.
                </p>
                <p className="mb-4">
                Out of a global pool of applicants, only 12 students were selected, making this opportunity even more special. Throughout the program, I had the chance to tap into extensive networks across both the US and EU. The classes were enriched by personalized 1:1 sessions and workshops led by some truly distinguished mentors, including Douglas Leone. I also had the opportunity to learn from industry giants, with insights from experts at Tesla, Meta, and Google.
                </p>
                <p className="mb-4">
                One of the most exciting aspects was the chance to pitch my startup in front of over 100 investors, all while working towards my Master’s degree. This unique combination of hands-on experience and academic learning has been invaluable, providing me with the skills and connections to truly accelerate my entrepreneurial journey.

                </p>
                <Image src={Washington} alt="Silicon Valley" width={800} height={500} className="mt-5"/>
            </div>
           
        </section>
    );
}

export default GenoaES;