import React from 'react';
import { personalInfo } from '../data/portfolio.js';

const Key  = ({ children }) => <span className="syn-property">{ children }</span>;
const Val  = ({ children }) => <span className="syn-string">{ children }</span>;
const Cmt  = ({ children }) => <span className="syn-comment">{ children }</span>;
const Pun  = ({ children }) => <span className="syn-punct">{ children }</span>;
const Bool = ({ children }) => <span className="syn-number">{ children }</span>;
const Tag  = ({ children }) => <span className="syn-tag">{ children }</span>;

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
  <L key="3"><Tag>{'socials'}</Tag><Pun>{':'}</Pun></L>,
  <L key="4" i="  "><Key>{'phone'}</Key><Pun>{'    : '}</Pun><Val>{ personalInfo.phone }</Val></L>,
  <L key="5" i="  "><Key>{'email'}</Key><Pun>{'    : '}</Pun><Val>{ personalInfo.email }</Val></L>,
  <L key="6" i="  "><Key>{'github'}</Key><Pun>{'   : '}</Pun><Val>{ personalInfo.github }</Val></L>,
  <L key="7" i="  "><Key>{'linkedin'}</Key><Pun>{' : '}</Pun><Val>{ personalInfo.linkedin }</Val></L>,
  <L key="8" i="  "><Key>{'location'}</Key><Pun>{' : '}</Pun><Val>{ personalInfo.location }</Val></L>,
  <div key="9" style={ codeLine }> </div>,
  <L key="10"><Tag>{'status'}</Tag><Pun>{':'}</Pun></L>,
  <L key="11" i="  "><Key>{'available'}</Key><Pun>{' : '}</Pun><Bool>{ String(personalInfo.available) }</Bool></L>,
  <L key="12" i="  "><Key>{'openTo'}</Key><Pun>{'    : '}</Pun><Val>{'Full-time, Part-time, Remote.'}</Val></L>,
  <div key="13" style={ codeLine }> </div>
];

const st = {
  wrapper: {
    display        : 'flex',
    height         : '100%',
    overflow       : 'hidden',
    alignItems     : 'center',
    justifyContent : 'center',
  },
  inner: {
    display       : 'flex',
    flexDirection : 'column',
    alignItems    : 'center',
    gap           : '28px',
    width         : '100%',
    maxWidth      : '700px',
    padding       : '40px',
    overflowY     : 'auto',
  },
  heading: {
    fontSize   : '22px',
    fontWeight : '700',
    color      : '#fe8019',
    fontFamily : 'Inter, sans-serif',
    textAlign  : 'center',
  },
  sub: {
    fontSize   : '12px',
    color      : '#888888',
    fontFamily : 'Inter, sans-serif',
    textAlign  : 'center',
    lineHeight : '1.7',
    maxWidth   : '420px',
    marginTop  : '-12px',
  },
  codeBox: {
    background   : 'rgba(8,8,8,0.75)',
    border       : '1px solid #2a2a2a',
    borderRadius : '8px',
    width        : '100%',
    overflow     : 'hidden',
  },
  codeBoxHeader: {
    background   : 'rgba(0,0,0,0.7)',
    borderBottom : '1px solid #1e1e1e',
    padding      : '8px 16px',
    display      : 'flex',
    alignItems   : 'center',
    gap          : '8px',
  },
  codeBoxTitle: {
    fontSize   : '12px',
    color      : '#666666',
    fontFamily : 'Inter, sans-serif',
  },
  codeInner: {
    display : 'flex',
    padding : '16px 0',
  },
  lineNums: {
    width       : '44px',
    flexShrink  : '0',
    textAlign   : 'right',
    userSelect  : 'none',
    borderRight : '1px solid #1e1e1e',
  },
  lineNum: {
    height      : '22px',
    paddingRight: '10px',
    fontSize    : '12px',
    color       : '#333333',
    lineHeight  : '22px',
    fontFamily  : "'JetBrains Mono', monospace",
    display     : 'block',
  },
  codeLines: {
    flex    : '1',
    padding : '0 0 0 16px',
  },
  linkRow: {
    display        : 'flex',
    gap            : '12px',
    flexWrap       : 'wrap',
    justifyContent : 'center',
  },
  linkBtn: (color) => ({
    display        : 'inline-flex',
    alignItems     : 'center',
    gap            : '8px',
    padding        : '10px 20px',
    borderRadius   : '6px',
    border         : `1px solid ${ color }44`,
    background     : `${ color }11`,
    color          : color,
    fontSize       : '12px',
    fontFamily     : 'Inter, sans-serif',
    fontWeight     : '600',
    textDecoration : 'none',
    transition     : 'all 0.2s ease',
    cursor         : 'pointer',
  }),
};

export default function Contact({ onContactOpen }) {
  return (
    <div style={ st.wrapper } className="fade-in">
      <div style={ st.inner }>
        <div style={ st.heading }>contact.yaml</div>

        <div style={ st.sub }>
          Feel free to reach out. I am always open to new opportunities,
          collaborations, and interesting projects.
        </div>

        <div style={ st.codeBox }>
          <div style={ st.codeBoxHeader }>
            <span>🔸</span>
            <span style={ st.codeBoxTitle }>contact.yaml</span>
          </div>
          <div style={ st.codeInner }>
            <div style={ st.lineNums }>
              { CODE_LINES.map((_, i) => (
                <span key={ i } style={ st.lineNum }>{ i + 1 }</span>
              )) }
            </div>
            <div style={ st.codeLines }>
              { CODE_LINES }
            </div>
          </div>
        </div>

        <div style={ st.linkRow }>
          <button onClick={ onContactOpen } style={ st.linkBtn('#fe8019') }>
            ✉ { personalInfo.email }
          </button>
          <a href={ personalInfo.github } target="_blank" rel="noopener noreferrer" style={ st.linkBtn('#6aab73') }>
            🐙 GitHub
          </a>
          <a href={ personalInfo.linkedin } target="_blank" rel="noopener noreferrer" style={ st.linkBtn('#4e9cf5') }>
            💼 LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
