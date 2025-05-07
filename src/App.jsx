import { useState, useEffect } from 'react';
import { Menu, X, Code, Server, Database, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, ChevronRight } from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
    setActiveSection(sectionId);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-xl text-blue-600">LC<span className="text-gray-800">Dev</span></div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {['home', 'sobre', 'experiencia', 'educacao', 'habilidades', 'contato'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${activeSection === item ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'} capitalize`}
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full">
            <div className="flex flex-col px-4 py-2">
              {['home', 'sobre', 'experiencia', 'educacao', 'habilidades', 'contato'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`${activeSection === item ? 'text-blue-600 font-medium' : 'text-gray-600'} py-2 capitalize`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="container mx-auto px-4 py-16 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Lucas Rogério Correia Codogno
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-600 mb-8">
            Desenvolvedor Full Stack
          </h2>
          <p className="text-gray-600 max-w-2xl mb-12">
            Experiência em React.js, Next.js, Node.js, TypeScript, Zustand, Firebase e bancos de dados SQL.
            Desenvolvimento web moderno com foco em performance e experiência do usuário.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Entre em Contato
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Sobre Mim</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6">
              Desenvolvedor de software com experiência consolidada em um leque abrangente de tecnologias web modernas, 
              incluindo React.js, Next.js, Node.js, TypeScript, Zustand e Firebase, além de proficiência em bancos de dados SQL. 
            </p>
            <p className="text-gray-700 mb-6">
              Minha atuação abrange o desenvolvimento full stack e o suporte técnico, alicerçada em um sólido conhecimento 
              de arquiteturas web, sockets e integração de sistemas. Busco aprimoramento contínuo por meio da educação 
              e certificações relevantes, complementado por uma comunicação eficaz em inglês.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React.js</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Next.js</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Zustand</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Firebase</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">SQL</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experiencia" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Experiência Profissional</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* IBM Experience */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Proxxi – IBM Brasil</h3>
                  <p className="text-blue-600">Técnico de Campo</p>
                </div>
                <p className="text-gray-600 mt-2 md:mt-0">Junho/2024 – Maio/2025</p>
              </div>
              <ul className="space-y-3 mt-4">
                <li className="flex">
                  <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                  <p className="ml-2">Responsável pelo suporte técnico de campo para infraestrutura e sistemas em clientes IBM, garantindo a operacionalidade e a segurança dos equipamentos.</p>
                </li>
                <li className="flex">
                  <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                  <p className="ml-2">Atuação proativa na manutenção preventiva e corretiva de sistemas, com foco em segurança da informação.</p>
                </li>
                <li className="flex">
                  <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                  <p className="ml-2">Colaboração eficaz com equipes remotas para resolução de incidentes e implementação de soluções IBM.</p>
                </li>
              </ul>
            </div>
            
            {/* Mundial Editora Experience */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Mundial Editora</h3>
                  <p className="text-blue-600">Desenvolvedor de Software</p>
                </div>
                <p className="text-gray-600 mt-2 md:mt-0">2019 – 2024</p>
              </div>
              <ul className="space-y-3 mt-4">
                <li className="flex">
                  <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                  <p className="ml-2">Desenvolvimento e manutenção de sistemas web utilizando as tecnologias React.js, Node.js e bancos de dados SQL, resultando em aplicações robustas e eficientes.</p>
                </li>
                <li className="flex">
                  <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                  <p className="ml-2">Implementação de funcionalidades complexas utilizando Zustand para gerenciamento de estado, Socket.io para comunicação em tempo real e Firebase para serviços de backend.</p>
                </li>
                <li className="flex">
                  <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                  <p className="ml-2">Criação de interfaces de usuário responsivas e intuitivas com HTML, CSS e JavaScript, assegurando uma excelente experiência do usuário em diversas plataformas.</p>
                </li>
                <li className="flex">
                  <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                  <p className="ml-2">Identificação e resolução de problemas complexos, bem como otimização do desempenho de aplicações existentes, garantindo a escalabilidade e a eficiência dos sistemas.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education and Certifications Section */}
      <section id="educacao" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Formação e Certificações</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Formação Acadêmica</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-medium text-gray-800">Engenharia de Software – Bacharelado</p>
                  <p className="text-gray-600">Início: 2023 (Cursando – 3º ano)</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Tecnólogo em Radiologia</p>
                  <p className="text-gray-600">2015 – 2018</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Certificações</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                  <p className="ml-2">Google Cloud Platform – SENAI Birigui – 2021</p>
                </li>
                <li className="flex">
                  <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                  <p className="ml-2">Node.js, React.js e Next.js (Básico ao Avançado) – Udemy</p>
                </li>
                <li className="flex">
                  <ChevronRight className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                  <p className="ml-2">Cibersegurança – IBM</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="habilidades" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Habilidades Técnicas</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Code className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Frontend</h3>
              </div>
              <ul className="space-y-2">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Zustand</li>
                <li>HTML5 / CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Interfaces responsivas</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Server className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Backend</h3>
              </div>
              <ul className="space-y-2">
                <li>Node.js</li>
                <li>Socket.io</li>
                <li>APIs RESTful</li>
                <li>Integração de sistemas</li>
                <li>Autenticação</li>
                <li>Segurança</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Database className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Dados & DevOps</h3>
              </div>
              <ul className="space-y-2">
                <li>SQL Server</li>
                <li>Firebase</li>
                <li>Git / Controle de versão</li>
                <li>Inglês Intermediário</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Entre em Contato</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="text-blue-600 mr-4" size={20} />
                <a href="tel:+5518991300406" className="text-gray-700 hover:text-blue-600 transition-colors">
                  (18) 99130-0406
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-4" size={20} />
                <div className="space-y-1">
                  <a href="mailto:lucas.codogno@ibm.com" className="text-gray-700 hover:text-blue-600 transition-colors block">
                    lucas.codogno@ibm.com
                  </a>
                  <a href="mailto:lucasrogeriocorreiacodogno@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors block">
                    lucasrogeriocorreiacodogno@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-4" size={20} />
                <p className="text-gray-700">Birigui – SP, Brasil</p>
              </div>
              
              <div className="pt-6 flex space-x-4">
                <a href="https://www.linkedin.com/in/lucas-codogno-591157180" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Lucas Rogério Correia Codogno. Todos os direitos reservados.</p>
          <p className="mt-2 text-gray-400 text-sm">Desenvolvido com React + Vite e Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default App;