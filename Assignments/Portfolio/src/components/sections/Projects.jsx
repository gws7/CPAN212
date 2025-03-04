import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-violet-400 text-center bg-clip-text text-transparent"> Featured Projects: </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="p-6 rounded-xl border border-white/25 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_3px_8px_purple] transition-all">
                            <h3 className="text-xl font-bold mb-2">Java Based Inventory Entry System</h3>
                            <p className="text-gray-400 mb-3">
                                Developed a JavaFX application to manage product entry into an inventory file (using BufferedWriter), allowing user input to save product information.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java", "JavaFX", "I/O System"].map((item, key) => (
                                    <span className="bg-purple-500/25 text-purple-500 py-1 px-3 rounded-full text-small hover:bg-purple-500/20 hover:shadow[0_2px_8xp_purple] transition" key={key}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/gws7/CPAN211/tree/master/Labs/Lab4_Gabriel_Sosin" className="text-purple-400 hover:text-purple-200 transition-colors my-4">View Project Github</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/25 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_3px_8px_purple] transition-all">
                            <h3 className="text-xl font-bold mb-2">SQL Database and Implementation</h3>
                            <p className="text-gray-400 mb-3">
                                Created and handled an SQL database using Oracle for a fictional business scenario, thus handling constraints, data entry and management.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Oracle SQL Developer", "SQL", "Database Management"].map((item, key) => (
                                    <span className="bg-purple-500/25 text-purple-500 py-1 px-3 rounded-full text-small hover:bg-purple-500/20 hover:shadow[0_2px_8xp_purple] transition" key={key}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/25 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_3px_8px_purple] transition-all">
                            <h3 className="text-xl font-bold mb-2">Room Booking App</h3>
                            <p className="text-gray-400 mb-3">
                                Developed a room booking application with React Native using proper navigation and data validation.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "React Native", "React Native Libraries"].map((item, key) => (
                                    <span className="bg-purple-500/25 text-purple-500 py-1 px-3 rounded-full text-small hover:bg-purple-500/20 hover:shadow[0_2px_8xp_purple] transition" key={key}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/gws7/CPAN213/tree/master/Assignments/A2_Gabriel_Sosin" className="text-purple-400 hover:text-purple-200 transition-colors my-4">View Project Github</a>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}