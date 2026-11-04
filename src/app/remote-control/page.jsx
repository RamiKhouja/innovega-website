'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import VideoModal from '../components/ui/videoModal'
import DemoRequestModal from '../components/ui/demo-request'
import UnderControl from '../components/control/under-control'
import DashboardSection from '../components/control/dashboard-section'
import ScheduleSection from '../components/control/schedule-section'
import MapSection from '../components/control/map-section'
import ArchitectureSection from '../components/control/architecture-section'
import HardwareSection from '../components/control/hardware-section'
import CallToAction from '../components/cta'
import styles from './page.module.css'

function ConnectivityPattern() {
  return (
    <svg aria-hidden="true" className={styles.connectivityPattern } viewBox="0 0 720 620" fill="none" preserveAspectRatio="none">
      <defs>
        <filter id="control-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="control-line" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#35c7e2" stopOpacity="0" />
          <stop offset="0.45" stopColor="#35c7e2" stopOpacity="0.55" />
          <stop offset="1" stopColor="#35c7e2" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <g stroke="url(#control-line)" strokeWidth="1.5">
        <path d="M30 120 170 80l120 100 160-40 210 125" /><path d="M80 390 210 260l125 75 125-130 215 75" />
        <path d="M280 20 290 180l45 155 35 250" /><path d="M580 0 450 140l10 180-115 160" />
        <path d="M170 80 210 260l-5 170 145 80" />
      </g>
      <g fill="#35c7e2" filter="url(#control-glow)">
        <circle cx="170" cy="80" r="4" /><circle cx="290" cy="180" r="3" /><circle cx="450" cy="140" r="4" />
        <circle cx="335" cy="335" r="5" /><circle cx="460" cy="320" r="3" /><circle cx="350" cy="570" r="4" /><circle cx="690" cy="265" r="4" />
      </g>
    </svg>
  )
}

export default function RemoteControlPage() {
  const { t, i18n } = useTranslation()
  const [openModal, setOpenModal] = useState(false)
  const [openDemoReqModal, setOpenDemoReqModal] = useState(false)

  return (
    <div className="min-h-screen bg-white" dir={i18n.dir()}>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <ConnectivityPattern />
          <div className={styles.glow} />
          <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-36">
            <div className="grid w-full items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
              <div className="relative z-10 ">
                {/* <p className={styles.eyebrow}>INNOVEGA FLOW</p> */}
                <h1 className="mt-5 text-pretty text-3xl font-semibold leading-tight tracking-tight text-primary-dark sm:text-5xl">{t('remote-control-hero-title')}</h1>
                <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-primary-dark/85 sm:text-xl">{t('remote-control-hero-description')}</p>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <button onClick={() => setOpenDemoReqModal(true)} className="cursor-pointer rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/15 transition hover:bg-secondary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark">{t('get-started')}</button>
                  <button onClick={() => setOpenModal(true)} className="cursor-pointer text-sm font-semibold text-gray-900 transition hover:text-secondary-dark">{t('live-demo')} <span aria-hidden="true">{i18n.language === 'ar' ? '←' : '→'}</span></button>
                </div>
              </div>
              <div className="relative z-10 lg:justify-self-end">
                <div className={styles.imageFrame}>
                  <img src="/images/hero-control.jpg" alt={t('remote-control-hero-image-alt')} className="relative aspect-[4/3] w-full rounded-[1.35rem] object-cover" />
                  <div className={styles.imageRing} />
                </div>
                
              </div>
            </div>
          </div>
        </section>
        <UnderControl />
        <DashboardSection />
        <ScheduleSection />
        <MapSection />
        <CallToAction />
        <ArchitectureSection />
        <HardwareSection />
      </main>
      <Footer />
      <VideoModal open={openModal} setOpen={setOpenModal} videoSrc="https://www.youtube.com/embed/uCZLsbdt4PM?si=wZA6bzhKM5w5693x" />
      <DemoRequestModal open={openDemoReqModal} setOpen={setOpenDemoReqModal} />
    </div>
  )
}
