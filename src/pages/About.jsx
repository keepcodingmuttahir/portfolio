import React from 'react';
import LineNumbers from '../components/LineNumbers.jsx';
import SkillCard from '../components/SkillCard.jsx';
import { education, certifications, skills } from '../data/portfolio.js';

// ── Syntax helpers ─────────────────────────────────────────────
const Kw  = ({ c }) => <span className="syn-keyword">{ c }</span>;
const Cls = ({ c }) => <span className="syn-class">{ c }</span>;
const Str = ({ c }) => <span className="syn-string">"{ c }"</span>;
const Ann = ({ c }) => <span className="syn-annotation">{ c }</span>;
const Fn  = ({ c }) => <span className="syn-function">{ c }</span>;
const Cmt = ({ c }) => <span className="syn-comment">{ c }</span>;
const Pun = ({ c }) => <span className="syn-punct">{ c }</span>;

const CODE_LINES = [
  <><Ann c="@Component" /></>,
  <><Kw c="public class " /><Cls c="About " /><Kw c="implements " /><Cls c="Developer " /><Pun c="{" /></>,
  null,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Cmt c="// ── Education ────────────────────────────────" /></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Kw c="private final " /><Cls c="Education " /><span>education</span><Pun c=" = " /><Cls c="Education" /><Pun c="." /><Fn c="builder" /><Pun c="()" /></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Pun c="." /><Fn c="degree" /><Pun c="(" /><Str c={ education.degree } /><Pun c=")" /></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Pun c="." /><Fn c="university" /><Pun c="(" /><Str c="PUCIT, Punjab University" /><Pun c=")" /></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Pun c="." /><Fn c="cgpa" /><Pun c="(" /><span className="syn-number">{ education.cgpa }</span><Pun c=")" /></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Pun c="." /><Fn c="build" /><Pun c="();" /></>,
  null,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Cmt c="// ── Certifications ───────────────────────────" /></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Kw c="private final " /><Cls c="List" /><Pun c="<" /><Cls c="Cert" /><Pun c="> " /><span>certs</span><Pun c=" = " /><Cls c="List" /><Pun c="." /><Fn c="of" /><Pun c="(" /></>,
  ...certifications.map((cert, i) => (
    <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Kw c="new " /><Cls c="Certification" /><Pun c="(" /><Str c={ cert.name } /><Pun c={i < certifications.length - 1 ? '),' : ')' } /></>
  )),
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Pun c=");" /></>,
  null,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Cmt c="// ── Skills ───────────────────────────────────" /></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Ann c="@Override" /></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Kw c="public " /><Cls c="SkillSet " /><Fn c="getSkills" /><Pun c="() {" /></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Kw c="return " /><Cls c="SkillSet" /><Pun c="." /><Fn c="builder" /><Pun c="()" /></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Pun c="." /><Fn c="languages" /><Pun c="(" /><Str c="Java, JS, .NET, HTML, CSS" /><Pun c=")" /></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Pun c="." /><Fn c="frameworks" /><Pun c="(" /><Str c="Spring Boot, Vue.js, Quasar, React" /><Pun c=")" /></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Pun c="." /><Fn c="tools" /><Pun c="(" /><Str c="Docker, K8s, AWS, Keycloak, ..." /><Pun c=")" /></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Pun c="." /><Fn c="build" /><Pun c="();" /></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Pun c="}" /></>,
  <><Pun c="}" /></>,
];

const st = {
  wrapper: {
    display   : 'flex',
    height    : '100%',
    overflow  : 'hidden',
  },
  codePanel: {
    display  : 'flex',
    flex     : '1',
    overflow : 'hidden',
  },
  codeArea: {
    flex      : '1',
    padding   : '20px 0 20px 18px',
    overflowY : 'auto',
    lineHeight: '22px',
  },
  codeLine: {
    minHeight : '22px',
    fontSize  : '13px',
    display   : 'flex',
    alignItems: 'baseline',
    flexWrap  : 'wrap',
  },
  rightPanel: {
    width         : '340px',
    flexShrink    : '0',
    background    : '#000000',
    borderLeft    : '1px solid #1e1e1e',
    overflowY     : 'auto',
    padding       : '20px',
  },
  sectionLabel: {
    fontSize      : '10px',
    fontWeight    : '700',
    textTransform : 'uppercase',
    letterSpacing : '0.12em',
    color         : '#555555',
    fontFamily    : 'Inter, sans-serif',
    marginBottom  : '10px',
    paddingBottom : '6px',
    borderBottom  : '1px solid #1e1e1e',
  },
  educBox: {
    marginBottom : '20px',
  },
  educDegree: {
    fontSize   : '13px',
    fontWeight : '700',
    color      : '#fe8019',
    fontFamily : 'Inter, sans-serif',
  },
  educUniv: {
    fontSize   : '12px',
    color      : '#a0a0a0',
    fontFamily : 'Inter, sans-serif',
    marginTop  : '3px',
  },
  educCgpa: {
    fontSize   : '11px',
    color      : '#b8bb26',
    fontFamily : 'Inter, sans-serif',
    marginTop  : '2px',
  },
  certBox: {
    marginBottom : '20px',
  },
  certItem: {
    marginBottom : '10px',
  },
  certName: {
    fontSize   : '12px',
    color      : '#fe8019',
    fontFamily : 'Inter, sans-serif',
  },
  certLink: {
    fontSize      : '10px',
    color         : '#4e9cf5',
    fontFamily    : 'Inter, sans-serif',
    textDecoration: 'none',
    display       : 'block',
    marginTop     : '2px',
  },
  skillGrid: {
    display               : 'grid',
    gridTemplateColumns   : 'repeat(3, 1fr)',
    gap                   : '8px',
    marginBottom          : '18px',
  },
};

export default function About() {
  return (
    <div style={ st.wrapper } className="fade-in">
      { /* Left: code */ }
      <div style={ st.codePanel }>
        <LineNumbers count={ CODE_LINES.length + 5 } />
        <div style={ st.codeArea }>
          { CODE_LINES.map((line, i) => (
            <div key={ i } style={ st.codeLine }>
              { line ?? <>&nbsp;</> }
            </div>
          )) }
        </div>
      </div>

      { /* Right: panel */ }
      <div style={ st.rightPanel }>

        { /* Education */ }
        <div style={ st.sectionLabel }>Education</div>
        <div style={ st.educBox }>
          <div style={ st.educDegree }>{ education.degree }</div>
          <div style={ st.educUniv }>{ education.university }</div>
          <div style={ st.educCgpa }>CGPA: { education.cgpa }</div>
        </div>

        { /* Certifications */ }
        <div style={ st.sectionLabel }>Certifications</div>
        <div style={ st.certBox }>
          { certifications.map(cert => (
            <div key={ cert.id } style={ st.certItem }>
              <div style={ st.certName }>{ cert.icon } { cert.name }</div>
              <a
                href={ cert.link }
                target="_blank"
                rel="noopener noreferrer"
                style={ st.certLink }
              >
                { cert.issuer } Certificate ↗
              </a>
            </div>
          )) }
        </div>

        { /* Languages */ }
        <div style={ st.sectionLabel }>Programming Languages</div>
        <div style={ st.skillGrid }>
          { skills.languages.map(s => (
            <SkillCard key={ s.id } icon={ s.icon } imgSrc={ s.imgSrc } name={ s.name } />
          )) }
        </div>

        { /* Frameworks */ }
        <div style={ st.sectionLabel }>Frameworks &amp; Libraries</div>
        <div style={ st.skillGrid }>
          { skills.frameworks.map(s => (
            <SkillCard key={ s.id } icon={ s.icon } imgSrc={ s.imgSrc } name={ s.name } />
          )) }
        </div>

        { /* Tools */ }
        <div style={ st.sectionLabel }>Tools &amp; DevOps</div>
        <div style={ st.skillGrid }>
          { skills.tools.map(s => (
            <SkillCard key={ s.id } icon={ s.icon } imgSrc={ s.imgSrc } name={ s.name } />
          )) }
        </div>

      </div>
    </div>
  );
}
