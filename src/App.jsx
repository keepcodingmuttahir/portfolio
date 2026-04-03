import React, { useState, useEffect } from 'react';

import TitleBar         from './components/TitleBar.jsx';
import IconRail         from './components/IconRail.jsx';
import Sidebar          from './components/Sidebar.jsx';
import TabBar           from './components/TabBar.jsx';
import Breadcrumb       from './components/Breadcrumb.jsx';
import StatusBar        from './components/StatusBar.jsx';
import ContactModal     from './components/ContactModal.jsx';
import MatrixBackground from './components/MatrixBackground.jsx';
import PageTransition   from './components/PageTransition.jsx';

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
  // Root is transparent — canvas shows through
  root: {
    display       : 'flex',
    flexDirection : 'column',
    height        : '100vh',
    overflow      : 'hidden',
    background    : '#050505',
    color         : '#e8e8e8',
    fontFamily    : "'JetBrains Mono', monospace",
    position      : 'relative',
  },
  body: {
    display  : 'flex',
    flex     : '1',
    overflow : 'hidden',
    position : 'relative',
    zIndex   : '1',
  },
  // Sidebar wrapper — semi-transparent so symbols bleed through subtly
  sidebarWrap: {
    display     : 'flex',
    flexShrink  : '0',
    background  : 'rgba(6, 6, 6, 0.82)',
    borderRight : '1px solid #1e1e1e',
  },
  // Main editor — semi-transparent
  editorArea: {
    display       : 'flex',
    flexDirection : 'column',
    flex          : '1',
    overflow      : 'hidden',
    background    : 'rgba(10, 10, 10, 0.80)',
  },
  pageArea: {
    flex         : '1',
    overflow     : 'hidden',
    display      : 'flex',
    flexDirection: 'column',
  },
};

function ActivePage({ activeTab, onTabChange, onContactOpen }) {
  const Page = PAGES[activeTab] || Home;
  return (
    <Page
      onTabChange={ onTabChange }
      onContactOpen={ onContactOpen }
    />
  );
}

export default function App() {
  const [activeTab,   setActiveTab]   = useState('home');
  const [contactOpen, setContactOpen] = useState(false);

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

  return (
    <div style={ styles.root } className="app-vignette">

      { /* Canvas sits at z-index 0, fixed, behind everything */ }
      <MatrixBackground />

      { /* TitleBar — sits above canvas */ }
      <div style={ { position: 'relative', zIndex: '2', background: 'rgba(0,0,0,0.92)', borderBottom: '1px solid #1e1e1e', flexShrink: 0 } }>
        <TitleBar />
      </div>

      <div style={ styles.body }>

        { /* Icon rail */ }
        <div style={ { position: 'relative', zIndex: '1', background: 'rgba(0,0,0,0.85)', borderRight: '1px solid #1e1e1e', flexShrink: 0 } }>
          <IconRail />
        </div>

        { /* File tree sidebar */ }
        <div style={ styles.sidebarWrap }>
          <Sidebar activeTab={ activeTab } onTabChange={ setActiveTab } />
        </div>

        { /* Editor */ }
        <div style={ styles.editorArea }>
          <TabBar     activeTab={ activeTab } onTabChange={ setActiveTab } />
          <Breadcrumb activeTab={ activeTab } />

          <div style={ styles.pageArea }>
            <PageTransition activeTab={ activeTab }>
              <ActivePage
                onTabChange={ setActiveTab }
                onContactOpen={ () => setContactOpen(true) }
              />
            </PageTransition>
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
