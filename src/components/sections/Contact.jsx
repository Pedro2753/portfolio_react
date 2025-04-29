import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import github_icon from "../../assets/github-icon.png";
import whatsapp_icon from "../../assets/zap.png";
import linkedin_icon from "../../assets/linkedin.png";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_2st2d3v";
  const TEMPLATE_ID = "template_xewokus";
  const PUBLIC_KEY = "usNqU3N9oQoX4Wjjn";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("Message Enviada");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Opa! Algo está errado, tente novamente."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Entre em Contato
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Nome..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="exemplo@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Sua mensagem..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Enviar Menssagem
            </button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              <a href="https://github.com/Pedro2753">
                <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  <img src={github_icon}></img>
                </div>
              </a>

              <a href="https://wa.me/5521981744994">
                <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  <img src={whatsapp_icon}></img>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/pedrohmf-21a166164/">
                <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                  <img src={linkedin_icon}></img>
                </div>
              </a>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
