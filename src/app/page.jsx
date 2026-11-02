'use client'
import { useTranslation } from 'react-i18next'
import AboutSection from './components/about'
import CallToAction from './components/cta'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Services from './components/services'
import Partners from './components/partners'
import Features from './components/features'
import Contact from './components/contact'
import Demo from './components/demo'
import Gallery from './components/gallery'
import VideoDemos from './components/video-demos'
import VegamindCta from './components/vegamind-cta'

export default function Home() {

  const { i18n } = useTranslation()
  
  return (
    <div className="bg-white" dir={i18n.dir()}>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <VideoDemos />
        <Services />
        <CallToAction />
        {/* <AboutSection /> */}
        <Features />
        <VegamindCta />
        {/* <Demo /> */}
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
