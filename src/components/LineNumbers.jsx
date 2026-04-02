import React from 'react';

const styles = {
  gutter: {
    width       : '52px',
    flexShrink  : '0',
    paddingTop  : '20px',
    textAlign   : 'right',
    background  : 'inherit',
    borderRight : '1px solid #1e1e1e',
    userSelect  : 'none',
  },
  lineNum: {
    height      : '22px',
    paddingRight: '12px',
    fontSize    : '12px',
    color       : '#3a3a3a',
    lineHeight  : '22px',
    fontFamily  : "'JetBrains Mono', monospace",
    display     : 'block',
  },
};

export default function LineNumbers({ count = 40 }) {
  return (
    <div style={ styles.gutter }>
      { Array.from({ length: count }, (_, i) => (
        <span key={ i + 1 } style={ styles.lineNum }>
          { i + 1 }
        </span>
      )) }
    </div>
  );
}
