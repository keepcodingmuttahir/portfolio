import React from 'react';

const railIcons = [
  { icon: '📁', label: 'Project',   active: true  },
  { icon: '🔀', label: 'Commit',    active: false },
  { icon: '🔍', label: 'Search',    active: false },
  { icon: '🏗',  label: 'Structure', active: false },
  { icon: '🔖', label: 'Bookmarks', active: false },
  { icon: '⚠',  label: 'Problems',  active: false },
];

const bottomIcons = [
  { icon: '💻', label: 'Terminal' },
  { icon: '▶',  label: 'Run'      },
  { icon: '🌿', label: 'Git'      },
];

const styles = {
  rail: {
    width           : '42px',
    background      : '#000000',
    borderRight     : '1px solid #1e1e1e',
    display         : 'flex',
    flexDirection   : 'column',
    alignItems      : 'center',
    padding         : '8px 0',
    gap             : '2px',
    flexShrink      : '0',
    zIndex          : '10',
  },
  icon: (active) => ({
    width           : '32px',
    height          : '32px',
    borderRadius    : '6px',
    display         : 'flex',
    alignItems      : 'center',
    justifyContent  : 'center',
    cursor          : 'pointer',
    fontSize        : '15px',
    color           : active ? '#fe8019' : '#555555',
    background      : active ? '#1a1a1a' : 'transparent',
    transition      : 'all 0.12s ease',
    border          : 'none',
  }),
  spacer: {
    flex : '1',
  },
  divider: {
    width        : '24px',
    height       : '1px',
    background   : '#1e1e1e',
    margin       : '4px 0',
  },
};

export default function IconRail() {
  return (
    <div style={ styles.rail }>
      { railIcons.map(({ icon, label, active }) => (
        <button key={ label } style={ styles.icon(active) } title={ label }>
          { icon }
        </button>
      )) }

      <div style={ styles.spacer } />
      <div style={ styles.divider } />

      { bottomIcons.map(({ icon, label }) => (
        <button key={ label } style={ styles.icon(false) } title={ label }>
          { icon }
        </button>
      )) }
    </div>
  );
}
