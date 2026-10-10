# Kevin Arauz - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Software Engineer and FullStack Developer. Built with Astro, TypeScript, and Tailwind CSS.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue)](https://arauzdev.netlify.app)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](#license)

## 🚀 Technologies Used

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Netlify
- **Icons:** Lucide Icons

## 👨‍💻 About Me

Hi there! I'm Kevin Arauz, a passionate Software Engineer and FullStack Developer currently pursuing a degree in Information Systems Engineering. This portfolio showcases my journey in software development, featuring projects that demonstrate my skills in various technologies and frameworks.

## 📋 Table of Contents
- [🚀 Technologies Used](#-technologies-used)
- [👨‍💻 About Me](#-about-me)
- [🎯 Features](#-features)
- [🌐 Demo](#-demo)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Contact](#-contact)

## 🎯 Features

- **🎨 Responsive Design:** Seamless experience across all devices and screen sizes
- **🌙 Dark/Light Mode:** Toggle between dark and light themes
- **📱 Mobile-First Approach:** Optimized for mobile devices with progressive enhancement
- **⚡ Fast Loading:** Built with Astro for optimal performance
- **🎯 Project Showcase:** Curated selection of projects with detailed overviews
- **📊 Skills Section:** Interactive display of technical skills and proficiencies
- **🎓 Training & Certifications:** Comprehensive list of completed courses and certifications
- **📬 Contact Form:** Easy way to get in touch directly through the site
- **🔍 SEO Optimized:** Proper meta tags and structured data for search engines

## 🌐 Demo

🔗 **Live Site:** [arauzdev.netlify.app](https://arauzdev.netlify.app)

![Portfolio Screenshot](https://i.ibb.co/Y768tb7C/Portafolio.png)

## 🚀 Getting Started

To run this project locally:

### Prerequisites
- Node.js (v22.12.0 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kjarj54/Portafolio.git
cd Portafolio
```

2. Install dependencies:
```bash
# npm
npm install

# pnpm
pnpm install
```

3. Start the development server:
```bash
# npm
npm run dev

# pnpm
pnpm dev
```

4. Open your browser and navigate to `http://localhost:4321`

### Build for Production

```bash
# npm
npm run build

# pnpm
pnpm build
```

### Drizzle Commands

Use these commands to manage your database schema with Drizzle Kit:

```bash
# Generate SQL migrations from your schema
# npm
npx drizzle-kit generate
# pnpm
pnpm drizzle-kit generate

# Apply migrations to the database
# npm
npx drizzle-kit migrate
# pnpm
pnpm drizzle-kit migrate

# Push schema changes directly (without migration files)
# npm
npx drizzle-kit push
# pnpm
pnpm drizzle-kit push

# Open Drizzle Studio
# npm
npx drizzle-kit studio
# pnpm
pnpm drizzle-kit studio
```




The built site will be in the `dist/` folder.

## 📁 Project Structure

```
└── 📁Portafolio
    └── 📁public
        ├── favicon.ico
        ├── favicon.svg
        ├── placeholder.svg
        ├── preview.webp
        ├── robots.txt
    └── 📁src
        └── 📁assets
            ├── hello_there.mp4
            ├── obi-wan-hello-there.mp3
        └── 📁components
            └── 📁blog
            └── 📁dashboard
                ├── Sidebar.astro
            └── 📁landingpage
                ├── About.astro
                ├── Contact.astro
                ├── Expericence.astro
                ├── Hero.astro
                ├── Projects.astro
            └── 📁login
                ├── BackgroundEffects.astro
                ├── LoginCard.astro
                ├── LoginForm.astro
            └── 📁projects
                ├── Projects.astro
            └── 📁shared
                ├── Button.astro
                ├── Footer.astro
                ├── GradientBackground.astro
                ├── Header.astro
                ├── Input.astro
                ├── SocialSideBar.astro
            ├── LanguajePicker.astro
            ├── SEO.astro
        └── 📁content
            └── 📁en
                ├── hello-world.md
            └── 📁es
                ├── hola-mundo.md
        └── 📁db
            ├── index.ts
            ├── schema.ts
        └── 📁i18n
            ├── ui.ts
            ├── utils.ts
        └── 📁layouts
            ├── BlogPostLayout.astro
            ├── DashboardLayout.astro
            ├── Layout.astro
        └── 📁lib
            ├── auth-client.ts
            ├── auth.ts
        └── 📁loaders
            ├── blogApiLoader.ts
        └── 📁pages
            └── 📁[lang]
                └── 📁blog
                    ├── [slug].astro
                    ├── index.astro
                └── 📁dashboard
                    └── 📁post
                        └── 📁edit
                            ├── index.astro
                        └── 📁new
                            ├── index.astro
                    └── 📁settings
                        ├── index.astro
                    ├── index.astro
                └── 📁login
                    ├── index.astro
                └── 📁projects
                    ├── index.astro
                ├── index.astro
            └── 📁api
                └── 📁auth
                    ├── [...all].ts
                └── 📁posts
                    ├── [id].ts
                    ├── index.ts
                ├── hello.ts
            ├── index.astro
        └── 📁styles
            └── 📁components
                ├── blog.css
                ├── buttons.css
                ├── login.css
            ├── animations.css
            ├── base.css
            ├── global.css
            ├── variables.css
        ├── content.config.ts
        ├── middleware.ts
    └── 📁test
    ├── .env
    ├── .gitattributes
    ├── .gitignore
    ├── AGENTS.md
    ├── astro.config.mjs
    ├── CLAUDE.md
    ├── drizzle.config.ts
    ├── env.d.ts
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── pnpm-lock.yaml
    ├── pnpm-workspace.yaml
    ├── README.md
    ├── tsconfig.json
    └── vitest.config.ts
```

This layout follows Astro conventions:
- `src/pages` defines routes (required by Astro).
- `src/components`, `src/layouts`, and `src/styles` follow common Astro structure.
- `public` stores static files served as-is.
- `src/content.config.ts` defines content collections (using a custom DB loader in this project).

## 🤝 Contributing

While this is a personal portfolio, I'm open to suggestions and improvements! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Note:** This portfolio is open source and available for learning purposes. Feel free to use it as inspiration for your own portfolio, but please give appropriate credit and don't claim it as your own work.

## 📞 Contact

Feel free to reach out to me through any of these channels:

- 📧 **Email:** [kjarj14@gmail.com](mailto:kjarj14@gmail.com)
- 💼 **LinkedIn:** [Connect with me](https://www.linkedin.com/in/kevin-arauz-jimenez/)
- 🐱 **GitHub:** [kjarj54](https://github.com/kjarj54)
- 🌐 **Portfolio:** [arauzdev.netlify.app](https://arauzdev.netlify.app)

---

**⭐ If you found this project helpful, please give it a star!**

Thank you for visiting my portfolio! 👾