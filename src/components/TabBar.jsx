import React from 'react';

export const TABS = [
  { id: 'home',       label: 'Home.java',      icon: '☕', iconColor: '#b07219' },
  { id: 'about',      label: 'About.java',     icon: '☕', iconColor: '#b07219' },
  { id: 'projects',   label: 'Projects.xml',   icon: '🔶', iconColor: '#e37933' },
  { id: 'experience', label: 'Experience.kt',  icon: '🟣', iconColor: '#a97bff' },
  { id: 'contact',    label: 'Contact.yaml',   icon: '🔸', iconColor: '#e37933' },
];

const styles = {
  tabBar: {
    height      : '36px',
    background  : '#0d0d0d',
    borderBottom: '1px solid #1e1e1e',
    display     : 'flex',
    alignItems  : 'flex-end',
    padding     : '0 4px',
    gap         : '1px',
    overflowX   : 'auto',
    flexShrink  : '0',
  },
  tab: (active) => ({
    height          : '32px',
    padding         : '0 14px',
    display         : 'flex',
    alignItems      : 'center',
    gap             : '7px',
    cursor          : 'pointer',
    borderRadius    : '6px 6px 0 0',
    fontSize        : '12px',
    fontFamily      : 'Inter, sans-serif',
    color           : active ? '#e8e8e8' : '#666666',
    background      : active ? '#111111' : '#0a0a0a',
    border          : `1px solid ${ active ? '#2a2a2a' : 'transparent' }`,
    borderBottom    : active ? '2px solid #fe8019' : '1px solid transparent',
    transition      : 'all 0.12s ease',
    whiteSpace      : 'nowrap',
    flexShrink      : '0',
    userSelect      : 'none',
  }),
};

export default function TabBar({ activeTab, onTabChange }) {
  return (
    <div style={ styles.tabBar }>
      { TABS.map(tab => (
        <div
          key={ tab.id }
          style={ styles.tab(tab.id === activeTab) }
          onClick={ () => onTabChange(tab.id) }
        >
          <span style={ { color: tab.iconColor } }>{ tab.icon }</span>
          <span>{ tab.label }</span>
        </div>
      )) }
    </div>
  );
}
