import { useEffect } from "react"

export const MobileMenu = ({menuOpen, setMenuOpen}) => {
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

    return(
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>

            <button 
                onClick={() => {setMenuOpen(false)}} 
                className="absolute top-7 right-7 text-white text-4xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"    
            >
                &times;
            </button>

            <a href="#home" onClick={(e)=>handleScroll(e, '#home')} className={`text-3xl font-semibold text-white my-5 transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Home</a>
            <a href="#about" onClick={(e)=>handleScroll(e, '#about')} className={`text-3xl font-semibold text-white my-5 transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>About</a>
            <a href="#projects" onClick={(e)=>handleScroll(e, '#projects')} className={`text-3xl font-semibold text-white my-5 transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Projects</a>
            <a href="#contact" onClick={(e)=>handleScroll(e, '#contact')} className={`text-3xl font-semibold text-white my-5 transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Contact</a>

        </div>
    )
}