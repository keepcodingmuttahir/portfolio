import React from 'react';
import LineNumbers from '../components/LineNumbers.jsx';
import { personalInfo } from '../data/portfolio.js';

// ── YAML token helpers ─────────────────────────────────────────
const Key  = ({ c }) => <span className="syn-property">{ c }</span>;
const Val  = ({ c }) => <span className="syn-string">{ c }</span>;
const Cmt  = ({ c }) => <span className="syn-comment">{ c }</span>;
const Pun  = ({ c }) => <span className="syn-punct">{ c }</span>;
const Bool = ({ c }) => <span className="syn-number">{ c }</span>;
const Tag  = ({ c }) => <span className="syn-tag">{ c }</span>;

const CODE_LINES = [
  <><Cmt c="# contact.yaml — Muttahir Islam" /></>,
  <><Cmt c="# Reach out via any of the channels below" /></>,
  null,
  <><Tag c="socials" /><Pun c=":" /></>,
  <>&nbsp;&nbsp;<Key c="email" /><Pun c=": " /><Val c={ personalInfo.email } /></>,
  <>&nbsp;&nbsp;<Key c="github" /><Pun c=": " /><Val c={ personalInfo.github } /></>,
  <>&nbsp;&nbsp;<Key c="linkedin" /><Pun c=": " /><Val c={ personalInfo.linkedin } /></>,
  <>&nbsp;&nbsp;<Key c="location" /><Pun c=": " /><Val c={ personalInfo.location } /></>,
  null,
  <><Tag c="status" /><Pun c=":" /></>,
  <>&nbsp;&nbsp;<Key c="available" /><Pun c=": " /><Bool c={ String(personalInfo.available) } /></>,
  <>&nbsp;&nbsp;<Key c="openTo" /><Pun c=": " /><Val c="Full-time, Freelance, Remote" /></>,
  null,
  <><Cmt c="# Response time: within 24 hours" /></>,
  <><Cmt c="# Best way to reach me: email or LinkedIn" /></>,
];

const st = {
  wrapper: {
    display         : 'flex',
    height          : '100%',
    overflow        : 'hidden',
    alignItems      : 'center',
    justifyContent  : 'center',
  },
  inner: {
    display        : 'flex',
    flexDirection  : 'column',
    alignItems     : 'center',
    gap            : '32px',
    width          : '100%',
    height         : '100%',
    padding        : '40px 60px',
    overflowY      : 'auto',
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
    marginTop  : '-20px',
  },
  codeBox: {
    background    : '#0a0a0a',
    border        : '1px solid #2a2a2a',
    borderRadius  : '8px',
    width         : '100%',
    maxWidth      : '620px',
    overflow      : 'hidden',
  },
  codeBoxHeader: {
    background    : '#000000',
    borderBottom  : '1px solid #1e1e1e',
    padding       : '8px 16px',
    display       : 'flex',
    alignItems    : 'center',
    gap           : '8px',
  },
  codeBoxTitle: {
    fontSize   : '12px',
    color      : '#666666',
    fontFamily : 'Inter, sans-serif',
  },
  codeInner: {
    display   : 'flex',
    padding   : '16px 0',
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
    flex      : '1',
    padding   : '0 0 0 16px',
  },
  codeLine: {
    minHeight  : '22px',
    fontSize   : '13px',
    lineHeight : '22px',
    display    : 'flex',
    alignItems : 'baseline',
    flexWrap   : 'wrap',
  },
  contactLinks: {
    display        : 'flex',
    gap            : '12px',
    flexWrap       : 'wrap',
    justifyContent : 'center',
  },
  linkBtn: (color) => ({
    display         : 'inline-flex',
    alignItems      : 'center',
    gap             : '8px',
    padding         : '10px 20px',
    borderRadius    : '6px',
    border          : `1px solid ${ color }33`,
    background      : `${ color }11`,
    color           : color,
    fontSize        : '12px',
    fontFamily      : 'Inter, sans-serif',
    fontWeight      : '600',
    textDecoration  : 'none',
    transition      : 'all 0.2s ease',
    cursor          : 'pointer',
  }),
};

export default function Contact() {
  return (
    <div style={ st.wrapper } className="fade-in">
      <div style={ st.inner }>

        <div style={ st.heading }>contact.yaml</div>

        <div style={ st.sub }>
          Feel free to reach out. I am always open to new opportunities,
          collaborations, and interesting projects.
        </div>

        { /* YAML Code Box */ }
        <div style={ st.codeBox }>
          <div style={ st.codeBoxHeader }>
            <span style={ { fontSize: '13px' } }>🔸</span>
            <span style={ st.codeBoxTitle }>contact.yaml</span>
          </div>
          <div style={ st.codeInner }>
            <div style={ st.lineNums }>
              { CODE_LINES.map((_, i) => (
                <span key={ i } style={ st.lineNum }>{ i + 1 }</span>
              )) }
            </div>
            <div style={ st.codeLines }>
              { CODE_LINES.map((line, i) => (
                <div key={ i } style={ st.codeLine }>
                  { line ?? <>&nbsp;</> }
                </div>
              )) }
            </div>
          </div>
        </div>

        { /* Action Buttons */ }
        <div style={ st.contactLinks }>
          <a
            href={ `mailto:${ personalInfo.email }` }
            style={ st.linkBtn('#fe8019') }
          >
            ✉ { personalInfo.email }
          </a>
          <a
            href={ personalInfo.github }
            target="_blank"
            rel="noopener noreferrer"
            style={ st.linkBtn('#6aab73') }
          >
            🐙 GitHub
          </a>
          <a
            href={ personalInfo.linkedin }
            target="_blank"
            rel="noopener noreferrer"
            style={ st.linkBtn('#4e9cf5') }
          >
            💼 LinkedIn
          </a>
        </div>

      </div>
    </div>
  );
}
