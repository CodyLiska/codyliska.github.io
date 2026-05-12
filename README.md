# CodyLiska.github.io

This repository hosts the source for **Cody Liska’s personal website / blog**, published via GitHub Pages.

## Live

- [https://portfolio.codyliska.com](https://portfolio.codyliska.com)

## Table of Contents

- [CodyLiska.github.io](#codyliskagithubio)
  - [Live](#live)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Technologies / Stack](#technologies--stack)
  - [Project Structure](#project-structure)
  - [Local Setup \& Development](#local-setup--development)
  - [Deployment / Publishing](#deployment--publishing)
  - [Customization \& Theme](#customization--theme)
  - [Future Enhancements / Roadmap](#future-enhancements--roadmap)

---

## Overview

This repository is the codebase behind my personal / portfolio / blog site, rendered via **GitHub Pages**. Posts are maintained in Markdown, integrated with a site generator, Jekyll.

This site provides a flexible platform to host blog posts, project pages, about section, and more — with source versioned via Git.

## Technologies / Stack

- **Jekyll** for static site generation
- **Markdown** files for posts / pages
- **Liquid** templating (if Jekyll)
- **Tailwind CSS** (for styling)
- GitHub Pages as hosting

## Project Structure

```
/
├── _config.yml                ← Jekyll config
├── _layouts/                  ← Layout templates (e.g. default, post)
├── _includes/                 ← Shared partials (header, footer, nav)
├── _posts/                    ← Blog posts in Markdown
├── assets/                    ← CSS, JS, images, fonts
├── css/                       ← Stylesheets (e.g. Tailwind output)
├── js/                        ← JavaScript for interactivity
├── index.html                 ← Homepage (or generated)
├── about.md / about.html      ← About / profile page
├── README.md                  ← This file
└── .gitignore                 ← Files to ignore in version control
```

## Local Setup & Development

1. **Clone** the repository

   ```bash
   git clone https://github.com/CodyLiska/codyliska.github.io.git
   cd codyliska.github.io
   ```

2. **Install dependencies**
   - For Jekyll setups: `bundle install`
   - For Tailwind / Node: `npm install`

3. **Serve locally**

   ```bash
   bundle exec jekyll serve
   ```

   or

   ```bash
   npm run dev
   ```

4. **Edit / add content** (posts in `_posts/`, pages like `about.md`, styles in `assets/`).

## Deployment / Publishing

GitHub Pages builds and serves automatically on push.

- Configure Pages in repo settings.
- Ensure CSS is built before push if Tailwind/Node is used.

## Customization & Theme

- `_config.yml` for metadata and config
- `_layouts`, `_includes` for structure
- Tailwind config for styles
- Add SEO, analytics, comments if needed

## Future Enhancements / Roadmap

- Add **tag pages / categories**
- Implement **search** (Algolia/Lunr)
- Add **RSS / Atom feed**
- Comments (Giscus, Disqus, Staticman)
- Dark mode toggle
- Accessibility improvements
- CI/CD for build & deploy
