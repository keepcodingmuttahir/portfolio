import React from 'react';

const styles = {
  titleBar: {
    height          : '38px',
    background      : '#000000',
    borderBottom    : '1px solid #1e1e1e',
    display         : 'flex',
    alignItems      : 'center',
    padding         : '0 12px',
    gap             : '0',
    position        : 'relative',
    zIndex          : '100',
    flexShrink      : '0',
    userSelect      : 'none',
  },
  left: {
    display    : 'flex',
    alignItems : 'center',
    gap        : '10px',
    flex       : '1',
  },
  logo: {
    width           : '20px',
    height          : '20px',
    background      : 'linear-gradient(135deg, #fe8019, #d65d0e)',
    borderRadius    : '4px',
    display         : 'flex',
    alignItems      : 'center',
    justifyContent  : 'center',
    fontSize        : '10px',
    fontWeight      : '900',
    color           : '#000000',
    fontFamily      : 'Inter, sans-serif',
    flexShrink      : '0',
  },
  menuBar: {
    display    : 'flex',
    gap        : '2px',
  },
  menuItem: {
    fontSize        : '11px',
    color           : '#a0a0a0',
    padding         : '2px 8px',
    borderRadius    : '3px',
    cursor          : 'pointer',
    fontFamily      : 'Inter, sans-serif',
    transition      : 'background 0.12s ease',
    whiteSpace      : 'nowrap',
  },
  center: {
    position  : 'absolute',
    left      : '50%',
    transform : 'translateX(-50%)',
    display   : 'flex',
    alignItems: 'center',
    gap       : '8px',
  },
  projectLabel: {
    fontSize   : '12px',
    color      : '#a0a0a0',
    fontFamily : 'Inter, sans-serif',
  },
  branchPill: {
    background    : '#1a1a1a',
    border        : '1px solid #2a2a2a',
    borderRadius  : '12px',
    padding       : '2px 8px',
    fontSize      : '10px',
    color         : '#fe8019',
    display       : 'flex',
    alignItems    : 'center',
    gap           : '4px',
    fontFamily    : 'Inter, sans-serif',
  },
  right: {
    display    : 'flex',
    alignItems : 'center',
    gap        : '6px',
    marginLeft : 'auto',
  },
  iconBtn: {
    width           : '26px',
    height          : '26px',
    borderRadius    : '4px',
    display         : 'flex',
    alignItems      : 'center',
    justifyContent  : 'center',
    cursor          : 'pointer',
    fontSize        : '13px',
    color           : '#a0a0a0',
    transition      : 'background 0.12s ease',
    border          : 'none',
    background      : 'transparent',
  },
  winControls: {
    display    : 'flex',
    gap        : '6px',
    marginLeft : '10px',
  },
  winBtn: {
    width        : '12px',
    height       : '12px',
    borderRadius : '50%',
    cursor       : 'pointer',
    border       : 'none',
  },
};

const menuItems = ['File', 'Edit', 'View', 'Navigate', 'Code', 'Refactor', 'Run', 'Tools', 'Help'];

export default function TitleBar() {
  return (
    <div style={ styles.titleBar }>
      { /* Left — logo + menu */ }
      <div style={ styles.left }>
        <div style={ styles.logo }>IJ</div>
        <div style={ styles.menuBar }>
          { menuItems.map(item => (
            <span key={ item } style={ styles.menuItem }>{ item }</span>
          )) }
        </div>
      </div>

      { /* Center — project name + branch */ }
      <div style={ styles.center }>
        <span style={ styles.projectLabel }>portfolio</span>
        <div style={ styles.branchPill }>⎇ main</div>
      </div>

      { /* Right — action icons + window controls */ }
      <div style={ styles.right }>
        <button style={ styles.iconBtn } title="Search">🔍</button>
        <button style={ { ...styles.iconBtn, color: '#b8bb26' } } title="Run">▶</button>
        <button style={ { ...styles.iconBtn, color: '#83a598' } } title="Debug">🐛</button>
        <button style={ styles.iconBtn } title="Settings">⚙</button>

        <div style={ styles.winControls }>
          <button style={ { ...styles.winBtn, background: '#ff5f57' } } title="Close"   />
          <button style={ { ...styles.winBtn, background: '#febc2e' } } title="Minimize" />
          <button style={ { ...styles.winBtn, background: '#28c840' } } title="Maximize" />
        </div>
      </div>
    </div>
  );
}
