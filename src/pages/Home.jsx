import React from 'react';
import LineNumbers from '../components/LineNumbers.jsx';
import { personalInfo } from '../data/portfolio.js';

// ── Syntax token components ────────────────────────────────────
const Kw  = ({ children }) => <span className="syn-keyword">{ children }</span>;
const Cls = ({ children }) => <span className="syn-class">{ children }</span>;
const Str = ({ children }) => <span className="syn-string">{ children }</span>;
const Ann = ({ children }) => <span className="syn-annotation">{ children }</span>;
const Fn  = ({ children }) => <span className="syn-function">{ children }</span>;
const Cmt = ({ children }) => <span className="syn-comment">{ children }</span>;
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
  <L key="0"><Ann>{'@SpringBootApplication'}</Ann></L>,
  <L key="1"><Kw>{'public class '}</Kw><Cls>{'MuttahirIslam '}</Cls><Pun>{'{'}</Pun></L>,
  <div key="2" style={ codeLine }> </div>,
  <L key="3" i="    "><Ann>{'@Value'}</Ann><Pun>{'('}</Pun><Str>{'"name"'}</Str><Pun>{')'}</Pun></L>,
  <L key="4" i="    "><Kw>{'private '}</Kw><Cls>{'String '}</Cls>{'name '}<Pun>{'= '}</Pun><Str>{'"Muttahir Islam"'}</Str><Pun>{';'}</Pun></L>,
  <div key="5" style={ codeLine }> </div>,
  <L key="6" i="    "><Ann>{'@Value'}</Ann><Pun>{'('}</Pun><Str>{'"role"'}</Str><Pun>{')'}</Pun></L>,
  <L key="7" i="    "><Kw>{'private '}</Kw><Cls>{'String '}</Cls>{'role '}<Pun>{'= '}</Pun><Str>{'"Software Engineer"'}</Str><Pun>{';'}</Pun></L>,
<div key="8" style={ codeLine }> </div>,
<L key="9" i="    "><Ann>{'@Value'}</Ann><Pun>{'('}</Pun><Str>{'"specialization"'}</Str><Pun>{')'}</Pun></L>,
<L key="10" i="    "><Kw>{'private '}</Kw><Cls>{'List'}</Cls><Pun>{'<'}</Pun><Cls>{'String'}</Cls><Pun>{'> '}</Pun>{'stack '}<Pun>{'= '}</Pun><Cls>{'List'}</Cls><Pun>{'.'}</Pun><Fn>{'of'}</Fn><Pun>{'('}</Pun></L>,
<L key="11" i="        "><Str>{'"Spring Boot"'}</Str><Pun>{', '}</Pun><Str>{'"Java"'}</Str><Pun>{', '}</Pun><Str>{'"Spring Framework"'}</Str><Pun>{', '}</Pun><Str>{'"Hibernate"'}</Str><Pun>{','}</Pun></L>,
<L key="12" i="        "><Str>{'"JPA"'}</Str><Pun>{', '}</Pun><Str>{'"REST APIs"'}</Str><Pun>{', '}</Pun><Str>{'"Microservices"'}</Str><Pun>{', '}</Pun><Str>{'"MVC Architecture"'}</Str><Pun>{','}</Pun></L>,
<L key="13" i="        "><Str>{'"MySQL"'}</Str><Pun>{', '}</Pun><Str>{'"PostgreSQL"'}</Str><Pun>{', '}</Pun><Str>{'"MongoDB"'}</Str><Pun>{', '}</Pun><Str>{'"H2"'}</Str><Pun>{','}</Pun></L>,
<L key="14" i="        "><Str>{'"JavaScript"'}</Str><Pun>{', '}</Pun><Str>{'"Vue.js"'}</Str><Pun>{', '}</Pun><Str>{'"Quasar"'}</Str><Pun>{', '}</Pun><Str>{'"React"'}</Str><Pun>{','}</Pun></L>,
<L key="15" i="        "><Str>{'"HTML"'}</Str><Pun>{', '}</Pun><Str>{'"CSS"'}</Str><Pun>{', '}</Pun><Str>{'"Git"'}</Str><Pun>{', '}</Pun><Str>{'"GitHub"'}</Str><Pun>{','}</Pun></L>,
<L key="16" i="        "><Str>{'"Docker"'}</Str><Pun>{', '}</Pun><Str>{'"Maven"'}</Str><Pun>{', '}</Pun><Str>{'"Gradle"'}</Str><Pun>{', '}</Pun><Str>{'"Postman"'}</Str><Pun>{','}</Pun></L>,
<L key="17" i="        "><Str>{'"JUnit"'}</Str><Pun>{', '}</Pun><Str>{'"Mockito"'}</Str><Pun>{', '}</Pun><Str>{'"CI/CD"'}</Str><Pun>{', '}</Pun><Str>{'"Vercel"'}</Str><Pun>{','}</Pun></L>,
<L key="18" i="        "><Str>{'"AI Integrations"'}</Str><Pun>{', '}</Pun><Str>{'"LLM APIs"'}</Str><Pun>{', '}</Pun><Str>{'"Claude Code"'}</Str><Pun>{', '}</Pun><Str>{'"Prompt Engineering"'}</Str></L>,
<L key="19" i="    "><Pun>{');'}</Pun></L>,
  <div key="20" style={ codeLine }> </div>,
<L key="21" i="    "><Ann>{'@Bean'}</Ann></L>,
<L key="22" i="    "><Kw>{'public '}</Kw><Cls>{'String '}</Cls><Fn>{'bio'}</Fn><Pun>{'() {'}</Pun></L>,
<L key="23" i="        "><Kw>{'return '}</Kw><Str>{'"Building scalable, secure, and cloud-native applications "'}</Str></L>,
<L key="24" i="               "><Pun>{'+ '}</Pun><Str>{'"using microservices architecture, RESTful APIs, and distributed systems "'}</Str></L>,
<L key="25" i="               "><Pun>{'+ '}</Pun><Str>{'"optimized for performance, reliability, and continuous delivery."'}</Str><Pun>{';'}</Pun></L>,
<L key="26" i="    "><Pun>{'}'}</Pun></L>,
  <div key="27" style={ codeLine }> </div>,
  <L key="28" i="    "><Kw>{'public static void '}</Kw><Fn>{'main'}</Fn><Pun>{'('}</Pun><Cls>{'String'}</Cls><Pun>{'[] '}</Pun>{'args'}<Pun>{') {'}</Pun></L>,
  <L key="29" i="        "><Cls>{'SpringApplication'}</Cls><Pun>{'.'}</Pun><Fn>{'run'}</Fn><Pun>{'('}</Pun><Cls>{'MuttahirIslam'}</Cls><Pun>{'.'}</Pun><Kw>{'class'}</Kw><Pun>{', '}</Pun>{'args'}<Pun>{');'}</Pun></L>,
  <L key="30" i="    "><Pun>{'}'}</Pun></L>,
  <L key="31"><Pun>{'}'}</Pun></L>,
  <div key="32" style={ codeLine }><span className="cursor-blink" /></div>,
];

const st = {
  split: {
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
    width           : '360px',
    flexShrink      : '0',
    background      : 'rgba(0,0,0,0.6)',
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
    boxShadow    : '0 0 30px rgba(254,128,25,0.2)',
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
  nameAccent : { color: '#fe8019' },
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
    padding        : '8px 20px',
    borderRadius   : '5px',
    fontSize       : '12px',
    fontWeight     : '600',
    cursor         : 'pointer',
    border         : 'none',
    fontFamily     : 'Inter, sans-serif',
    background     : '#fe8019',
    color          : '#000000',
    transition     : 'all 0.2s ease',
    textDecoration : 'none',
    display        : 'inline-flex',
    alignItems     : 'center',
    gap            : '5px',
  },
  btnGhost: {
    padding        : '8px 20px',
    borderRadius   : '5px',
    fontSize       : '12px',
    fontWeight     : '600',
    cursor         : 'pointer',
    fontFamily     : 'Inter, sans-serif',
    background     : 'transparent',
    color          : '#a0a0a0',
    border         : '1px solid #2a2a2a',
    transition     : 'all 0.2s ease',
    textDecoration : 'none',
    display        : 'inline-flex',
    alignItems     : 'center',
    gap            : '5px',
  },
};

export default function Home({ onTabChange, onContactOpen }) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div style={ st.split } className="fade-in">
      <div style={ st.codePanel }>
        <LineNumbers count={ CODE_LINES.length + 5 } />
        <div style={ st.codeArea }>{ CODE_LINES }</div>
      </div>

      <div style={ st.rightPanel }>
        { imgError
          ? <div style={ st.photoFallback }>👤</div>
          : (
            <img
              src={ personalInfo.photo }
              alt={ personalInfo.name }
              style={ st.photo }
              onError={ () => setImgError(true) }
            />
          )
        }

        <div style={ st.name }>
          { personalInfo.firstName }{ ' ' }
          <span style={ st.nameAccent }>{ personalInfo.lastName }</span>
        </div>

        <div style={ st.role }> { personalInfo.role }</div>
        <div style={ st.bio }>
  Specializing in cloud-native application development using Java, Spring Boot, modern frontend frameworks, and microservices architecture.
  Building scalable, secure, and high-performance systems with distributed design, RESTful APIs, and production-ready engineering practices.
</div>

        <div style={ st.btnRow }>
          <button
            style={ st.btnPrimary }
            onClick={ () => onTabChange('projects') }
          >
            View Projects →
          </button>
          <button
            style={ st.btnGhost }
            onClick={ onContactOpen }
          >
            Hire Me ✉
          </button>
        </div>
      </div>
    </div>
  );
}
