import React, { useState, useEffect, useRef } from 'react';

const DURATION = 220; // ms

// Direction: going right (+1) or left (-1) in the tab list
const TAB_ORDER = ['home', 'about', 'projects', 'experience', 'contact'];

function getDirection(from, to) {
  const fi = TAB_ORDER.indexOf(from);
  const ti = TAB_ORDER.indexOf(to);
  return ti > fi ? 1 : -1;
}

const phases = {
  idle: {
    opacity   : 1,
    transform : 'translateX(0px)',
    transition: 'none',
  },
  exitRight: {
    opacity   : 0,
    transform : 'translateX(-28px)',
    transition : `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`,
  },
  exitLeft: {
    opacity   : 0,
    transform : 'translateX(28px)',
    transition : `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`,
  },
  enterRight: {
    opacity   : 0,
    transform : 'translateX(28px)',
    transition: 'none',
  },
  enterLeft: {
    opacity   : 0,
    transform : 'translateX(-28px)',
    transition: 'none',
  },
  visible: {
    opacity   : 1,
    transform : 'translateX(0px)',
    transition : `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`,
  },
};

export default function PageTransition({ activeTab, children }) {
  const [displayed, setDisplayed]   = useState(activeTab);
  const [phase, setPhase]           = useState('idle');
  const [direction, setDirection]   = useState(1);
  const pendingTab                  = useRef(null);
  const isAnimating                 = useRef(false);

  useEffect(() => {
    if (activeTab === displayed) return;

    const dir = getDirection(displayed, activeTab);
    setDirection(dir);
    pendingTab.current = activeTab;

    if (isAnimating.current) return;
    isAnimating.current = true;

    // Phase 1: exit current page
    setPhase(dir > 0 ? 'exitRight' : 'exitLeft');

    setTimeout(() => {
      // Phase 2: swap content, position entering page off-screen
      setDisplayed(pendingTab.current);
      setPhase(dir > 0 ? 'enterRight' : 'enterLeft');

      // Need a frame for the browser to paint the off-screen position
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Phase 3: animate entering page to center
          setPhase('visible');

          setTimeout(() => {
            setPhase('idle');
            isAnimating.current = false;

            // If another tab was requested during animation, run again
            if (pendingTab.current !== displayed) {
              // trigger re-render to pick up the queued change
              setDisplayed(prev => prev); // no-op but triggers useEffect check
            }
          }, DURATION);
        });
      });
    }, DURATION);
  }, [activeTab]); // eslint-disable-line

  const style = {
    flex      : '1',
    overflow  : 'hidden',
    display   : 'flex',
    flexDirection: 'column',
    ...phases[phase],
  };

  return (
    <div style={ style }>
      { React.cloneElement(children, { key: displayed, activeTab: displayed }) }
    </div>
  );
}
