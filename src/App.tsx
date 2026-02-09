import Header from './components/Header';
import Hero from './components/Hero';
import SectionAbout from './components/SectionAbout';
import SectionActivity from './components/SectionActivity';
import Footer from './components/Footer';
import { siteConfig } from './config/site';

function App() {
  return (
    <>
      <Header title={siteConfig.title} links={siteConfig.links} />
      <main>
        <Hero motto={siteConfig.motto} brand={siteConfig.title} />
        <SectionAbout />
        <SectionActivity activities={siteConfig.activities} />
        <Footer
          title={siteConfig.title}
          motto={siteConfig.motto}
          contact={siteConfig.contact}
          copyright={siteConfig.copyright}
        />
      </main>
    </>
  );
}

export default App;
