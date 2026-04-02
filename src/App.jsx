import React, { useState, useEffect } from 'react';

import TitleBar    from './components/TitleBar.jsx';
import IconRail    from './components/IconRail.jsx';
import Sidebar     from './components/Sidebar.jsx';
import TabBar      from './components/TabBar.jsx';
import Breadcrumb  from './components/Breadcrumb.jsx';
import StatusBar   from './components/StatusBar.jsx';
import ContactModal from './components/ContactModal.jsx';

import Home       from './pages/Home.jsx';
import About      from './pages/About.jsx';
import Projects   from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Contact    from './pages/Contact.jsx';

const TABS = ['home', 'about', 'projects', 'experience', 'contact'];

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
    flex         : '1',
    overflow     : 'hidden',
    display      : 'flex',
    flexDirection: 'column',
  },
};

export default function App() {
  const [activeTab,     setActiveTab]     = useState('home');
  const [contactOpen,   setContactOpen]   = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (!e.altKey) return;
      const idx = TABS.indexOf(activeTab);
      if (e.key === 'ArrowRight' && idx < TABS.length - 1) setActiveTab(TABS[idx + 1]);
      if (e.key === 'ArrowLeft'  && idx > 0)               setActiveTab(TABS[idx - 1]);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeTab]);

  const ActivePage = PAGES[activeTab] || Home;

  return (
    <div style={ styles.root }>
      <TitleBar />

      <div style={ styles.body }>
        <IconRail />
        <Sidebar activeTab={ activeTab } onTabChange={ setActiveTab } />

        <div style={ styles.editorArea }>
          <TabBar    activeTab={ activeTab } onTabChange={ setActiveTab } />
          <Breadcrumb activeTab={ activeTab } />

          <div style={ styles.pageArea }>
            <ActivePage
              key={ activeTab }
              onTabChange={ setActiveTab }
              onContactOpen={ () => setContactOpen(true) }
            />
          </div>

          <StatusBar activeTab={ activeTab } />
        </div>
      </div>

      <ContactModal
        open={ contactOpen }
        onClose={ () => setContactOpen(false) }
      />
    </div>
  );
}
