import { Download, Github, Instagram, Linkedin, MailIcon } from "lucide-react";

const Header = () => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">Luigi Bardella Gerbi</h1>
                <h2 className="mt-3 text-xl font-medium tracking-tight text-slate-800 sm:text-2xl">Frontend Engineer</h2>
                <p className="mt-4 max-w-xs leading-normal">
                    I'm a frontend engineer with a passion for design and user experience. I'm always looking for new challenges and opportunities to learn and grow.
                </p>

            </div>
            <ul className="ml-1 mt-8 flex items-center">
            <li className="mr-5 text-xs shrink-0 opacity-50 hover:opacity-100 transition-all"><a target="_blank" href="https://www.linkedin.com/in/luigibardellagerbi/"><Linkedin className="text-slate-900"/></a></li>
            <li className="mr-5 text-xs shrink-0 opacity-50 hover:opacity-100 transition-all"><a target="_blank" href="https://github.com/twotimesgi"><Github className="text-slate-900"/></a></li>
                <li className="mr-5 text-xs shrink-0 opacity-50 hover:opacity-100 transition-all"><a target="_blank" href="https://www.instagram.com/luigibardellagerbi/"><Instagram className="text-slate-900"/></a></li>
            </ul>
        </header>
    );
}

export default Header;