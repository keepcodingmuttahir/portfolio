import React, { useState } from 'react';

const styles = {
  card: {
    background    : '#141414',
    border        : '1px solid #2a2a2a',
    borderRadius  : '8px',
    padding       : '16px',
    marginBottom  : '14px',
    cursor        : 'pointer',
    transition    : 'all 0.2s ease',
  },
  cardHover: {
    borderColor : '#fe8019',
    transform   : 'translateY(-2px)',
    boxShadow   : '0 4px 20px rgba(254, 128, 25, 0.1)',
  },
  header: {
    display     : 'flex',
    alignItems  : 'center',
    gap         : '12px',
    marginBottom: '10px',
  },
  logoWrap: {
    width           : '40px',
    height          : '40px',
    borderRadius    : '8px',
    background      : '#1a1a1a',
    border          : '1px solid #2a2a2a',
    display         : 'flex',
    alignItems      : 'center',
    justifyContent  : 'center',
    fontSize        : '20px',
    flexShrink      : '0',
    overflow        : 'hidden',
  },
  logoImg: {
    width        : '100%',
    height       : '100%',
    objectFit    : 'contain',
    borderRadius : '8px',
  },
  meta: {
    flex : '1',
  },
  name: {
    fontSize   : '13px',
    fontWeight : '700',
    color      : '#fe8019',
    fontFamily : 'Inter, sans-serif',
  },
  period: {
    fontSize   : '10px',
    color      : '#555555',
    fontFamily : 'Inter, sans-serif',
    marginTop  : '2px',
  },
  typeBadge: {
    fontSize      : '9px',
    padding       : '2px 7px',
    borderRadius  : '10px',
    background    : '#1a1a1a',
    color         : '#666666',
    border        : '1px solid #2a2a2a',
    fontFamily    : 'Inter, sans-serif',
  },
  desc: {
    fontSize   : '11px',
    color      : '#a0a0a0',
    lineHeight : '1.7',
    fontFamily : 'Inter, sans-serif',
    marginBottom: '10px',
    whiteSpace : 'pre-line',
  },
  tags: {
    display   : 'flex',
    flexWrap  : 'wrap',
    gap       : '5px',
  },
  tag: {
    fontSize      : '9px',
    padding       : '2px 7px',
    borderRadius  : '10px',
    background    : '#0f0f0f',
    color         : '#888888',
    border        : '1px solid #2a2a2a',
    fontFamily    : 'Inter, sans-serif',
  },
  link: {
    display         : 'flex',
    alignItems      : 'center',
    gap             : '4px',
    marginTop       : '10px',
    fontSize        : '11px',
    color           : '#4e9cf5',
    fontFamily      : 'Inter, sans-serif',
    textDecoration  : 'none',
  },
};

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const { name, type, period, role, logo, logoEmoji, description, tags, link } = project;

  return (
    <div
      style={ hovered ? { ...styles.card, ...styles.cardHover } : styles.card }
      onMouseEnter={ () => setHovered(true) }
      onMouseLeave={ () => setHovered(false) }
    >
      { /* Header */ }
      <div style={ styles.header }>
        <div style={ styles.logoWrap }>
          { logo
            ? <img src={ logo } alt={ name } style={ styles.logoImg } />
            : <span>{ logoEmoji }</span>
          }
        </div>
        <div style={ styles.meta }>
          <div style={ styles.name }>{ name }</div>
          <div style={ styles.period }>{ period } · { role }</div>
        </div>
        <span style={ styles.typeBadge }>{ type }</span>
      </div>

      { /* Description */ }
      <div style={ styles.desc }>{ description }</div>

      { /* Tech Tags */ }
      <div style={ styles.tags }>
        { tags.map(tag => (
          <span key={ tag } style={ styles.tag }>{ tag }</span>
        )) }
      </div>

      { /* Optional Link */ }
      { link && (
        <a
          href={ link }
          target="_blank"
          rel="noopener noreferrer"
          style={ styles.link }
          onClick={ e => e.stopPropagation() }
        >
          ↗ View Project
        </a>
      ) }
    </div>
  );
}
