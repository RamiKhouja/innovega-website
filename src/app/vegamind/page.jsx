'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/navbar'
import VegamindHowItWorks from '../components/vegamind-how-it-works'
import VegamindAgriculturalData from '../components/vegamind-agricultural-data'
import VegamindInAction from '../components/vegamind-in-action'
import VegamindAdapt from '../components/vegamind-adapt'
import DemoRequestModal from '../components/ui/demo-request'
import VideoModal from '../components/ui/videoModal'
import { PlayIcon } from '@heroicons/react/24/solid'
import Footer from '../components/footer'

const vegamindVideo = 'https://www.youtube.com/embed/ryM-o-dXsu0?si=jg3y1DWCVxxUUW6e'

export default function VegamindPage() {
  const { t, i18n } = useTranslation()
  const [videoOpen, setVideoOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white" dir={i18n.dir()}>
      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden bg-light-mint">
          <img
            src="/images/ai-pattern.png"
            alt=""
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 ${i18n.language === 'ar' ? '-scale-x-100' : ''}`}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/75 to-transparent" />

          <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pb-32 pt-36 sm:px-10 lg:min-h-[820px] lg:px-8 lg:pb-40 lg:pt-40">

              <div className="max-w-4xl">
                <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-secondary-dark">
                  Vegamind AI
                </p>
                <h1 className="text-balance text-xl font-semibold leading-[1.08] tracking-tight text-primary-dark sm:text-6xl lg:text-7xl">
                  {t('vegamind-hero-title')}
                </h1>
                <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-primary-dark/80 sm:text-xl sm:leading-9">
                  {t('vegamind-hero-description')}
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setVideoOpen(true)}
                    className="rounded-full cursor-pointer bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/15 transition hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark flex gap-x-2"
                  >
                    <PlayIcon className={`h-5 w-5 ${i18n.language === 'ar' ? '-scale-x-100' : ''}`} aria-hidden="true" />
                    {t('vegamind-watch-demo')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setDemoOpen(true)}
                    className="rounded-full px-5 py-3 cursor-pointer text-sm font-semibold text-primary-dark transition hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
                  >
                    {t('vegamind-explore-technology')}
                    <span className="ms-2" aria-hidden="true">{i18n.language === 'ar' ? '←' : '→'}</span>
                  </button>
                </div>
              </div>
          </div>
        </section>
        <VegamindHowItWorks />
        <VegamindAgriculturalData />
        <VegamindInAction />
        <VegamindAdapt />
      </main>
      <Footer />

      <VideoModal
        open={videoOpen}
        setOpen={setVideoOpen}
        videoSrc={vegamindVideo}
        title={t('vegamind-video-title')}
        description={t('vegamind-video-description')}
      />
      <DemoRequestModal open={demoOpen} setOpen={setDemoOpen} />
    </div>
  )
}
