import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Projetos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Golden Key</h3>
              <p className="text-gray-400 mb-4">
                Protótipo de Website dinâmico e responsivo, sobre novidades da
                cultura geek.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5/CSS3", "JavaScript", "Wordpress"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Pedro2753/GoldenWP"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver Projeto →
                </a>
                <a
                  href="https://github.com/Pedro2753/GoldenKey"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver Projeto (Sem Wordpress) →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Singular Mount</h3>
              <p className="text-gray-400 mb-4">
                Jogo de plataforma desenvolvido na engine Godot, usando sua
                linguagem nativa GDScript.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["GDScript/Python", "Godot Engine"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Pedro2753/Jogo_de_plataforma_2D"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Ver Projeto →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Sistema Escolar</h3>
              <p className="text-gray-400 mb-4">
                Software gerenciador conceitual de um banco de dados de um
                colégio.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "Mysql"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Pedro2753/Sistema-Escolar"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">The Void</h3>
              <p className="text-gray-400 mb-4">
                Futuro projeto de um website que usa os recursos do React.JS.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.JS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center "></div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
