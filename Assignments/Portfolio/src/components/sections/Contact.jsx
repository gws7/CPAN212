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
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-violet-400 text-center bg-clip-text text-transparent">Get In Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" id="name" name="name" value={formdata.name} onChange={(e) => setFormdata({...formdata, name: e.target.value})} required placeholder="Name" className="w-full bg-white/5 border-white/10 rounded px-4 py-3  text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"/>
                        </div>
                        <div className="relative">
                            <input type="email" id="email" name="email" value={formdata.email} onChange={(e) => setFormdata({...formdata, email: e.target.value})} required placeholder="Example@email.com" className="w-full bg-white/5 border-white/10 rounded px-4 py-3  text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"/>
                        </div>
                        <div className="relative">
                            <textarea id="message" name="message" rows={5} value={formdata.message} onChange={(e) => setFormdata({...formdata, message: e.target.value})} required placeholder="Enter your message" className="w-full bg-white/5 border-white/10 rounded px-4 py-3  text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"/>
                        </div>

                        <button type="submit" className="w-full bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow[0_0_15px_purple]">Send Message</button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}