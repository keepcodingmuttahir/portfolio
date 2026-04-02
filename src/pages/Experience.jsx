import React from 'react';
import LineNumbers from '../components/LineNumbers.jsx';
import { experience } from '../data/portfolio.js';

// ── Kotlin syntax helpers ──────────────────────────────────────
const Kw  = ({ c }) => <span className="syn-keyword">{ c }</span>;
const Cls = ({ c }) => <span className="syn-class">{ c }</span>;
const Str = ({ c }) => <span className="syn-string">"{ c }"</span>;
const Cmt = ({ c }) => <span className="syn-comment">{ c }</span>;
const Fn  = ({ c }) => <span className="syn-function">{ c }</span>;
const Pun = ({ c }) => <span className="syn-punct">{ c }</span>;

// Render a highlight tag: <hl>40%</hl> → orange span
function renderBullet(text) {
  const parts = text.split(/(<hl>.*?<\/hl>)/g);
  return parts.map((part, i) => {
    if (part.startsWith('<hl>')) {
      const inner = part.replace(/<\/?hl>/g, '');
      return <span key={ i } className="syn-highlight">{ inner }</span>;
    }
    return <span key={ i }>{ part }</span>;
  });
}

const buildCodeLines = () => {
  const lines = [
    <><Cmt c="// Experience.kt — Muttahir Islam" /></>,
    null,
    <><Kw c="data class " /><Cls c="Experience" /><Pun c="(" /></>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;<Kw c="val " /><span>company</span><Pun c=": " /><Cls c="String" /><Pun c="," /></>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;<Kw c="val " /><span>role</span><Pun c=": " /><Cls c="String" /><Pun c="," /></>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;<Kw c="val " /><span>period</span><Pun c=": " /><Cls c="String" /><Pun c="," /></>,
    <>&nbsp;&nbsp;&nbsp;&nbsp;<Kw c="val " /><span>highlights</span><Pun c=": " /><Cls c="List" /><Pun c="<" /><Cls c="String" /><Pun c=">" /></>,
    <><Pun c=")" /></>,
    null,
    <><Kw c="val " /><span>career</span><Pun c=" = " /><Fn c="listOf" /><Pun c="(" /></>,
    null,
  ];

  experience.forEach((job, idx) => {
    lines.push(<>&nbsp;&nbsp;<Cls c="Experience" /><Pun c="(" /></>);
    lines.push(<>&nbsp;&nbsp;&nbsp;&nbsp;<span>company</span><Pun c=" = " /><Str c={ job.company } /><Pun c="," /></>);
    lines.push(<>&nbsp;&nbsp;&nbsp;&nbsp;<span>role</span><Pun c=" = " /><Str c={ job.role } /><Pun c="," /></>);
    lines.push(<>&nbsp;&nbsp;&nbsp;&nbsp;<span>period</span><Pun c=" = " /><Str c={ job.period } /><Pun c="," /></>);
    lines.push(<>&nbsp;&nbsp;&nbsp;&nbsp;<span>location</span><Pun c=" = " /><Str c={ job.location } /></>);
    if (job.bullets.length > 0) {
      lines.push(<>&nbsp;&nbsp;&nbsp;&nbsp;<span>highlights</span><Pun c=" = " /><Fn c="listOf" /><Pun c="(" /></>);
      job.bullets.slice(0, 2).forEach((b, bi) => {
        const short = b.replace(/<\/?hl>/g, '').substring(0, 42) + '...';
        lines.push(<>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Str c={ short } />{ bi < 1 ? <Pun c="," /> : null }</>);
      });
      lines.push(<>&nbsp;&nbsp;&nbsp;&nbsp;<Pun c=")," /></>);
    }
    lines.push(<>&nbsp;&nbsp;<Pun c={ idx < experience.length - 1 ? '),' : ')' } /></>);
    if (idx < experience.length - 1) lines.push(null);
  });

  lines.push(<><Pun c=")" /></>);
  return lines;
};

const CODE_LINES = buildCodeLines();

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
    width      : '380px',
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
    marginBottom  : '20px',
    paddingBottom : '6px',
    borderBottom  : '1px solid #1e1e1e',
  },
  timeline: {
    position : 'relative',
  },
  expCard: (current) => ({
    borderLeft   : `2px solid ${ current ? '#b8bb26' : '#2a2a2a' }`,
    paddingLeft  : '18px',
    marginBottom : '28px',
    position     : 'relative',
  }),
  dot: (current) => ({
    width        : '8px',
    height       : '8px',
    background   : current ? '#b8bb26' : '#fe8019',
    borderRadius : '50%',
    position     : 'absolute',
    left         : '-5px',
    top          : '4px',
    boxShadow    : current ? '0 0 8px rgba(184, 187, 38, 0.5)' : 'none',
  }),
  company: {
    fontSize   : '14px',
    fontWeight : '700',
    color      : '#fe8019',
    fontFamily : 'Inter, sans-serif',
  },
  role: {
    fontSize   : '12px',
    color      : '#a0a0a0',
    fontFamily : 'Inter, sans-serif',
    margin     : '2px 0',
  },
  meta: {
    fontSize      : '10px',
    color         : '#555555',
    fontFamily    : 'Inter, sans-serif',
    marginBottom  : '10px',
  },
  bullet: {
    fontSize     : '11px',
    color        : '#888888',
    lineHeight   : '1.7',
    fontFamily   : 'Inter, sans-serif',
    marginBottom : '6px',
    paddingLeft  : '12px',
    position     : 'relative',
  },
  bulletDot: {
    position : 'absolute',
    left     : '0',
    color    : '#fe8019',
  },
};

export default function Experience() {
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

      { /* Right: timeline */ }
      <div style={ st.rightPanel }>
        <div style={ st.sectionLabel }>Professional Experience</div>
        <div style={ st.timeline }>
          { experience.map(job => (
            <div key={ job.id } style={ st.expCard(job.current) }>
              <div style={ st.dot(job.current) } />
              <div style={ st.company }>{ job.company }</div>
              <div style={ st.role }>{ job.role }</div>
              <div style={ st.meta }>{ job.period } · { job.location }</div>
              { job.bullets.map((bullet, bi) => (
                <div key={ bi } style={ st.bullet }>
                  <span style={ st.bulletDot }>•</span>
                  { renderBullet(bullet) }
                </div>
              )) }
            </div>
          )) }
        </div>
      </div>
    </div>
  );
}
