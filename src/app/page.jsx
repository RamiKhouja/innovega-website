'use client'
import { useTranslation } from 'react-i18next'
import AboutSection from './components/home/about'
import CallToAction from './components/cta'
import Footer from './components/footer'
import Hero from './components/home/hero'
import Navbar from './components/navbar'
import Services from './components/home/services'
import Partners from './components/home/partners'
import Features from './components/home/features'
import Contact from './components/home/contact'
import Demo from './components/home/demo'
import Gallery from './components/home/gallery'
import VideoDemos from './components/home/video-demos'
import VegamindCta from './components/home/vegamind-cta'
import Sdg from './components/home/sdg'

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
        <Sdg />
      </main>
      <Footer />
    </div>
  )
}
