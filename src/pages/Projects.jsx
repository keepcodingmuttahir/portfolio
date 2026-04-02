import React from 'react';
import LineNumbers from '../components/LineNumbers.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/portfolio.js';

// ── Syntax token components ────────────────────────────────────
const Tag  = ({ children }) => <span className="syn-tag">{ children }</span>;
const Attr = ({ children }) => <span className="syn-attribute">{ children }</span>;
const Val  = ({ children }) => <span className="syn-value">{ children }</span>;
const Cmt  = ({ children }) => <span className="syn-comment">{ children }</span>;
const Str  = ({ children }) => <span className="syn-string">{ children }</span>;
const Pun  = ({ children }) => <span className="syn-punct">{ children }</span>;

// Line helper: indent is a plain string, children are JSX tokens
const L = ({ i = '', children }) => (
  <div style={ codeLine }>
    { i }{ children }
  </div>
);

const codeLine = {
  minHeight  : '22px',
  display    : 'block',
  lineHeight : '22px',
  fontSize   : '13px',
  whiteSpace : 'pre',
};

const emptyLine = <div style={ codeLine }> </div>;

const buildLines = () => {
  const lines = [
    <L key="c0"><Cmt>{'<!-- Projects.xml — Muttahir Islam -->'}</Cmt></L>,
    <L key="c1"><Tag>{'<projects '}</Tag><Attr>{'xmlns'}</Attr><Pun>{'='}</Pun><Val>{'"muttahir.portfolio"'}</Val><Tag>{'>'}</Tag></L>,
    emptyLine,
  ];

  projects.forEach((proj, idx) => {
    const isActive = proj.period.includes('Present');
    lines.push(
      <L key={ `p${idx}0` } i="  "><Tag>{'<project '}</Tag><Attr>{'type'}</Attr><Pun>{'='}</Pun><Val>{`"${proj.type}"`}</Val><Pun>{' '}</Pun><Attr>{'status'}</Attr><Pun>{'='}</Pun><Val>{ isActive ? '"active"' : '"complete"' }</Val><Tag>{'>'}</Tag></L>
    );
    lines.push( <L key={ `p${idx}1` } i="    "><Tag>{'<name>'}</Tag><Str>{ proj.name }</Str><Tag>{'</name>'}</Tag></L> );
    lines.push( <L key={ `p${idx}2` } i="    "><Tag>{'<period>'}</Tag><Str>{ proj.period }</Str><Tag>{'</period>'}</Tag></L> );
    lines.push( <L key={ `p${idx}3` } i="    "><Tag>{'<role>'}</Tag><Str>{ proj.role }</Str><Tag>{'</role>'}</Tag></L> );
    lines.push( <L key={ `p${idx}4` } i="    "><Tag>{'<stack>'}</Tag></L> );
    proj.tags.slice(0, 3).forEach((tag, ti) => {
      lines.push( <L key={ `p${idx}t${ti}` } i="      "><Tag>{'<tech>'}</Tag><Str>{ tag }</Str><Tag>{'</tech>'}</Tag></L> );
    });
    lines.push( <L key={ `p${idx}5` } i="    "><Tag>{'</stack>'}</Tag></L> );
    lines.push( <L key={ `p${idx}6` } i="  "><Tag>{'</project>'}</Tag></L> );
    if (idx < projects.length - 1) lines.push( <div key={ `pe${idx}` } style={ codeLine }> </div> );
  });

  lines.push( <div key="empty2" style={ codeLine }> </div> );
  lines.push( <L key="close"><Tag>{'</projects>'}</Tag></L> );
  return lines;
};

const st = {
  wrapper: {
    display  : 'flex',
    height   : '100%',
    overflow : 'hidden',
  },
  codePanel: {
    display   : 'flex',
    flex      : '1',
    overflow  : 'hidden',
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
    marginBottom  : '14px',
    paddingBottom : '6px',
    borderBottom  : '1px solid #1e1e1e',
  },
};

export default function Projects() {
  const lines = buildLines();

  return (
    <div style={ st.wrapper } className="fade-in">
      <div style={ st.codePanel }>
        <LineNumbers count={ lines.length + 5 } />
        <div style={ st.codeArea }>
          { lines }
        </div>
      </div>

      <div style={ st.rightPanel }>
        <div style={ st.sectionLabel }>Projects</div>
        { projects.map(project => (
          <ProjectCard key={ project.id } project={ project } />
        )) }
      </div>
    </div>
  );
}
