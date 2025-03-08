import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(()=> {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            const navbarHeight = 80; // Updated to match new navbar height
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - navbarHeight,
                behavior: 'smooth'
            });
            setMenuOpen(false);
        }
    }

    return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center h-20">
                <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="font-mono text-2xl font-bold text-white">gws<span className="text-purple-500">7</span></a>

                <div className="w-8 h-6 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev)=>!prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-12">
                    <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-lg text-gray-300 hover:text-white transition-colors">Home</a>
                    <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="text-lg text-gray-300 hover:text-white transition-colors">About</a>
                    <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="text-lg text-gray-300 hover:text-white transition-colors">Projects</a>
                    <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="text-lg text-gray-300 hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </div>
    </nav>
    )
}