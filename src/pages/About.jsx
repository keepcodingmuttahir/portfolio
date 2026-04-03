import React from 'react';
import LineNumbers from '../components/LineNumbers.jsx';
import SkillCard from '../components/SkillCard.jsx';
import { education, certifications, skills } from '../data/portfolio.js';

// ── Syntax token components ────────────────────────────────────
const Kw  = ({ children }) => <span className="syn-keyword">{ children }</span>;
const Cls = ({ children }) => <span className="syn-class">{ children }</span>;
const Str = ({ children }) => <span className="syn-string">{ children }</span>;
const Ann = ({ children }) => <span className="syn-annotation">{ children }</span>;
const Fn  = ({ children }) => <span className="syn-function">{ children }</span>;
const Cmt = ({ children }) => <span className="syn-comment">{ children }</span>;
const Num = ({ children }) => <span className="syn-number">{ children }</span>;
const Pun = ({ children }) => <span className="syn-punct">{ children }</span>;

const codeLine = {
  minHeight  : '22px',
  display    : 'block',
  lineHeight : '22px',
  fontSize   : '13px',
  whiteSpace : 'pre',
};

const L = ({ i = '', children }) => (
  <div style={ codeLine }>{ i }{ children }</div>
);

const CODE_LINES = [
  <L key="0"><Ann>{'@Component'}</Ann></L>,
  <L key="1"><Kw>{'public class '}</Kw><Cls>{'About '}</Cls><Kw>{'implements '}</Kw><Cls>{'Developer '}</Cls><Pun>{'{'}</Pun></L>,
  <div key="2" style={ codeLine }> </div>,
  <L key="4" i="    "><Kw>{'private final '}</Kw><Cls>{'Education '}</Cls>{'education'}<Pun>{' = '}</Pun><Cls>{'Education'}</Cls><Pun>{'.'}</Pun><Fn>{'builder'}</Fn><Pun>{'()'}</Pun></L>,
  <L key="5" i="        "><Pun>{'.'}</Pun><Fn>{'degree'}</Fn><Pun>{'('}</Pun><Str>{ `"${education.degree}"` }</Str><Pun>{')'}</Pun></L>,
  <L key="6" i="        "><Pun>{'.'}</Pun><Fn>{'university'}</Fn><Pun>{'('}</Pun><Str>{'"PUCIT, Punjab University"'}</Str><Pun>{')'}</Pun></L>,
  <L key="7" i="        "><Pun>{'.'}</Pun><Fn>{'cgpa'}</Fn><Pun>{'('}</Pun><Num>{ education.cgpa }</Num><Pun>{')'}</Pun></L>,
  <L key="8" i="        "><Pun>{'.'}</Pun><Fn>{'build'}</Fn><Pun>{'();'}</Pun></L>,
  <div key="9" style={ codeLine }> </div>,
  <L key="11" i="    "><Kw>{'private final '}</Kw><Cls>{'List'}</Cls><Pun>{'<'}</Pun><Cls>{'Certification'}</Cls><Pun>{'> '}</Pun>{'certs'}<Pun>{' = '}</Pun><Cls>{'List'}</Cls><Pun>{'.'}</Pun><Fn>{'of'}</Fn><Pun>{'('}</Pun></L>,
  <L key="12" i="        "><Kw>{'new '}</Kw><Cls>{'Certification'}</Cls><Pun>{'('}</Pun><Str>{'"Cloud Fundamentals"'}</Str><Pun>{', '}</Pun><Str>{'"Coursera"'}</Str><Pun>{'),'}</Pun></L>,
  <L key="13" i="        "><Kw>{'new '}</Kw><Cls>{'Certification'}</Cls><Pun>{'('}</Pun><Str>{'"Introduction to AWS"'}</Str><Pun>{', '}</Pun><Str>{'"Coursera"'}</Str><Pun>{')'}</Pun></L>,
  <L key="14" i="    "><Pun>{');'}</Pun></L>,
  <div key="15" style={ codeLine }> </div>,
  <L key="17" i="    "><Ann>{'@Override'}</Ann></L>,
  <L key="18" i="    "><Kw>{'public '}</Kw><Cls>{'SkillSet '}</Cls><Fn>{'getSkills'}</Fn><Pun>{'() {'}</Pun></L>,
  <L key="19" i="        "><Kw>{'return '}</Kw><Cls>{'SkillSet'}</Cls><Pun>{'.'}</Pun><Fn>{'builder'}</Fn><Pun>{'()'}</Pun></L>,
  <L key="20" i="            "><Pun>{'.'}</Pun><Fn>{'languages'}</Fn><Pun>{'('}</Pun><Str>{'"Java, JS, .NET, HTML, CSS"'}</Str><Pun>{')'}</Pun></L>,
  <L key="21" i="            "><Pun>{'.'}</Pun><Fn>{'frameworks'}</Fn><Pun>{'('}</Pun><Str>{'"Spring Boot, Vue.js, Quasar, React"'}</Str><Pun>{')'}</Pun></L>,
  <L key="22" i="            "><Pun>{'.'}</Pun><Fn>{'tools'}</Fn><Pun>{'('}</Pun><Str>{'"Docker, K8s, AWS, Keycloak, ..."'}</Str><Pun>{')'}</Pun></L>,
  <L key="23" i="            "><Pun>{'.'}</Pun><Fn>{'build'}</Fn><Pun>{'();'}</Pun></L>,
  <L key="24" i="    "><Pun>{'}'}</Pun></L>,
  <L key="25"><Pun>{'}'}</Pun></L>,
    <div key="30" style={ codeLine }><span className="cursor-blink" /></div>,
];

const st = {
  wrapper: {
    display  : 'flex',
    height   : '100%',
    overflow : 'hidden',
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
    overflowX : 'auto',
    lineHeight: '22px',
  },
  rightPanel: {
    width      : '340px',
    flexShrink : '0',
    background : '#000000',
    borderLeft : '1px solid #1e1e1e',
    overflowY  : 'auto',
    padding    : '20px',
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
  educBox    : { marginBottom: '20px' },
  educDegree : { fontSize: '13px', fontWeight: '700', color: '#fe8019', fontFamily: 'Inter, sans-serif' },
  educUniv   : { fontSize: '12px', color: '#a0a0a0', fontFamily: 'Inter, sans-serif', marginTop: '3px' },
  educCgpa   : { fontSize: '11px', color: '#b8bb26', fontFamily: 'Inter, sans-serif', marginTop: '2px' },
  certBox    : { marginBottom: '20px' },
  certItem   : { marginBottom: '10px' },
  certName   : { fontSize: '12px', color: '#fe8019', fontFamily: 'Inter, sans-serif' },
  certLink   : {
    fontSize: '10px', color: '#4e9cf5', fontFamily: 'Inter, sans-serif',
    textDecoration: 'none', display: 'block', marginTop: '2px',
  },
  skillGrid : {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '18px',
  },
};

export default function About() {
  return (
    <div style={ st.wrapper } className="fade-in">
      <div style={ st.codePanel }>
        <LineNumbers count={ CODE_LINES.length + 5 } />
        <div style={ st.codeArea }>{ CODE_LINES }</div>
      </div>

      <div style={ st.rightPanel }>
        <div style={ st.sectionLabel }>Education</div>
        <div style={ st.educBox }>
          <div style={ st.educDegree }>{ education.degree }</div>
          <div style={ st.educUniv }>{ education.university }</div>
          <div style={ st.educCgpa }>CGPA: { education.cgpa }</div>
        </div>

        <div style={ st.sectionLabel }>Certifications</div>
        <div style={ st.certBox }>
          { certifications.map(cert => (
            <div key={ cert.id } style={ st.certItem }>
              <div style={ st.certName }>{ cert.icon } { cert.name }</div>
              <a href={ cert.link } target="_blank" rel="noopener noreferrer" style={ st.certLink }>
                { cert.issuer } Certificate ↗
              </a>
            </div>
          )) }
        </div>

        <div style={ st.sectionLabel }>Programming Languages</div>
        <div style={ st.skillGrid }>
          { skills.languages.map(s => (
            <SkillCard key={ s.id } imgSrc={ s.icon } name={ s.name } />
          )) }
        </div>

        <div style={ st.sectionLabel }>Frameworks &amp; Libraries</div>
        <div style={ st.skillGrid }>
          { skills.frameworks.map(s => (
            <SkillCard key={ s.id } imgSrc={ s.icon } name={ s.name } />
          )) }
        </div>

        <div style={ st.sectionLabel }>Tools &amp; DevOps</div>
        <div style={ st.skillGrid }>
          { skills.tools.map(s => (
            <SkillCard key={ s.id } imgSrc={ s.icon } name={ s.name } />
          )) }
        </div>
      </div>
    </div>
  );
}
