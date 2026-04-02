import React from 'react';
import LineNumbers from '../components/LineNumbers.jsx';
import { personalInfo } from '../data/portfolio.js';

// ── Shared token spans ─────────────────────────────────────────
const Kw   = ({ children }) => <span className="syn-keyword">{ children }</span>;
const Cls  = ({ children }) => <span className="syn-class">{ children }</span>;
const Str  = ({ children }) => <span className="syn-string">"{ children }"</span>;
const Ann  = ({ children }) => <span className="syn-annotation">{ children }</span>;
const Fn   = ({ children }) => <span className="syn-function">{ children }</span>;
const Cmt  = ({ children }) => <span className="syn-comment">{ children }</span>;
const Num  = ({ children }) => <span className="syn-number">{ children }</span>;
const Pun  = ({ children }) => <span className="syn-punct">{ children }</span>;

// Each line of the fake Java code
const CODE_LINES = [
  <><Ann>@SpringBootApplication</Ann></>,
  <><Kw>public class </Kw><Cls>MuttahirIslam </Cls><Pun>{'{'}</Pun></>,
  null,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Ann>@Value</Ann><Pun>(</Pun><Str>name</Str><Pun>)</Pun></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Kw>private </Kw><Cls>String </Cls><span>name </span><Pun>= </Pun><Str>Muttahir Islam</Str><Pun>;</Pun></>,
  null,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Ann>@Value</Ann><Pun>(</Pun><Str>role</Str><Pun>)</Pun></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Kw>private </Kw><Cls>String </Cls><span>role </span><Pun>= </Pun><Str>Software Engineer</Str><Pun>;</Pun></>,
  null,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Ann>@Value</Ann><Pun>(</Pun><Str>specialization</Str><Pun>)</Pun></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Kw>private </Kw><Cls>List</Cls><Pun>&lt;</Pun><Cls>String</Cls><Pun>&gt; </Pun><span>stack </span><Pun>= </Pun><Cls>List</Cls><Pun>.</Pun><Fn>of</Fn><Pun>(</Pun></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str>Spring Boot</Str><Pun>, </Pun><Str>Java</Str><Pun>, </Pun><Str>Vue.js</Str><Pun>,</Pun></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str>Quasar</Str><Pun>, </Pun><Str>React</Str><Pun>, </Pun><Str>AI Integrations</Str></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Pun>);</Pun></>,
  null,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Ann>@Bean</Ann></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Kw>public </Kw><Cls>String </Cls><Fn>bio</Fn><Pun>() {'{'}</Pun></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Kw>return </Kw><Str>Building enterprise-grade cloud-friendly</Str></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Pun>+ </Pun><Str>software with 20+ production-ready features</Str></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Pun>+ </Pun><Str>in compliance with security &amp; privacy standards.</Str><Pun>;</Pun></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Pun>{'}'}</Pun></>,
  null,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Kw>public static void </Kw><Fn>main</Fn><Pun>(</Pun><Cls>String</Cls><Pun>[] </Pun><span>args</span><Pun>) {'{'}</Pun></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Cls>SpringApplication</Cls><Pun>.</Pun><Fn>run</Fn><Pun>(</Pun><Cls>MuttahirIslam</Cls><Pun>.</Pun><Kw>class</Kw><Pun>, </Pun><span>args</span><Pun>);</Pun></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;<Pun>{'}'}</Pun></>,
  <><Pun>{'}'}</Pun></>,
  null,
  <><Cmt>// 🚀  Server started on port 8080</Cmt></>,
  <><Cmt>// ✅  All beans initialized successfully</Cmt></>,
  <><Cmt>// 💼  Ready to accept new opportunities</Cmt></>,
];

const styles = {
  split: {
    display   : 'flex',
    height    : '100%',
    overflow  : 'hidden',
  },
  codePanel: {
    display   : 'flex',
    flex      : '1',
    overflow  : 'hidden',
  },
  codeArea: {
    flex       : '1',
    padding    : '20px 0 20px 18px',
    overflowY  : 'auto',
    lineHeight : '22px',
  },
  codeLine: {
    minHeight  : '22px',
    display    : 'flex',
    alignItems : 'baseline',
    flexWrap   : 'wrap',
    fontSize   : '13px',
  },
  rightPanel: {
    width           : '360px',
    flexShrink      : '0',
    background      : '#000000',
    borderLeft      : '1px solid #1e1e1e',
    display         : 'flex',
    flexDirection   : 'column',
    alignItems      : 'center',
    justifyContent  : 'center',
    padding         : '40px 32px',
    gap             : '18px',
  },
  photo: {
    width        : '110px',
    height       : '110px',
    borderRadius : '50%',
    objectFit    : 'cover',
    border       : '2px solid #fe8019',
    boxShadow    : '0 0 30px rgba(254, 128, 25, 0.2)',
  },
  photoFallback: {
    width           : '110px',
    height          : '110px',
    borderRadius    : '50%',
    background      : '#1a1a1a',
    border          : '2px solid #fe8019',
    display         : 'flex',
    alignItems      : 'center',
    justifyContent  : 'center',
    fontSize        : '40px',
  },
  name: {
    fontSize   : '28px',
    fontWeight : '700',
    color      : '#e8e8e8',
    textAlign  : 'center',
    lineHeight : '1.2',
    fontFamily : 'Inter, sans-serif',
  },
  nameAccent: {
    color : '#fe8019',
  },
  role: {
    fontSize      : '12px',
    color         : '#a0a0a0',
    textAlign     : 'center',
    fontFamily    : 'Inter, sans-serif',
    letterSpacing : '0.05em',
  },
  bio: {
    fontSize   : '12px',
    color      : '#888888',
    textAlign  : 'center',
    lineHeight : '1.75',
    fontFamily : 'Inter, sans-serif',
    maxWidth   : '300px',
  },
  btnRow: {
    display        : 'flex',
    gap            : '10px',
    flexWrap       : 'wrap',
    justifyContent : 'center',
  },
  btnPrimary: {
    padding         : '8px 20px',
    borderRadius    : '5px',
    fontSize        : '12px',
    fontWeight      : '600',
    cursor          : 'pointer',
    border          : 'none',
    fontFamily      : 'Inter, sans-serif',
    background      : '#fe8019',
    color           : '#000000',
    transition      : 'all 0.2s ease',
    textDecoration  : 'none',
    display         : 'inline-flex',
    alignItems      : 'center',
    gap             : '5px',
  },
  btnGhost: {
    padding         : '8px 20px',
    borderRadius    : '5px',
    fontSize        : '12px',
    fontWeight      : '600',
    cursor          : 'pointer',
    fontFamily      : 'Inter, sans-serif',
    background      : 'transparent',
    color           : '#a0a0a0',
    border          : '1px solid #2a2a2a',
    transition      : 'all 0.2s ease',
    textDecoration  : 'none',
    display         : 'inline-flex',
    alignItems      : 'center',
    gap             : '5px',
  },
};

export default function Home({ onTabChange }) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div style={ styles.split } className="fade-in">
      { /* Left: code panel */ }
      <div style={ styles.codePanel }>
        <LineNumbers count={ CODE_LINES.length + 5 } />
        <div style={ styles.codeArea }>
          { CODE_LINES.map((line, i) => (
            <div key={ i } style={ styles.codeLine }>
              { line ?? <>&nbsp;</> }
            </div>
          )) }
        </div>
      </div>

      { /* Right: hero panel */ }
      <div style={ styles.rightPanel }>
        { imgError
          ? <div style={ styles.photoFallback }>👤</div>
          : (
            <img
              src={ personalInfo.photo }
              alt={ personalInfo.name }
              style={ styles.photo }
              onError={ () => setImgError(true) }
            />
          )
        }

        <div style={ styles.name }>
          { personalInfo.firstName }{' '}
          <span style={ styles.nameAccent }>{ personalInfo.lastName }</span>
        </div>

        <div style={ styles.role }>☕ { personalInfo.role }</div>

        <div style={ styles.bio }>
          Specializing in Java, Spring Boot, Vue.js, Quasar, React &amp; AI integrations.
          Building enterprise-level cloud-friendly software with 20+ production-ready features.
        </div>

        <div style={ styles.btnRow }>
          <button
            style={ styles.btnPrimary }
            onClick={ () => onTabChange('projects') }
          >
            View Projects →
          </button>
          <a
            href={ `mailto:${ personalInfo.email }` }
            style={ styles.btnGhost }
          >
            Hire Me ✉
          </a>
        </div>
      </div>
    </div>
  );
}
