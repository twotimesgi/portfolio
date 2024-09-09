import Image from 'next/image';
import Tesla from '../public/tesla.webp';
const SiliconValley = () => {
    return (
        <section aria-label="Work experience" className="scroll-mt-16 mb-5 lg:scroll-mt-24 px-1">
             <h2 className="font-bold mt-5 text-xl tracking-tight text-slate-700 sm:text-2xl  uppercase px-6 py-4 hidden sm:block">
Silicon Valley            </h2>
            <h2 className="font-bold mt-5 text-xl tracking-tight text-slate-700 sm:text-2xl uppercase sticky top-0 z-20 w-screen px-6 py-4 backdrop-blur sm:hidden">
Silicon Valley            </h2>
<div className="px-6 mb-4 mt-5">
<p className="mb-4">
                In the summer of 2023, I was selected for both the Silicon Valley Study Tour and the Silicon Valley Fellowship. During this one-month bootcamp, I gained exclusive access to top-tier tech companies and an immersive look into the Silicon Valley startup ecosystem.
                </p>
                <p>
                    Out of over 700 applicants, being chosen was an exciting achievement. I was mentored by more than 20 researchers, tech managers, and venture capital executives. We visited some of the most iconic companies and universities in the Bay Area—Google, Meta, Tesla, Apple, Stanford, Berkeley, Pinterest, Cisco, PayPal, and Synopsys. 
                </p>
                <Image src={Tesla} alt="Silicon Valley" width={800} height={500} className="mt-5"/>
            </div>
           
        </section>
    );
}

export default SiliconValley;