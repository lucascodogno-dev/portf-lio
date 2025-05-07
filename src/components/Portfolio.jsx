import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Calendar } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for parallax and sticky header effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Skills with proficiency levels
  const skills = {
    frontend: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Zustand', level: 80 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML/CSS', level: 95 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Socket.io', level: 80 },
      { name: 'APIs RESTful', level: 85 },
    ],
    database: [
      { name: 'SQL Server', level: 80 },
      { name: 'Firebase', level: 85 },
    ],
    others: [
      { name: 'Controle de Versão', level: 85 },
      { name: 'Autenticação', level: 80 },
      { name: 'Integração de APIs', level: 85 },
    ]
  };

  // Timeline items
  const experiences = [
    {
      title: 'Técnico de Campo',
      company: 'Proxxi – IBM Brasil',
      period: 'Jun/2024 – Mai/2025',
      description: [
        'Suporte técnico de campo para infraestrutura e sistemas em clientes IBM.',
        'Atuação com foco em segurança e manutenção de equipamentos.',
        'Colaboração com times remotos e uso de soluções IBM.'
      ]
    },
    {
      title: 'Desenvolvedor de Software',
      company: 'Mundial Editora',
      period: '2019 – 2024',
      description: [
        'Desenvolvimento de sistemas web usando React.js, Node.js e banco de dados SQL.',
        'Implementação de aplicações com Zustand, Socket.io e Firebase.',
        'Criação de interfaces responsivas com HTML, CSS e JavaScript.'
      ]
    }
  ];

  const education = [
    {
      title: 'Engenharia de Software – Bacharelado',
      institution: 'Faculdade (não especificada)',
      period: 'Início: 2023 (Cursando – 3o ano)'
    },
    {
      title: 'Tecnólogo em Radiologia',
      institution: '',
      period: '2015 – 2018'
    }
  ];

  const certifications = [
    {
      title: 'Google Cloud Platform',
      institution: 'SENAI Birigui',
      year: '2021'
    },
    {
      title: 'Node.js, React.js e Next.js (Básico ao Avançado)',
      institution: 'Udemy',
      year: ''
    },
    {
      title: 'Cibersegurança',
      institution: 'IBM',
      year: ''
    }
  ];

  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-200 font-medium">{name}</span>
        <span className="text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full" 
          style={{ width: `${level}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );

  const TimelineItem = ({ title, company, period, description }) => (
    <div className="mb-8 relative pl-8 before:absolute before:left-0 before:h-full before:w-0.5 before:bg-blue-500">
      <div className="absolute -left-1.5 top-1.5 h-4 w-4 rounded-full bg-blue-500"></div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="flex items-center text-gray-400 mb-2">
        <span className="font-medium text-indigo-400">{company}</span>
        {company && <span className="mx-2">•</span>}
        <div className="flex items-center">
          <Calendar size={14} className="mr-1 text-gray-500" />
          <span>{period}</span>
        </div>
      </div>
      <ul className="text-gray-300 space-y-2 list-disc pl-4">
        {description && description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  const EducationItem = ({ title, institution, period }) => (
    <div className="mb-6 relative pl-8 before:absolute before:left-0 before:h-full before:w-0.5 before:bg-indigo-500">
      <div className="absolute -left-1.5 top-1.5 h-4 w-4 rounded-full bg-indigo-500"></div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {institution && (
        <div className="text-gray-400 mb-1">{institution}</div>
      )}
      <div className="flex items-center text-gray-400">
        <Calendar size={14} className="mr-1 text-gray-500" />
        <span>{period}</span>
      </div>
    </div>
  );

  const CertificationItem = ({ title, institution, year }) => (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-gray-750 border border-gray-700">
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <div className="flex flex-col text-sm text-gray-400">
        {institution && <span>{institution}</span>}
        {year && <span>{year}</span>}
      </div>
    </div>
  );

  // Sections for navigation
  const sections = [
    { id: 'about', name: 'Sobre', icon: '👨‍💻' },
    { id: 'experience', name: 'Experiência', icon: '💼' },
    { id: 'education', name: 'Formação', icon: '🎓' },
    { id: 'skills', name: 'Habilidades', icon: '🛠️' },
    { id: 'contact', name: 'Contato', icon: '📱' }
  ];

  // SVG Icons
  const CodeIcon = () => (
    <svg className="w-5 h-5 text-blue-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );

  const ServerIcon = () => (
    <svg className="w-5 h-5 text-indigo-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
    </svg>
  );

  const DatabaseIcon = () => (
    <svg className="w-5 h-5 text-purple-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
      <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
      <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
      <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
    </svg>
  );

  const OtherIcon = () => (
    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
    </svg>
  );

  const LinkedinIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
    </svg>
  );

  const GitHubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 overflow-x-hidden font-sans">
      {/* Header with blur effect on scroll */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">
            <span className="text-blue-500">Lucas</span> Codogno
          </h1>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`px-2 py-1 rounded-lg transition-all ${
                      activeSection === section.id
                        ? 'text-blue-400 font-medium'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className="mr-1">{section.icon}</span> {section.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-400 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-800 shadow-lg">
            <ul className="py-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => {
                      setActiveSection(section.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 ${
                      activeSection === section.id
                        ? 'bg-gray-700 text-blue-400'
                        : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <span className="mr-2">{section.icon}</span> {section.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 pt-32 pb-16">
        {/* Hero section with gradient */}
        <section className="relative mb-20">
          <div className="absolute -top-32 -left-10 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-10 -right-10 w-96 h-96 bg-indigo-600/30 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600"></div>
            
            <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-10">
              {/* Avatar section */}
              <div className="w-48 h-48 relative">
                <div className="w-full h-full rounded-full border-4 border-gray-700 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-4xl font-bold text-white">
                    LC
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-gray-800 text-green-400 p-2 rounded-full border-2 border-gray-700">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                </div>
              </div>
              
              {/* Information section */}
              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Lucas Rogério Correia Codogno
                </h1>
                <h2 className="text-xl text-blue-400 font-medium mb-6">Desenvolvedor de Software</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-gray-400">
                  <div className="flex items-center">
                    <Phone size={18} className="mr-2 text-blue-400" /> 
                    <span>(18) 99130-0406</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="mr-2 text-blue-400" /> 
                    <span className="truncate">lucas.codogno@ibm.com</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="mr-2 text-blue-400" /> 
                    <span className="truncate">lucasrogeriocorreiacodogno@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={18} className="mr-2 text-blue-400" /> 
                    <span>Birigui, SP</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <a href="#" className="bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-lg flex items-center font-medium text-white">
                    <span className="mr-2"><GitHubIcon /></span> GitHub
                  </a>
                  <a href="#" className="bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 rounded-lg flex items-center font-medium text-white">
                    <span className="mr-2"><LinkedinIcon /></span> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About section */}
        <section id="about" className={`mb-20 transition-opacity duration-500 ${activeSection === 'about' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Sobre mim</h2>
            <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
            <p className="text-gray-300 leading-relaxed">
              Desenvolvedor de software com sólida experiência em tecnologias modernas como React.js, Next.js, Node.js, 
              TypeScript, Zustand, Firebase e bancos de dados SQL. Atuação em desenvolvimento full stack e suporte técnico, 
              com forte conhecimento em arquiteturas web, sockets e integração de sistemas. Em constante evolução acadêmica e 
              profissional, com certificações relevantes e boa comunicação em inglês.
            </p>
          </div>
        </section>
        
        {/* Experience section */}
        <section id="experience" className={`mb-20 transition-opacity duration-500 ${activeSection === 'experience' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Experiência Profissional</h2>
            <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
            {experiences.map((exp, index) => (
              <TimelineItem 
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
              />
            ))}
          </div>
        </section>
        
        {/* Education section */}
        <section id="education" className={`mb-20 transition-opacity duration-500 ${activeSection === 'education' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Formação Acadêmica</h2>
            <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Educação</h3>
              {education.map((edu, index) => (
                <EducationItem 
                  key={index}
                  title={edu.title}
                  institution={edu.institution}
                  period={edu.period}
                />
              ))}
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Certificações</h3>
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <CertificationItem 
                    key={index}
                    title={cert.title}
                    institution={cert.institution}
                    year={cert.year}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills section */}
        <section id="skills" className={`mb-20 transition-opacity duration-500 ${activeSection === 'skills' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Habilidades Técnicas</h2>
            <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <CodeIcon />
                <h3 className="text-xl font-semibold text-white">Frontend</h3>
              </div>
              {skills.frontend.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <ServerIcon />
                <h3 className="text-xl font-semibold text-white">Backend</h3>
              </div>
              {skills.backend.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <DatabaseIcon />
                <h3 className="text-xl font-semibold text-white">Banco de Dados</h3>
              </div>
              {skills.database.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <OtherIcon />
                <h3 className="text-xl font-semibold text-white">Outros</h3>
              </div>
              {skills.others.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact section */}
        <section id="contact" className={`transition-opacity duration-500 ${activeSection === 'contact' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Contato</h2>
            <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
            <p className="text-gray-300 mb-6">
              Estou disponível para novas oportunidades e colaborações. Entre em contato por qualquer um dos meios abaixo:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a 
                href="tel:+5518991300406" 
                className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500/20 text-blue-400 rounded-full mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium">Telefone</h3>
                  <p className="text-gray-400">(18) 99130-0406</p>
                </div>
              </a>
              
              <a 
                href="mailto:lucas.codogno@ibm.com" 
                className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-500/20 text-indigo-400 rounded-full mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-gray-400">lucas.codogno@ibm.com</p>
                </div>
              </a>
              
              <a 
                href="mailto:lucasrogeriocorreiacodogno@gmail.com" 
                className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-purple-500/20 text-purple-400 rounded-full mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium">Email Alternativo</h3>
                  <p className="text-gray-400 text-sm">lucasrogeriocorreiacodogno@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="#" 
                className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-green-500/20 text-green-400 rounded-full mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-medium">Localização</h3>
                  <p className="text-gray-400">Birigui, São Paulo</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">&copy; 2025 Lucas Rogério Correia Codogno</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <GitHubIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Quick navigation for mobile */}
      <div className="fixed bottom-6 right-6 md:hidden">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
      
      {/* Add some extra CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;