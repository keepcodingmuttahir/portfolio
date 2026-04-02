import React, { useState, useEffect } from 'react';

import TitleBar   from './components/TitleBar.jsx';
import IconRail   from './components/IconRail.jsx';
import Sidebar    from './components/Sidebar.jsx';
import TabBar     from './components/TabBar.jsx';
import Breadcrumb from './components/Breadcrumb.jsx';
import StatusBar  from './components/StatusBar.jsx';

import Home       from './pages/Home.jsx';
import About      from './pages/About.jsx';
import Projects   from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Contact    from './pages/Contact.jsx';

// ── Tab → page component map ───────────────────────────────────
const PAGES = {
  home       : Home,
  about      : About,
  projects   : Projects,
  experience : Experience,
  contact    : Contact,
};

const styles = {
  root: {
    display       : 'flex',
    flexDirection : 'column',
    height        : '100vh',
    overflow      : 'hidden',
    background    : '#000000',
    color         : '#e8e8e8',
    fontFamily    : "'JetBrains Mono', monospace",
  },
  body: {
    display  : 'flex',
    flex     : '1',
    overflow : 'hidden',
  },
  editorArea: {
    display       : 'flex',
    flexDirection : 'column',
    flex          : '1',
    overflow      : 'hidden',
    background    : '#0d0d0d',
  },
  pageArea: {
    flex      : '1',
    overflow  : 'hidden',
    display   : 'flex',
    flexDirection: 'column',
  },
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Keyboard navigation: Alt + Left / Right to switch tabs
  useEffect(() => {
    const TABS = ['home', 'about', 'projects', 'experience', 'contact'];

    const handleKey = (e) => {
      if (!e.altKey) return;
      const idx = TABS.indexOf(activeTab);
      if (e.key === 'ArrowRight' && idx < TABS.length - 1) {
        setActiveTab(TABS[idx + 1]);
      }
      if (e.key === 'ArrowLeft' && idx > 0) {
        setActiveTab(TABS[idx - 1]);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeTab]);

  const ActivePage = PAGES[activeTab] || Home;

  return (
    <div style={ styles.root }>

      { /* ── Top title bar ── */ }
      <TitleBar />

      { /* ── Main body ── */ }
      <div style={ styles.body }>

        { /* Left icon rail */ }
        <IconRail />

        { /* File tree sidebar */ }
        <Sidebar activeTab={ activeTab } onTabChange={ setActiveTab } />

        { /* Editor area */ }
        <div style={ styles.editorArea }>

          { /* Tab bar */ }
          <TabBar activeTab={ activeTab } onTabChange={ setActiveTab } />

          { /* Breadcrumb */ }
          <Breadcrumb activeTab={ activeTab } />

          { /* Active page */ }
          <div style={ styles.pageArea }>
            <ActivePage
              key={ activeTab }
              onTabChange={ setActiveTab }
            />
          </div>

          { /* Status bar */ }
          <StatusBar activeTab={ activeTab } />

        </div>
      </div>
    </div>
  );
}
