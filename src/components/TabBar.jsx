import React, { useState } from 'react';

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
    background  : 'rgba(13,13,13,0.95)',
    borderBottom: '1px solid #1e1e1e',
    display     : 'flex',
    alignItems  : 'flex-end',
    padding     : '0 4px',
    gap         : '1px',
    overflowX   : 'auto',
    flexShrink  : '0',
  },
  tab: (active, hovered) => ({
    height          : '32px',
    padding         : '0 14px',
    display         : 'flex',
    alignItems      : 'center',
    gap             : '7px',
    cursor          : 'pointer',
    borderRadius    : '6px 6px 0 0',
    fontSize        : '12px',
    fontFamily      : 'Inter, sans-serif',
    color           : active ? '#e8e8e8' : hovered ? '#a0a0a0' : '#555555',
    background      : active ? 'rgba(17,17,17,0.98)' : hovered ? 'rgba(26,26,26,0.7)' : 'rgba(10,10,10,0.6)',
    border          : `1px solid ${ active ? '#2a2a2a' : 'transparent' }`,
    borderBottom    : active ? '2px solid #fe8019' : '1px solid transparent',
    transition      : 'color 0.15s ease, background 0.15s ease',
    whiteSpace      : 'nowrap',
    flexShrink      : '0',
    userSelect      : 'none',
    position        : 'relative',
    // glow handled via boxShadow animation on active
    animation       : active ? 'tabGlow 2.5s ease-in-out infinite' : 'none',
  }),
};

export default function TabBar({ activeTab, onTabChange }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={ styles.tabBar }>
      { TABS.map(tab => (
        <div
          key={ tab.id }
          style={ styles.tab(tab.id === activeTab, hovered === tab.id) }
          onClick={ () => onTabChange(tab.id) }
          onMouseEnter={ () => setHovered(tab.id) }
          onMouseLeave={ () => setHovered(null) }
        >
          <span style={ { color: tab.iconColor, fontSize: '11px' } }>{ tab.icon }</span>
          <span>{ tab.label }</span>
        </div>
      )) }
    </div>
  );
}
