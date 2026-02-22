import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { siteConfig } from '../config/site';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <>
      <Header title={siteConfig.title} links={siteConfig.links} />
      <main>
        <Outlet />
      </main>
      <Footer
        title={siteConfig.title}
        motto={siteConfig.motto}
        links={siteConfig.links}
        contact={siteConfig.contact}
        social={siteConfig.social}
        copyright={siteConfig.copyright}
      />
    </>
  );
}
