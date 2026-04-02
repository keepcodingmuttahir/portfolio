import React from 'react';

// ── File tree definition ───────────────────────────────────────
// Each entry maps a display name to the tab key it activates.
const FILE_TREE = [
  {
    type     : 'folder',
    name     : 'portfolio',
    level    : 0,
    expanded : true,
    root     : true,
  },
  {
    type     : 'folder',
    name     : 'src',
    level    : 1,
    expanded : true,
  },
  { type: 'file', name: 'Home.java',       level: 2, tab: 'home',       icon: '☕', iconColor: '#b07219' },
  { type: 'file', name: 'About.java',      level: 2, tab: 'about',      icon: '☕', iconColor: '#b07219' },
  { type: 'file', name: 'Projects.xml',    level: 2, tab: 'projects',   icon: '🔶', iconColor: '#e37933' },
  { type: 'file', name: 'Experience.kt',   level: 2, tab: 'experience', icon: '🟣', iconColor: '#a97bff' },
  { type: 'file', name: 'Contact.yaml',    level: 2, tab: 'contact',    icon: '🔸', iconColor: '#e37933' },
  {
    type     : 'folder',
    name     : 'resources',
    level    : 1,
    expanded : true,
  },
  { type: 'file', name: 'application.yaml', level: 2, icon: '🔸', iconColor: '#e37933' },
  { type: 'file', name: 'pom.xml',          level: 1, icon: '🔶', iconColor: '#e37933' },
  { type: 'file', name: 'README.md',        level: 1, icon: '📘', iconColor: '#519aba' },
  {
    type     : 'folder',
    name     : 'External Libraries',
    level    : 0,
    expanded : false,
    dimmed   : true,
  },
  {
    type     : 'folder',
    name     : 'Scratches and Consoles',
    level    : 0,
    expanded : false,
    dimmed   : true,
  },
];

const INDENT_PX = 14;

const styles = {
  sidebar: {
    width         : '240px',
    background    : '#0a0a0a',
    borderRight   : '1px solid #1e1e1e',
    display       : 'flex',
    flexDirection : 'column',
    overflow      : 'hidden',
    flexShrink    : '0',
  },
  header: {
    padding        : '7px 12px',
    borderBottom   : '1px solid #1e1e1e',
    display        : 'flex',
    alignItems     : 'center',
    justifyContent : 'space-between',
    flexShrink     : '0',
  },
  headerTitle: {
    fontSize      : '11px',
    fontWeight    : '600',
    color         : '#888888',
    textTransform : 'uppercase',
    letterSpacing : '0.08em',
    fontFamily    : 'Inter, sans-serif',
  },
  headerActions: {
    display    : 'flex',
    gap        : '2px',
  },
  headerBtn: {
    width           : '20px',
    height          : '20px',
    borderRadius    : '3px',
    display         : 'flex',
    alignItems      : 'center',
    justifyContent  : 'center',
    cursor          : 'pointer',
    fontSize        : '11px',
    color           : '#555555',
    background      : 'transparent',
    border          : 'none',
    transition      : 'all 0.12s ease',
  },
  tree: {
    flex       : '1',
    overflowY  : 'auto',
    padding    : '4px 0',
  },
  treeItem: (active, dimmed) => ({
    display         : 'flex',
    alignItems      : 'center',
    gap             : '5px',
    padding         : '3px 8px 3px 0',
    cursor          : 'pointer',
    fontSize        : '12px',
    color           : dimmed ? '#444444' : active ? '#4e9cf5' : '#a0a0a0',
    background      : active ? '#1a2433' : 'transparent',
    borderRadius    : '3px',
    margin          : '0 4px',
    transition      : 'background 0.1s ease',
    whiteSpace      : 'nowrap',
    userSelect      : 'none',
    fontFamily      : 'Inter, sans-serif',
  }),
  arrow: {
    width       : '12px',
    height      : '12px',
    display     : 'flex',
    alignItems  : 'center',
    justifyContent: 'center',
    fontSize    : '9px',
    color       : '#444444',
    flexShrink  : '0',
  },
  fileIcon: {
    width       : '16px',
    flexShrink  : '0',
    fontSize    : '12px',
    textAlign   : 'center',
  },
};

export default function Sidebar({ activeTab, onTabChange }) {
  return (
    <div style={ styles.sidebar }>
      { /* Header */ }
      <div style={ styles.header }>
        <span style={ styles.headerTitle }>Project</span>
        <div style={ styles.headerActions }>
          <button style={ styles.headerBtn } title="Settings">⚙</button>
          <button style={ styles.headerBtn } title="Collapse">−</button>
        </div>
      </div>

      { /* File Tree */ }
      <div style={ styles.tree }>
        { FILE_TREE.map((entry, index) => {
          const isActive = entry.tab === activeTab;
          const indent   = entry.level * INDENT_PX + 8;

          if (entry.type === 'folder') {
            return (
              <div
                key={ index }
                style={ {
                  ...styles.treeItem(false, entry.dimmed),
                  paddingLeft : `${ indent }px`,
                  marginTop   : entry.root ? '0' : entry.level === 0 ? '6px' : '0',
                } }
              >
                <span style={ styles.arrow }>
                  { entry.expanded ? '▾' : '▸' }
                </span>
                <span style={ { fontSize: '13px' } }>
                  { entry.expanded ? '📂' : '📁' }
                </span>
                <span
                  style={ {
                    color      : entry.root ? '#c09553' : entry.dimmed ? '#444444' : '#c09553',
                    fontWeight : entry.root ? '600' : '400',
                  } }
                >
                  { entry.name }
                </span>
              </div>
            );
          }

          return (
            <div
              key={ index }
              style={ {
                ...styles.treeItem(isActive, false),
                paddingLeft : `${ indent }px`,
              } }
              onClick={ () => entry.tab && onTabChange(entry.tab) }
            >
              <span style={ { width: '12px', flexShrink: '0' } } />
              <span style={ { ...styles.fileIcon, color: entry.iconColor || '#a0a0a0' } }>
                { entry.icon }
              </span>
              <span>{ entry.name }</span>
            </div>
          );
        }) }
      </div>
    </div>
  );
}
