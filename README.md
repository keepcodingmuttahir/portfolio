# Muttahir Islam — IntelliJ-themed Portfolio

A pixel-perfect IntelliJ IDEA High Contrast Dark themed developer portfolio built with React + Vite.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## 📧 EmailJS Template Setup (IMPORTANT)

Your EmailJS credentials are already wired in. You just need to make sure
your template on emailjs.com uses these exact variable names:

Go to → EmailJS Dashboard → Email Templates → your template → Edit

Set the template body to:

```
Subject: {{subject}}

You have a new message from your portfolio website.

From    : {{from_name}}
Email   : {{from_email}}
─────────────────────────────────────

{{message}}

─────────────────────────────────────
Sent via muttahirislam.dev
```

And set:
  To email  →  hire@muttahirislam.dev
  Reply To  →  {{reply_to}}

Save the template. That's it — the form will now send real emails.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── images/            ← Drop logo images here
│
├── src/
│   ├── data/
│   │   └── portfolio.js   ← ✅ EDIT THIS FILE to update all content
│   │
│   ├── components/
│   │   ├── TitleBar.jsx
│   │   ├── IconRail.jsx
│   │   ├── Sidebar.jsx
│   │   ├── TabBar.jsx
│   │   ├── Breadcrumb.jsx
│   │   ├── StatusBar.jsx
│   │   ├── LineNumbers.jsx
│   │   ├── SkillCard.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ContactModal.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx        (Java syntax)
│   │   ├── About.jsx       (Java syntax)
│   │   ├── Projects.jsx    (XML syntax)
│   │   ├── Experience.jsx  (Kotlin syntax)
│   │   └── Contact.jsx     (YAML syntax)
│   │
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
```

---

## ✏️ How to Update Content

All your data lives in one file: `src/data/portfolio.js`

### Add a new project

```js
{
  id          : 'new-project',
  name        : 'My Project',
  type        : 'Professional',
  period      : 'Jan 2025 – Present',
  role        : 'Full Stack Developer',
  logo        : '/images/myproject.png',  // place image in /public/images/
  logoEmoji   : '🚀',                     // fallback if no logo
  description : 'What the project does.',
  tags        : ['Spring Boot', 'Vue.js'],
  link        : 'https://github.com/...',
}
```

### Add a new experience entry

```js
{
  id       : 'company-id',
  company  : 'Company Name',
  role     : 'Software Engineer',
  period   : 'Jan 2025 – Present',
  location : 'Lahore, Pakistan',
  current  : true,
  bullets  : [
    'Did something great with <hl>40%</hl> improvement.',
  ],
}
```

Use `<hl>text</hl>` inside bullets to highlight in orange.

### Add project logos

1. Drop image into `/public/images/` (e.g. `orderlab.png`)
2. Set `logo: '/images/orderlab.png'` in `portfolio.js`

---

## ⌨️ Keyboard Shortcuts

| Shortcut    | Action        |
|-------------|---------------|
| `Alt + →`   | Next tab      |
| `Alt + ←`   | Previous tab  |
| `Escape`    | Close modal   |

---

## 🌐 Deployment

```bash
npm run build   # outputs to /dist
```

Deploy the `/dist` folder to Vercel, Netlify, or GitHub Pages.
