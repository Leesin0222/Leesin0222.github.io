import Hero from '../components/Hero';
import SectionAbout from '../components/SectionAbout';
import SectionShop from '../components/SectionShop';
import SectionMixing from '../components/SectionMixing';
import SectionClokr from '../components/SectionClokr';
import { siteConfig } from '../config/site';

export default function LandingPage() {
  return (
    <>
      <Hero motto={siteConfig.motto} brand={siteConfig.title} />
      <SectionAbout />
      <SectionClokr />
      <SectionShop />
      <SectionMixing />
    </>
  );
}
