import React from 'react';

const BREADCRUMBS = {
  home       : ['portfolio', 'src', 'Home.java', 'MuttahirIslam'],
  about      : ['portfolio', 'src', 'About.java', 'About'],
  projects   : ['portfolio', 'src', 'Projects.xml'],
  experience : ['portfolio', 'src', 'Experience.kt', 'career'],
  contact    : ['portfolio', 'resources', 'Contact.yaml', 'socials'],
};

const styles = {
  breadcrumb: {
    height      : '26px',
    background  : '#0d0d0d',
    borderBottom: '1px solid #1e1e1e',
    display     : 'flex',
    alignItems  : 'center',
    padding     : '0 16px',
    gap         : '2px',
    flexShrink  : '0',
    userSelect  : 'none',
  },
  crumb: {
    fontSize   : '11px',
    color      : '#888888',
    fontFamily : 'Inter, sans-serif',
  },
  sep: {
    fontSize : '11px',
    color    : '#3a3a3a',
    padding  : '0 2px',
  },
};

export default function Breadcrumb({ activeTab }) {
  const crumbs = BREADCRUMBS[activeTab] || BREADCRUMBS.home;

  return (
    <div style={ styles.breadcrumb }>
      { crumbs.map((crumb, index) => (
        <React.Fragment key={ crumb }>
          <span style={ styles.crumb }>{ crumb }</span>
          { index < crumbs.length - 1 && (
            <span style={ styles.sep }> › </span>
          ) }
        </React.Fragment>
      )) }
    </div>
  );
}
