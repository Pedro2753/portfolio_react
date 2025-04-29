import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML5/CSS3",
    "JavaScript",
    "Bootstrap",
    "Wordpress",
    "React",
  ];

  const backendSkills = ["Python", "GDScript", "Java", "MySQL", "Node.JS"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Sobre mim
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Desenvolvedor junior, apaixonado por tecnologia, atualmente foco
              meus estudos em desenvolvimento web com Javascript e React.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg--500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Formação </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> 🎓 Sistemas para internet </strong> - Estácio
                  (2025-Presente)
                </li>
                Conteúdo do curso: Densenvolvimento Web, Redes de computadores,
                Computação em nuvem...
                <li>
                  <strong> 🎓 Analise e Desenvolvimento de Sistemas </strong> -
                  Anhanguera (2022-2024)
                </li>
                Conteúdo do curso: Programação Python, Desenvolvimento Mobile,
                Segurança da Informação...
                <li>
                  <strong> 🎓 Técnico em Informática </strong> - FAETEC (2019 -
                  2021)
                </li>
                Conteúdo do curso: Lógica de Programação, Montagem e manuntenção
                de micros, Banco de Dados...
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
