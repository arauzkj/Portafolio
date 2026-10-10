# Portafolio and blog
# Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

# Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.
## Project Structure overview

```
└── 📁Portafolio

    └── 📁src
        └── 📁components
        └── 📁content
        └── 📁db // drizzle schemas
        └── 📁i18n // languages config
        └── 📁layouts // Layouts for astroo
        └── 📁lib
            ├── auth-client.ts
            ├── auth.ts
        └── 📁loaders // 
        └── 📁pages // Frond-End
            └── 📁[lang] // This in the build will be the configuratin for both languages /es and /en
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
            └── 📁api //Back-End
                └── 📁auth // better auth config
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
```

## Project Architecture
-

### Back End API


### Vitest Test
-  ` \test` in this folder have all the test 
-   Before change something be sure with the documentation of vitets


### Front End


### Typescript/React

