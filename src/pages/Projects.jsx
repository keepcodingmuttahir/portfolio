import React from 'react';
import LineNumbers from '../components/LineNumbers.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/portfolio.js';

// ── XML / HTML token helpers ───────────────────────────────────
const Tag  = ({ c }) => <span className="syn-tag">{ c }</span>;
const Attr = ({ c }) => <span className="syn-attribute">{ c }</span>;
const Val  = ({ c }) => <span className="syn-value">"{ c }"</span>;
const Cmt  = ({ c }) => <span className="syn-comment">{ c }</span>;
const Pun  = ({ c }) => <span className="syn-punct">{ c }</span>;
const Str  = ({ c }) => <span className="syn-string">{ c }</span>;

// Build code lines dynamically from projects data
const buildCodeLines = () => {
  const lines = [
    <><Cmt c="&lt;!-- Projects.xml — Muttahir Islam --&gt;" /></>,
    <><Tag c="&lt;projects " /><Attr c="xmlns" /><Pun c='=' /><Val c="muttahir.portfolio" /><Tag c="&gt;" /></>,
    null,
  ];

  projects.forEach((proj, idx) => {
    lines.push(
      <>&nbsp;&nbsp;<Tag c="&lt;project " /><Attr c="type" /><Pun c="=" /><Val c={ proj.type } /><Pun c=" " /><Attr c="status" /><Pun c="=" /><Val c={ proj.period.includes('Present') ? 'active' : 'complete' } /><Tag c="&gt;" /></>
    );
    lines.push(<>&nbsp;&nbsp;&nbsp;&nbsp;<Tag c="&lt;name&gt;" /><Str c={ proj.name } /><Tag c="&lt;/name&gt;" /></>);
    lines.push(<>&nbsp;&nbsp;&nbsp;&nbsp;<Tag c="&lt;period&gt;" /><Str c={ proj.period } /><Tag c="&lt;/period&gt;" /></>);
    lines.push(<>&nbsp;&nbsp;&nbsp;&nbsp;<Tag c="&lt;role&gt;" /><Str c={ proj.role } /><Tag c="&lt;/role&gt;" /></>);
    lines.push(<>&nbsp;&nbsp;&nbsp;&nbsp;<Tag c="&lt;stack&gt;" /></>);
    proj.tags.slice(0, 3).forEach(tag => {
      lines.push(<>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Tag c="&lt;tech&gt;" /><span className="syn-string">{ tag }</span><Tag c="&lt;/tech&gt;" /></>);
    });
    lines.push(<>&nbsp;&nbsp;&nbsp;&nbsp;<Tag c="&lt;/stack&gt;" /></>);
    lines.push(<>&nbsp;&nbsp;<Tag c="&lt;/project&gt;" /></>);
    if (idx < projects.length - 1) lines.push(null);
  });

  lines.push(null);
  lines.push(<><Tag c="&lt;/projects&gt;" /></>);
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
    marginBottom  : '14px',
    paddingBottom : '6px',
    borderBottom  : '1px solid #1e1e1e',
  },
};

export default function Projects() {
  return (
    <div style={ st.wrapper } className="fade-in">
      { /* Left: XML code */ }
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

      { /* Right: project cards */ }
      <div style={ st.rightPanel }>
        <div style={ st.sectionLabel }>Projects</div>
        { projects.map(project => (
          <ProjectCard key={ project.id } project={ project } />
        )) }
      </div>
    </div>
  );
}
