import React from 'react';

const styles = {
  statusBar: {
    height      : '24px',
    background  : '#000000',
    borderTop   : '1px solid #1e1e1e',
    display     : 'flex',
    alignItems  : 'center',
    padding     : '0 10px',
    gap         : '14px',
    flexShrink  : '0',
    userSelect  : 'none',
  },
  item: {
    display    : 'flex',
    alignItems : 'center',
    gap        : '5px',
    fontSize   : '11px',
    color      : '#555555',
    fontFamily : 'Inter, sans-serif',
    cursor     : 'default',
  },
  branch: {
    color : '#fe8019',
  },
  ok: {
    color : '#b8bb26',
  },
  rightGroup: {
    marginLeft : 'auto',
    display    : 'flex',
    gap        : '14px',
  },
};

export default function StatusBar({ activeTab }) {
  const fileMap = {
    home       : '1:1',
    about      : '1:1',
    projects   : '1:1',
    experience : '1:1',
    contact    : '1:1',
  };

  return (
    <div style={ styles.statusBar }>
      <div style={ styles.item }>
        <span>⎇</span>
        <span style={ styles.branch }>main</span>
      </div>

      <div style={ styles.item }>
        <span>☕</span>
        <span>Java 21</span>
      </div>

      <div style={ { ...styles.item, ...styles.ok } }>
        <span>✓</span>
        <span>0 errors, 0 warnings</span>
      </div>

      <div style={ styles.rightGroup }>
        <div style={ styles.item }>{ fileMap[activeTab] || '1:1' }</div>
        <div style={ styles.item }>UTF-8</div>
        <div style={ styles.item }>LF</div>
        <div style={ styles.item }>IntelliJ IDEA</div>
      </div>
    </div>
  );
}
