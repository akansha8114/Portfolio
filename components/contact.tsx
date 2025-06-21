"use client"

import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react"

export function Contact() {
  const handleEmailClick = () => {
    // Try to open Gmail first, fallback to default mail client
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=akanshavgk2004@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Aakansha,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect!%0A%0ABest%20regards,`
    const mailtoUrl = `mailto:akanshavgk2004@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Aakansha,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect!%0A%0ABest%20regards,`

    // Try Gmail first
    window.open(gmailUrl, "_blank")

    // Fallback to mailto after a short delay
    setTimeout(() => {
      window.location.href = mailtoUrl
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get In <span className="text-red-400">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-red-400">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. Whether you want to discuss a potential
              collaboration or just say hello, feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-red-400" size={20} />
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleEmailClick}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer"
                  >
                    akanshavgk2004@gmail.com
                  </button>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=akanshavgk2004@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Aakansha,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect!%0A%0ABest%20regards,"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 text-sm"
                  >
                    <Mail size={16} />
                    <span>Gmail</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-red-400" size={20} />
                <div className="flex items-center space-x-4">
                  <a
                    href="tel:+918799708794"
                    className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                  >
                    +91 8799708794
                  </a>
                  <a
                    href="https://wa.me/918799708794?text=Hi%20Aakansha,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 text-sm"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="text-red-400" size={20} />
                <span className="text-gray-300">New Delhi, India</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a
                href="https://github.com/akansha8114?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-red-400 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aakansha-singh-527776301/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-red-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/918799708794?text=Hi%20Aakansha,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-green-500 transition-colors duration-200"
              >
                <MessageCircle size={20} />
              </a>
              <button
                onClick={handleEmailClick}
                className="p-3 bg-slate-800 rounded-full hover:bg-red-500 transition-colors duration-200"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-red-400"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-red-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-red-400"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-colors duration-200"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={handleEmailClick}
                  className="flex items-center space-x-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                >
                  <Mail size={16} />
                  <span>Gmail</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
