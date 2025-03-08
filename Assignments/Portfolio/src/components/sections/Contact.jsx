import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from "emailjs-com"

export const Contact = () => {

    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent")
            setFormdata({name: "", email: "", message: ""})
        }).catch(()=>alert("Oops, something went wrong. Try again :) "))
    }

    return(
        <section id="contact" className="min-h-screen flex items-center justify-center py-12">
            <RevealOnScroll>
                <div className="w-full max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-violet-400 text-center bg-clip-text text-transparent">Get In Touch</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="space-y-4 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-semibold text-white">Let's Connect!</h3>
                            <p className="text-gray-300 text-lg">
                                Feel free to reach out for collaborations, opportunities, or just to say hello. I'm always excited to connect with new people and explore potential projects.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center justify-center md:justify-start space-x-2">
                                    <span className="text-purple-500 text-lg">📧</span>
                                    <a href="mailto:gwsprofessiona@outlook.com" className="text-gray-300 hover:text-white transition-colors">gwsprofessiona@outlook.com</a>
                                </div>
                                <div className="flex items-center justify-center md:justify-start space-x-2">
                                    <span className="text-purple-500 text-lg">📍</span>
                                    <span className="text-gray-300">Toronto, ON</span>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-4 bg-white/5 p-5 rounded-xl border border-white/10" onSubmit={handleSubmit}>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formdata.name} 
                                    onChange={(e) => setFormdata({...formdata, name: e.target.value})} 
                                    required 
                                    placeholder="Name" 
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                                />
                            </div>
                            <div className="relative">
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formdata.email} 
                                    onChange={(e) => setFormdata({...formdata, email: e.target.value})} 
                                    required 
                                    placeholder="Example@email.com" 
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                                />
                            </div>
                            <div className="relative">
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={4} 
                                    value={formdata.message} 
                                    onChange={(e) => setFormdata({...formdata, message: e.target.value})} 
                                    required 
                                    placeholder="Enter your message" 
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-purple-500 text-white py-2 px-6 rounded font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_purple] hover:bg-purple-600"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}