// =============================================================
//  portfolio.js  —  YOUR SINGLE SOURCE OF TRUTH
//  Edit this file to update any section of your portfolio.
// =============================================================

// ── Personal Info ─────────────────────────────────────────────
export const personalInfo = {
  name      : 'Muttahir Islam',
  firstName : 'Muttahir',
  lastName  : 'Islam',
  role      : 'Software Engineer',
  phone     : '+1 (216) 408 3651',
  email     : 'hire@muttahirislam.dev',
  github    : 'https://github.com/keepcodingmuttahir',
  linkedin  : 'https://linkedin.com/in/muttahirislam',
  location  : 'Ohio, United States.',
  available : true,

  // GitHub avatar is used automatically.
  // To use a local image, put it in /public/images/ and set:
  //   photo: '/images/your-photo.jpg'
  photo     : 'https://avatars.githubusercontent.com/keepcodingmuttahir',

  bio: `Software Engineer specializing in Java, Spring Boot, Vue.js,
Quasar, React & AI integrations. Building enterprise-level
cloud-friendly software with 20+ production-ready features
in full compliance with security & data privacy standards.`,
};

// ── Education ─────────────────────────────────────────────────
export const education = {
  degree     : 'BSc Information Technology',
  university : 'Punjab University College of IT (PUCIT)',
  cgpa       : '3.54 / 4.00',
};

// ── Certifications ────────────────────────────────────────────
// Add as many objects as you need.
export const certifications = [
  {
    id     : 'cloud-fundamentals',
    name   : 'Cloud Fundamentals',
    issuer : 'Coursera',
    icon   : '☁',
    link   : 'https://www.coursera.org/account/accomplishments/verify/EEHWGRUS43CP',
  },
  {
    id     : 'intro-aws',
    name   : 'Introduction to AWS',
    issuer : 'Coursera',
    icon   : '☁',
    link   : 'https://www.coursera.org/account/accomplishments/verify/C45CLVYNHFHZ',
  },
];

// ── Skills ────────────────────────────────────────────────────
// icon: use an emoji, or set imgSrc: '/images/skill-icon.png' instead.
export const skills = {
  languages: [
  { id: 'java',    name: 'Java',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { id: 'js',      name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { id: 'dotnet',  name: '.NET',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { id: 'csharp',  name: 'C#',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { id: 'cpp',     name: 'C++',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { id: 'html',    name: 'HTML',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { id: 'css',     name: 'CSS',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
],

  frameworks: [
    { id: 'springboot', name: 'Spring Boot',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { id: 'vuejs',      name: 'Vue.js',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { id: 'quasar',     name: 'Quasar',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quasar/quasar-original.svg' },
    { id: 'react',      name: 'React',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { id: 'ai',         name: 'AI Integrations',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' }, // closest visual
  ],

  tools: [
    { 
  id: 'keycloak', 
  name: 'Keycloak', 
  icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/keycloak.svg' 
},
    { id: 'docker',     name: 'Docker',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { id: 'kubernetes', name: 'Kubernetes',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { id: 'aws',        name: 'AWS',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { id: 'gitlab',     name: 'GitLab',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
    { id: 'postman',    name: 'Postman',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { id: 'intellij',   name: 'IntelliJ',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
    { id: 'jira',       name: 'Jira',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
    { id: 'sourcetree', name: 'Sourcetree',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sourcetree/sourcetree-original.svg' },
    { id: 'slack',      name: 'Slack',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
    { id: 'mattermost', name: 'Mattermost',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mattermost/mattermost-original.svg' },
    { id: 'git',        name: 'Git',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { id: 'vscode',     name: 'VS Code',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  ],
};

// ── Projects ──────────────────────────────────────────────────
// logo     : path to a local image in /public/images/, e.g. '/images/orderlab.png'
// logoEmoji: fallback emoji if no logo image is set
// tags     : tech stack badges shown on the card
// link     : optional live/github URL
export const projects = [
  {
    id          : 'orderlab',
    name        : 'OrderLab',
    type        : 'Professional',
    period      : 'Oct 2023 – May 2025',
    role        : 'Full Stack Developer',
    logo        : '/images/OLAB_LOGO.png',                      // e.g. '/images/orderlab.png'
    accentColor : '#ddddddff',
    description : `Co-developed a B2B platform to optimize and automate the supply chain
and procurement process as part of a 5-person team, using Spring Boot,
Vue.js, Keycloak and collaborative agile development practices.
Delivered full-stack features and managed production deployments.`,
    tags        : ['Spring Boot', 'Vue.js', 'Keycloak', 'Microservices', 'Docker', 'Kafka'],
    link        : null,
  },
  {
    id          : 'munasib',
    name        : 'Munasib',
    type        : 'Professional',
    period      : 'Oct 2025 – Present',
    role        : 'Full Stack Developer',
    logo        : 'images/munasib-logo.png',                      // e.g. '/images/munasib.png'
    accentColor : '#b8bb26',
    description : `Developing an AI-driven e-commerce platform focused on intelligent
pricing interactions such as negotiation and enhanced buyer–seller
engagement, enabling faster, smarter, and more dynamic online
transactions at scale.`,
    tags        : ['Spring Boot', 'Vue.js', 'AI Integration', 'Microservices', 'Keycloak'],
    link        : null,
  },
  {
    id          : 'asaan-rasta',
    name        : 'Asaan Rasta',
    type        : 'Academic (FYP)',
    period      : 'Final Year Project',
    role        : 'Developer',
    logo        : null,                      // e.g. '/images/asaan-rasta.png'
    logoEmoji   : '🗺',
    accentColor : '#8ec07c',
    description : `Route finder app providing the best local transport routes to help
school-going, university-going, and office-going people who cannot
afford expensive ride-hailing services.`,
    tags        : ['.NET', 'React', 'Maps API', 'Route Optimization'],
    link        : null,
  },
];

// ── Experience ────────────────────────────────────────────────
// bullets: use <hl>text</hl> to highlight a word/number in accent color.
export const experience = [
  {
    id       : 'redmath',
    company  : 'Redmath',
    role     : 'Software Engineer',
    period   : 'Aug 2023 – May 2025',
    location : 'Lahore, Pakistan',
    current  : true,
    bullets  : [
      'Translated complex business requirements into scalable technical solutions, directly contributing to faster release cycles and improved system reliability.',
      'Designed and deployed high-performance, secure REST APIs with Spring Boot, reducing API response times by <hl>40%</hl> and increasing overall service stability.',
      'Led multiple Proof of Concept efforts and delivered critical features across distributed systems, leveraging <hl>Kafka</hl>, Feign, Apache Ignite, and MySQL to support real-time data flow.',
      'Overhauled the authentication layer by upgrading and customizing <hl>Keycloak</hl>, resolving major compatibility issues and reducing login-related support tickets by <hl>60%</hl>.',
    ],
  },
  {
    id       : 'devsinc',
    company  : 'Devsinc',
    role     : 'Campus Ambassador',
    period   : 'Oct 2022 – Jul 2023',
    location : 'Lahore, Pakistan',
    current  : false,
    bullets  : [
      'Helped students bridge the gap between industry and academia by organizing boot camps and student events across campus.',
    ],
  },
  {
    id       : 'pucit-ta',
    company  : 'Punjab University (PUCIT)',
    role     : 'Teaching Assistant',
    period   : 'Sep 2021 – Apr 2022',
    location : 'Lahore, Pakistan',
    current  : false,
    bullets  : [
      'Supported students in lab sessions across core CS courses, strengthened programming concepts and boosted overall academic performance.',
    ],
  },
];
