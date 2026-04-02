import React, { useState } from 'react';

const styles = {
  card: {
    background    : '#141414',
    border        : '1px solid #2a2a2a',
    borderRadius  : '6px',
    padding       : '10px 6px',
    display       : 'flex',
    flexDirection : 'column',
    alignItems    : 'center',
    gap           : '5px',
    cursor        : 'default',
    transition    : 'all 0.15s ease',
  },
  cardHover: {
    borderColor : '#fe8019',
    transform   : 'translateY(-2px)',
    background  : '#1a1a1a',
  },
  icon: {
    fontSize   : '22px',
    lineHeight : '1',
  },
  img: {
    width        : '22px',
    height       : '22px',
    objectFit    : 'contain',
    borderRadius : '3px',
  },
  name: {
    fontSize   : '9px',
    color      : '#a0a0a0',
    textAlign  : 'center',
    fontFamily : 'Inter, sans-serif',
    fontWeight : '500',
    lineHeight : '1.3',
  },
};

export default function SkillCard({ icon, imgSrc, name }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={ hovered ? { ...styles.card, ...styles.cardHover } : styles.card }
      onMouseEnter={ () => setHovered(true) }
      onMouseLeave={ () => setHovered(false) }
    >
      { imgSrc
        ? <img src={ imgSrc } alt={ name } style={ styles.img } />
        : <span style={ styles.icon }>{ icon }</span>
      }
      <span style={ styles.name }>{ name }</span>
    </div>
  );
}
