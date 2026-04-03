import React from 'react';
import LineNumbers from '../components/LineNumbers.jsx';
import { experience } from '../data/portfolio.js';

// ── Kotlin token components ────────────────────────────────────
const Kw  = ({ children }) => <span className="syn-keyword">{ children }</span>;
const Cls = ({ children }) => <span className="syn-class">{ children }</span>;
const Str = ({ children }) => <span className="syn-string">{ children }</span>;
const Cmt = ({ children }) => <span className="syn-comment">{ children }</span>;
const Fn  = ({ children }) => <span className="syn-function">{ children }</span>;
const Pun = ({ children }) => <span className="syn-punct">{ children }</span>;

const codeLine = {
  minHeight  : '22px',
  display    : 'block',
  lineHeight : '22px',
  fontSize   : '13px',
  whiteSpace : 'pre',
};

// Line helper — i is a plain indent string, children are colored tokens
const L = ({ i = '', children }) => (
  <div style={ codeLine }>{ i }{ children }</div>
);

// Render <hl>...</hl> markup inside bullet text as orange spans
function renderBullet(text) {
  return text.split(/(<hl>.*?<\/hl>)/g).map((part, i) =>
    part.startsWith('<hl>')
      ? <span key={ i } className="syn-highlight">{ part.replace(/<\/?hl>/g, '') }</span>
      : <span key={ i }>{ part }</span>
  );
}

const buildLines = () => {
  const lines = [
    <L key="c0"><Cmt>{'// Experience.kt — Muttahir Islam'}</Cmt></L>,
    <div key="e0" style={ codeLine }> </div>,
    <L key="dc"><Kw>{'data class '}</Kw><Cls>{'Experience'}</Cls><Pun>{'('}</Pun></L>,
    <L key="d1" i="    "><Kw>{'val '}</Kw>{'company'}<Pun>{': '}</Pun><Cls>{'String'}</Cls><Pun>{','}</Pun></L>,
    <L key="d2" i="    "><Kw>{'val '}</Kw>{'role'}<Pun>{'    : '}</Pun><Cls>{'String'}</Cls><Pun>{','}</Pun></L>,
    <L key="d3" i="    "><Kw>{'val '}</Kw>{'period'}<Pun>{'  : '}</Pun><Cls>{'String'}</Cls><Pun>{','}</Pun></L>,
    <L key="d4" i="    "><Kw>{'val '}</Kw>{'bullets'}<Pun>{': '}</Pun><Cls>{'List'}</Cls><Pun>{'<'}</Pun><Cls>{'String'}</Cls><Pun>{'>'}</Pun></L>,
    <L key="d5"><Pun>{')'}</Pun></L>,
    <div key="e1" style={ codeLine }> </div>,
    <L key="lo"><Kw>{'val '}</Kw>{'career'}<Pun>{' = '}</Pun><Fn>{'listOf'}</Fn><Pun>{'('}</Pun></L>,
    <div key="e2" style={ codeLine }> </div>,
  ];

  experience.forEach((job, idx) => {
    lines.push( <L key={ `j${idx}0` } i="  "><Cls>{'Experience'}</Cls><Pun>{'('}</Pun></L> );
    lines.push( <L key={ `j${idx}1` } i="    ">{'company'}<Pun>{' = '}</Pun><Str>{`"${job.company}"`}</Str><Pun>{','}</Pun></L> );
    lines.push( <L key={ `j${idx}2` } i="    ">{'role'}<Pun>{'    = '}</Pun><Str>{`"${job.role}"`}</Str><Pun>{','}</Pun></L> );
    lines.push( <L key={ `j${idx}3` } i="    ">{'period'}<Pun>{'  = '}</Pun><Str>{`"${job.period}"`}</Str><Pun>{','}</Pun></L> );
    lines.push( <L key={ `j${idx}4` } i="    ">{'location'}<Pun>{' = '}</Pun><Str>{`"${job.location}"`}</Str></L> );

    if (job.bullets.length > 0) {
      lines.push( <L key={ `j${idx}5` } i="    ">{'bullets'}<Pun>{'  = '}</Pun><Fn>{'listOf'}</Fn><Pun>{'('}</Pun></L> );
      job.bullets.slice(0, 2).forEach((b, bi) => {
        const short = b.replace(/<\/?hl>/g, '').substring(0, 40) + '...';
        lines.push(
          <L key={ `j${idx}b${bi}` } i="        ">
            <Str>{ `"${short}"` }</Str>{ bi === 0 ? <Pun>{','}</Pun> : null }
          </L>
        );
      });
      lines.push( <L key={ `j${idx}6` } i="    "><Pun>{')'}</Pun></L> );
    }

    lines.push( <L key={ `j${idx}7` } i="  "><Pun>{ idx < experience.length - 1 ? '),' : ')' }</Pun></L> );
    if (idx < experience.length - 1) lines.push( <div key={ `je${idx}` } style={ codeLine }> </div> );
  });

  lines.push( <L key="lc"><Pun>{')'}</Pun></L> );
  return lines;
};

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
    width      : '380px',
    flexShrink : '0',
    background : 'rgba(0,0,0,0.6)',
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
    boxShadow    : current ? '0 0 8px rgba(184,187,38,0.5)' : 'none',
  }),
  company : { fontSize: '14px', fontWeight: '700', color: '#fe8019', fontFamily: 'Inter, sans-serif' },
  role    : { fontSize: '12px', color: '#a0a0a0', fontFamily: 'Inter, sans-serif', margin: '2px 0' },
  meta    : { fontSize: '10px', color: '#555555', fontFamily: 'Inter, sans-serif', marginBottom: '10px' },
  bullet  : {
    fontSize: '11px', color: '#888888', lineHeight: '1.7',
    fontFamily: 'Inter, sans-serif', marginBottom: '6px',
    paddingLeft: '12px', position: 'relative',
  },
  bulletDot: { position: 'absolute', left: '0', color: '#fe8019' },
};

export default function Experience() {
  const lines = buildLines();

  return (
    <div style={ st.wrapper } className="fade-in">
      <div style={ st.codePanel }>
        <LineNumbers count={ lines.length + 5 } />
        <div style={ st.codeArea }>{ lines }</div>
      </div>

      <div style={ st.rightPanel }>
        <div style={ st.sectionLabel }>Professional Experience</div>

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
  );
}
