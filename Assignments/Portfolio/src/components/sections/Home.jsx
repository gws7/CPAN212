import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {
    return(
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-right bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">Hey, i'm Gabriel</h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    A current computer programming student seeking a co-op opportunity to further my knowledge in the fields of fullstack development, database management and analysis, and also software development.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_purple]">
                            View Projects
                        </a>
                        <a href="#contact" className="border border-purple-500/50 text-purple-500 py-3 px-6 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_purple] hover:bg-purple-500/10">
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}