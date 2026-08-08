export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es";
export const showDefaultLang = false; // /es/about → /about (idioma por defecto oculto en URL)

export const ui = {
  es: {

    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.cv": "Currículum",
    "nav.closeMenu": "Cerrar menú",
    "nav.blog": "Blog",
    // SEO
    "site.title": "Portafolio & Blog",
    "site.description": "Desarrollador full-stack",
    // Hero
    "hero.greeting": "Hola, mi nombre es",
    "hero.name": "Kevin Arauz",
    "hero.title": "Construyo experiencias digitales",
    "hero.description":
      "Soy desarrollador full stack, tengo conocimientos de backend y frontend, gracias a mi conocimiento y experiencia, puedo desarrollar productos a la medida según lo que el cliente requiera. Actualmente me enfoco en construir productos accesibles, centrados en el usuario",
    "hero.company": "Global Business System (GBSYS)",
    "hero.projects": "Ver mis proyectos",
    "hero.contact": "Contáctame",
    "hero.scroll": "scroll",
    // Páginas
    "blog.readMore": "Leer más",
    "blog.publishedOn": "Publicado el",
    "blog.home.eyebrow": "Bitácora digital",
    "blog.home.heading": "Historias, apuntes y cosas que aprendo construyendo software.",
    "blog.home.description": "Una colección de artículos sobre desarrollo web, backend, arquitectura y aprendizajes en proyectos reales.",
    "blog.home.featured": "Artículo destacado",
    "blog.home.latest": "Últimas publicaciones",
    "blog.home.latestDescription": "Lecturas recientes del laboratorio personal.",
    "blog.home.backHome": "Volver al inicio",
    "blog.home.empty": "Todavía no hay artículos publicados en este idioma.",
    "blog.home.emptyHint": "Pronto compartiré nuevas notas por aquí.",

    // About
    "about.title": "Sobre mí",
    "about.paragraph1": "Hola! Mi nombre es",
    "about.paragraph1Name": "Kevin Arauz",
    "about.paragraph1Rest":
      "desde pequeño he tenido una afinidad por la tecnología, esta creció conforme crecía y eventualmente me llevó a la elección de mi carrera profesional, ingeniería en sistemas, donde comencé a programar todo tipo de proyectos, esto comenzando en 2020 con los inicios de mi carrera, desde entonces he obtenido conocimientos en distintas áreas del desarrollo de software, desde el desarrollo de aplicaciones web hasta el desarrollo de aplicaciones móviles, pasando por el desarrollo de APIs y bases de datos.",
    "about.paragraph2":
      "Avanzando hasta hoy, he tenido el privilegio de trabajar en",
    "about.company1": "GBSYS",
    "about.paragraph2Rest":
      "Mi enfoque principal en estos días es construir productos accesibles e inclusivos y experiencias digitales para una variedad de clientes.",
    "about.techTitle":
      "Aquí hay algunas tecnologías con las que he estado trabajando recientemente:",
    "about.techGroup.languages": "Lenguajes",
    "about.techGroup.frontend": "Frameworks Frontend",
    "about.techGroup.backend": "Frameworks Backend",
    "about.techGroup.databases": "Motores de Base de Datos",
    // Experience
    "experience.title": "Experiencia",
    "experience.company.current": "Global Business System (GBSYS)",
    "experience.role.current": "Practicante Desarrollador Full Stack APEX/Oracle",
    "experience.period.current": "2026 — Presente",
    "experience.item1":
      "Desarrollo de aplicaciones web con Oracle APEX, diseñando interfaces, formularios y reportes interactivos orientados a optimizar los procesos internos del negocio.",
    "experience.item2":
      "Mantenimiento y optimización de base de datos Oracle, incluyendo creación y ajuste de consultas SQL/PLSQL, validaciones de datos y mejora de rendimiento en módulos existentes.",
    "experience.item3":
      "Análisis y resolución de bugs reportados por QA, reproduciendo incidencias, corrigiendo lógica en APEX/PLSQL y validando que los cambios cumplan con los criterios de calidad.",


    "experience.company.freelance": "Freelance",
    "experience.role.freelance": "Desarrollador Full Stack",
    "experience.period.freelance": "2020 — Presente",
    "experience.item4":
      "Levantamiento de requerimientos con clientes y desarrollo de soluciones web a medida, integrando frontend y backend según los objetivos de cada proyecto.",
    "experience.item5":
      "Diseño e implementación de APIs y lógica de negocio, conectando aplicaciones con bases de datos relacionales y servicios de terceros.",
    "experience.item6":
      "Despliegue y mantenimiento de aplicaciones en entornos cloud, realizando mejoras continuas de rendimiento, seguridad y experiencia de usuario.",
    
    
    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.featuredLabel": "Proyecto Destacado",
    "projects.otherTitle": "Otros Proyectos",
    "projects.archiveLink": "ver archivo",
    "projects.aria.github": "Ver código en GitHub",
    "projects.aria.live": "Ver proyecto en vivo",
    "projects.featured.1.title": "Portafolio personal",
    "projects.featured.1.description":
      "Un sitio web de portafolio moderno y responsivo que muestra mis habilidades y proyectos. Construido con Astro para un rendimiento óptimo e incluye animaciones suaves, soporte de modo oscuro y una sección completa de proyectos.",
    "projects.featured.2.title": "DrawTogether",
    "projects.featured.2.description":
      "Aplicación colaborativa de dibujo en tiempo real construida con React, TypeScript y WebSockets. Los usuarios pueden crear o unirse a salas y colaborar sobre un lienzo compartido.",
    "projects.featured.3.title": "QRNav",
    "projects.featured.3.description":
      "QRNav es una aplicación Flutter para escanear códigos QR e interactuar rápidamente con su contenido. Permite trabajar con URLs, contactos, ubicaciones, correos, eventos de calendario o texto plano.",
    "projects.featured.4.title": "GeminiFlow - Extensión para Chrome",
    "projects.featured.4.description":
      "Extensión de Chrome para desarrolladores web que integra Gemini y ayuda a resolver errores de código usando cuatro flujos de trabajo para agentes de IA.",
    "projects.featured.5.title": "GreenDrive - App de carga para vehículos eléctricos",
    "projects.featured.5.description":
      "Aplicación móvil Flutter para encontrar estaciones de carga, planificar rutas y conectar con la comunidad de vehículos eléctricos.",
    "projects.featured.6.title": "PyTorrent System using Python Sockets",
    "projects.featured.6.description":
      "Sistema tipo torrent implementado con sockets en Python para compartir archivos en una red peer-to-peer.",
    "projects.featured.7.title": "Rubik's Cube Simulator",
    "projects.featured.7.description":
      "Simulador de cubo de Rubik en Java con interfaz gráfica, movimientos, solución y guardado de progreso.",
    "projects.other.1.title": "ClinicaUNA Management System",
    "projects.other.1.description":
      "Sistema integral de gestión clínica para la Universidad Nacional de Costa Rica. Incluye gestión de pacientes, citas, expedientes médicos y panel administrativo con control de acceso por roles.",
    "projects.other.2.title": "CineUNA Booking System",
    "projects.other.2.description":
      "Sistema de reservas y gestión de cine para la UNA con interfaz JavaFX. Incluye cartelera, reservas de asientos, venta de boletos y reportes operativos.",
    "projects.other.3.title": "Interactive Information Kiosk",
    "projects.other.3.description":
      "Sistema de kiosco informativo digital con interfaz táctil. Ofrece navegación interactiva, contenido multimedia y funciones de accesibilidad para información pública.",
    "projects.other.4.title": "Pomodoro Timer (25 + 5 Clock)",
    "projects.other.4.description":
      "Temporizador basado en la tecnica Pomodoro con intervalos de trabajo y descanso configurables. Incluye notificaciones de audio, seguimiento de sesiones e interfaz limpia.",
    "projects.other.5.title": "Digital Drum Machine",
    "projects.other.5.description":
      "Aplicación web de caja de ritmos interactiva con distintos sonidos. Incluye atajos de teclado, control de volumen y diseño adaptable.",
    "projects.other.6.title": "Advanced JavaScript Calculator",
    "projects.other.6.description":
      "Calculadora web completa con funciones científicas, memoria e historial. Implementa correctamente el orden de operaciones y manejo de errores.",
    "projects.pending.1.title": "Job Tracker",
    "projects.pending.1.description":
      "Aplicación web para gestionar vacantes, postulaciones y seguimiento del proceso de contratación con una interfaz clara y enfocada en la productividad.",
    "projects.page.kicker": "Archivo",
    "projects.page.title": "Todos mis proyectos",
    "projects.page.description":
      "Una vista completa de proyectos destacados y trabajos en progreso, manteniendo la misma estética y experiencia de navegación del sitio principal.",
    "projects.page.backHome": "Volver al inicio",
    "projects.page.pendingTitle": "Proyectos en progreso",
    "projects.pending.2.title": "Portafolio personal",
    "projects.pending.2.description":
      "Portafolio moderno y responsive con blog, proyectos y una experiencia de navegación enfocada en rendimiento y accesibilidad.",
    // Contact
    "contact.kicker": "04. ¿Qué sigue?",
    "contact.title": "Ponte en Contacto",
    "contact.description":
      "Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o simplemente quieras saludar, haré todo lo posible para responderte!",
    "contact.cta": "Escríbeme",
    // Footer
    "footer.designedBy": "Diseñado y Construido por Kevin Arauz",



    // Login
    "login.title": "Login",
    "login.description": "Este login es unicamente para uso propio para acceder al cms del blog no deberia ser utilizado por otros.",
    "login.username": "Nombre de usuario",
    "login.password": "Contraseña",
    "login.submit": "Iniciar sesión",

    // dashboard
    "dashboard.title": "Dashboard",
    "dashboard.description": "Bienvenido a tu dashboard, aquí puedes gestionar tu contenido y ver analíticas.",

  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.cv": "Curriculum",
    "nav.closeMenu": "Close menu",
    "nav.blog": "Blog",
    // SEO
    "site.title": "Portfolio & Blog",
    "site.description": "Full-stack developer",
    // Hero
    "hero.greeting": "Hi, my name is",
    "hero.name": "Kevin Arauz",
    "hero.title": "I build digital experiences",
    "hero.description":
      "I'm a full stack developer, I have knowledge of backend and frontend, fortunately to my knowledge and experience, I can develop custom products according to the client's needs. Currently I focus on building accessible, user-centered products and digital experiences",
    "hero.company": "Global Busines System (GBSYS)",
    "hero.projects": "View my projects",
    "hero.contact": "Contact me",
    "hero.scroll": "scroll",
    // Pages
    "home.hero": "Welcome to my portfolio",
    "blog.readMore": "Read more",
    "blog.publishedOn": "Published on",
    "blog.home.eyebrow": "Digital notebook",
    "blog.home.heading": "Stories, notes, and things I learn while building software.",
    "blog.home.description": "A collection of articles about web development, backend, architecture, and lessons from real projects.",
    "blog.home.featured": "Featured article",
    "blog.home.latest": "Latest posts",
    "blog.home.latestDescription": "Recent reads from my personal lab.",
    "blog.home.backHome": "Back to home",
    "blog.home.empty": "There are no published posts for this language yet.",
    "blog.home.emptyHint": "I will share fresh notes here soon.",

    // About
    "about.title": "About me",
    "about.paragraph1": "Hi! My name is",
    "about.paragraph1Name": "Kevin Arauz",
    "about.paragraph1Rest":
      "when I was a kid I had an affinity for technology, it grew as I grew and eventually led me to the choice of my professional career, systems engineering, where I started programming all kinds of projects, this starting in 2020 with the beginnings of my career, since then I have obtained knowledge in different areas of software development, from web application development, to mobile application development, passing through API development and databases.",
    "about.paragraph2":
      "Fast-forward to today, I have had the privilege of working at",
    "about.company1": "Global Busines System (GBSYS)",
    "about.paragraph2Rest":
      "My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.",
    "about.techTitle":
      "Here are a few technologies I have been working with recently:",
    "about.techGroup.languages": "Languages",
    "about.techGroup.frontend": "Frontend Frameworks",
    "about.techGroup.backend": "Backend Frameworks",
    "about.techGroup.databases": "Database Engines",
    // Experience
    "experience.title": "Experience",
    "experience.company.current": "Global Business System (GBSYS)",
    "experience.role.current": "APEX/Oracle Full Stack Developer Intern",
    "experience.period.current": "2026 — Present",
    "experience.item1":
      "Development of web applications with Oracle APEX, designing interfaces, forms, and interactive reports aimed at optimizing internal business processes.",
    "experience.item2":
      "Maintenance and optimization of Oracle databases, including creation and tuning of SQL/PLSQL queries, data validations, and performance improvements in existing modules.",
    "experience.item3":
      "Analysis and resolution of QA-reported bugs by reproducing issues, correcting APEX/PLSQL logic, and validating that changes meet quality criteria.",

    "experience.company.freelance": "Freelance",
    "experience.role.freelance": "Full Stack Developer",
    "experience.period.freelance": "2020 — Present",
    "experience.item4":
      "Requirements gathering with clients and development of custom web solutions, integrating frontend and backend according to each project's goals.",
    "experience.item5":
      "Design and implementation of APIs and business logic, connecting applications with relational databases and third-party services.",
    "experience.item6":
      "Deployment and maintenance of applications in cloud environments, making continuous improvements in performance, security, and user experience.",
    // Projects
    "projects.title": "Featured Projects",
    "projects.featuredLabel": "Featured Project",
    "projects.otherTitle": "Other Projects",
    "projects.archiveLink": "view archive",
    "projects.aria.github": "View code on GitHub",
    "projects.aria.live": "View live project",
    "projects.featured.1.title": "Personal portfolio",
    "projects.featured.1.description":
      "A modern, responsive portfolio website showcasing my skills and projects. Built with Astro for optimal performance and featuring smooth animations, dark mode support, and a full project showcase section.",
    "projects.featured.2.title": "DrawTogether",
    "projects.featured.2.description":
      "A real-time collaborative drawing application built with React, TypeScript, and WebSockets. Users can create or join drawing rooms and collaborate in real-time on a shared canvas.",
    "projects.featured.3.title": "QRNav",
    "projects.featured.3.description":
      "QRNav is a Flutter application that allows users to scan QR codes and quickly interact with the scanned content. It supports URLs, contacts, locations, emails, calendar events, and plain text.",
    "projects.featured.4.title": "GeminiFlow Chrome Extension",
    "projects.featured.4.description":
      "Chrome extension for web developers that integrates Gemini and helps resolve coding errors using four workflow techniques for LLM agents.",
    "projects.featured.5.title": "GreenDrive - EV Charging Station Mobile App",
    "projects.featured.5.description":
      "Flutter mobile app for EV owners to find charging stations, plan routes, and connect with the EV community.",
    "projects.featured.6.title": "PyTorrent System using Python Sockets",
    "projects.featured.6.description":
      "Torrent-like system built with Python sockets for peer-to-peer file sharing.",
    "projects.featured.7.title": "Rubik's Cube Simulator",
    "projects.featured.7.description":
      "Java Rubik's Cube simulator with a graphical interface, move controls, solution guidance, and progress saving.",
    "projects.other.1.title": "ClinicaUNA Management System",
    "projects.other.1.description":
      "Comprehensive clinic management system for Universidad Nacional de Costa Rica. Features patient management, appointment scheduling, medical records, and an administrative dashboard with role-based access control.",
    "projects.other.2.title": "CineUNA Booking System",
    "projects.other.2.description":
      "Cinema booking and management system for UNA with a JavaFX GUI. Includes movie scheduling, seat reservation, ticket sales, and operational reporting.",
    "projects.other.3.title": "Interactive Information Kiosk",
    "projects.other.3.description":
      "Digital information kiosk system with a touch-friendly interface. Provides interactive navigation, multimedia content display, and accessibility features for public information access.",
    "projects.other.4.title": "Pomodoro Timer (25 + 5 Clock)",
    "projects.other.4.description":
      "Productivity-focused Pomodoro timer with customizable work and break intervals. Features audio notifications, session tracking, and a clean interface.",
    "projects.other.5.title": "Digital Drum Machine",
    "projects.other.5.description":
      "Interactive drum machine web app with multiple drum sounds. Includes keyboard shortcuts, volume control, and responsive design.",
    "projects.other.6.title": "Advanced JavaScript Calculator",
    "projects.other.6.description":
      "Full-featured calculator with scientific functions, memory operations, and history tracking. Implements proper order of operations and robust error handling.",
    "projects.pending.1.title": "Job Tracker",
    "projects.pending.1.description":
      "A web app for managing job openings, applications, and hiring progress with a clear, productivity-focused interface.",
    "projects.page.kicker": "Archive",
    "projects.page.title": "All my projects",
    "projects.page.description":
      "A complete view of featured projects and in-progress work, preserving the same visual style and navigation experience as the main site.",
    "projects.page.backHome": "Back to home",
    "projects.page.pendingTitle": "Projects in progress",
    "projects.pending.2.title": "Personal portfolio",
    "projects.pending.2.description":
      "Modern and responsive portfolio website with a blog, projects, and a navigation experience focused on performance and accessibility.",
    // Contact
    "contact.kicker": "04. What's next?",
    "contact.title": "Get In Touch",
    "contact.description":
      "I am currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I will do my best to get back to you!",
    "contact.cta": "Write me",
    // Footer
    "footer.designedBy": "Designed and Built by Kevin Arauz",


    // Login
    "login.title": "Login",
    "login.description": "This login is only for personal use to access the blog's CMS and should not be used by others.",
    "login.username": "Username",
    "login.password": "Password",
    "login.submit": "Submit",

    // dashboard
    "dashboard.title": "Dashboard",
    "dashboard.description": "Welcome to your dashboard, here you can manage your content and view analytics.",

  },
} as const;

// Rutas traducidas: la URL /about en ES → /about, en EN → /about (mismo nombre aquí)
// Si quisieras rutas distintas: es: { 'about': 'sobre-mi' }
export const routes = {
  en: {
    "sobre-mi": "about",
    blog: "blog",
  },
  es: {
    about: "sobre-mi",
  },
} as const;
