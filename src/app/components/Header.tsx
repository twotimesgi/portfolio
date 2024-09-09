import {  Github, Instagram, Linkedin } from "lucide-react";
const Header = () => {
    return (
        <header className="fade-up sm:fade-up lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                {/* <Image src={Profile} alt="Luigi Bardella Gerbi" width={200} height={200} className="border-[3px]" /> */}

            <h1 className="px-6 pt-6 text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-slate-800 to-slate-500 bg-clip-text sm:text-5xl pb-5 ">
            Luigi Bardella Gerbi
</h1>

        
        
            <h2 className="font-bold mt-14 text-xl tracking-tight text-slate-700 sm:text-2xl uppercase sticky top-0 z-20 w-screen px-6 py-4 backdrop-blur sm:hidden">
            About             </h2>
                <p className="sm:mt-4 sm:text-xl text-md leading-tight px-6 mb-4 mt-5 ">
                Since writing my first line of code at 12, I&apos;ve been hooked on the sheer thrill of building something from nothing. What started as simple curiosity quickly evolved into an obsession with turning ideas into reality.
                </p>
            </div>
            <ul className="ml-1 mt-8 flex items-center px-6">
            <li className="mr-5 text-xs shrink-0 opacity-50 hover:opacity-100 transition-all"><a target="_blank" href="https://www.linkedin.com/in/luigibardellagerbi/"><Linkedin className="text-slate-900"/></a></li>
            <li className="mr-5 text-xs shrink-0 opacity-50 hover:opacity-100 transition-all"><a target="_blank" href="https://github.com/twotimesgi"><Github className="text-slate-900"/></a></li>
                <li className="mr-5 text-xs shrink-0 opacity-50 hover:opacity-100 transition-all"><a target="_blank" href="https://www.instagram.com/luigibardellagerbi/"><Instagram className="text-slate-900"/></a></li>
            </ul>
        </header>
    );
}

export default Header;