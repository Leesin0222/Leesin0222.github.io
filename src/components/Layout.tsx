import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { siteConfig } from '../config/site';

export default function Layout() {
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
