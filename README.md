# Muttahir Islam — IntelliJ-themed Portfolio

A pixel-perfect IntelliJ IDEA High Contrast Dark themed developer portfolio built with React + Vite.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── images/          ← Drop your logo images here
│
├── src/
│   ├── components/
│   │   ├── TitleBar.jsx      IntelliJ top title bar
│   │   ├── IconRail.jsx      Left vertical icon strip
│   │   ├── Sidebar.jsx       File tree panel
│   │   ├── TabBar.jsx        Open file tabs
│   │   ├── Breadcrumb.jsx    Path breadcrumb bar
│   │   ├── StatusBar.jsx     Bottom status bar
│   │   ├── LineNumbers.jsx   Gutter line numbers
│   │   ├── SkillCard.jsx     Individual skill icon card
│   │   └── ProjectCard.jsx   Individual project card
│   │
│   ├── pages/
│   │   ├── Home.jsx          Java-styled hero page
│   │   ├── About.jsx         Education, certs, skills
│   │   ├── Projects.jsx      XML-styled project listing
│   │   ├── Experience.jsx    Kotlin-styled career timeline
│   │   └── Contact.jsx       YAML-styled contact info
│   │
│   ├── data/
│   │   └── portfolio.js  ← ✅ EDIT THIS FILE TO UPDATE CONTENT
│   │
│   ├── styles/
│   │   └── index.css         Global theme variables & base
│   │
│   ├── App.jsx               Root component
│   └── main.jsx              Entry point
│
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ How to Update Content

**All your personal data lives in one file:**

```
src/data/portfolio.js
```

### Add a new project

```js
{
  id          : 'my-new-project',
  name        : 'My New Project',
  type        : 'Professional',
  period      : 'Jan 2025 – Present',
  role        : 'Full Stack Developer',
  logo        : '/images/my-project-logo.png',  // drop image in /public/images/
  logoEmoji   : '🚀',                            // fallback if no logo
  accentColor : '#4e9cf5',
  description : 'Short description of what this project does.',
  tags        : ['Spring Boot', 'Vue.js', 'Docker'],
  link        : 'https://github.com/yourproject',
}
```

### Add a new experience entry

```js
{
  id       : 'my-company',
  company  : 'My Company',
  role     : 'Software Engineer',
  period   : 'Jan 2025 – Present',
  location : 'Lahore, Pakistan',
  current  : true,
  bullets  : [
    'Did something impactful with <hl>40%</hl> improvement.',
    'Built something great using <hl>Spring Boot</hl>.',
  ],
}
```

> Use `<hl>text</hl>` inside bullets to highlight numbers/keywords in orange.

### Add project logo images

1. Drop your image into `/public/images/` (e.g. `orderlab.png`)
2. In `portfolio.js`, set `logo: '/images/orderlab.png'`

### Add skill icon images

1. Drop your image into `/public/images/` (e.g. `java.svg`)
2. In `portfolio.js`, set `imgSrc: '/images/java.svg'` on the skill object

---

## ⌨️ Keyboard Shortcuts

| Shortcut              | Action                  |
|-----------------------|-------------------------|
| `Alt + →`             | Next tab                |
| `Alt + ←`             | Previous tab            |

---

## 🎨 Theme

IntelliJ IDEA High Contrast Dark — all colors are defined as CSS variables in:

```
src/styles/index.css
```

Key variables:
- `--accent` → `#fe8019` (orange highlights)
- `--intellij-blue` → `#4e9cf5`
- `--syn-*` → all syntax token colors

---

## 🌐 Deployment

This is a standard Vite app. Deploy to:
- **Vercel** — `vercel deploy`
- **Netlify** — drag & drop the `dist/` folder
- **GitHub Pages** — use `vite build` + `gh-pages`
