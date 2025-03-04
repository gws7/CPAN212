import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const fullstackSkills = ["React", "TailwindCSS", "Node.js", "MongoDB", "Git", "Java", "RESTful APIs", "Firebase"]
    const dataSkills = ["SQL", "Oracle", "PowerBI", "Python", "Pandas", "Databricks"]

    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-violet-400 text-center bg-clip-text text-transparent"> About Me </h2>

                    <div className="rounded-xl p-8 border-white/25 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Passionate towards programming, with a stronger interest towards the realms of data, AI, and machine learning
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">FullStack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {fullstackSkills.map((item, key) => (
                                        <span className="bg-purple-500/25 text-purple-500 py-1 px-3 rounded-full text-small hover:bg-purple-500/20 hover:shadow[0_2px_8xp_purple] transition" key={key}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Data Related</h3>
                                <div className="flex flex-wrap gap-2">
                                    {dataSkills.map((item, key) => (
                                        <span className="bg-purple-500/25 text-purple-500 py-1 px-3 rounded-full text-small hover:bg-purple-500/20 hover:shadow[0_2px_8xp_purple] transition" key={key}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="p-6 rounded-xl border-white/25 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <strong>A.S. in Computer Programming and Analysis</strong> - Humber Polytechnic (2024 - 2027)
                                <li>
                                    Relevant Coursework: Database Programming, Data Structures and Algorithms, Modern Web Technologies, and Cross-Platform Mobile Development
                                </li>
                                <li>
                                    Dean's Honor List Winter 2024 and Summer 2024
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/25 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <h4 className="font-semibold">Server at Talent Employment (Sep 2024 - Present)</h4> 
                                    <li>
                                        Resolve customer and management issues using effective communication and problem-solving skills.
                                    </li>
                                    <li>
                                        Collaborate with team members and management to ensure smooth operations and customer satisfaction. 
                                    </li>
                                    <li>
                                        Maintain punctual and organizational habits to effectively handle busy venues.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    )
}