'use client'

import { useState } from 'react'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import DemoRequestModal from '../ui/demo-request'

const videoSrc = 'https://www.youtube.com/embed/ryM-o-dXsu0?si=jg3y1DWCVxxUUW6e'

export default function VegamindInAction() {
  const { t, i18n } = useTranslation()
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <section id="vegamind-in-action" className="w-full bg-primary-dark px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className={i18n.language === 'ar' ? 'lg:order-2' : ''}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{t('vegamind-action-eyebrow')}</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">{t('vegamind-action-title')}</h2>
          <p className="vegamind-action-description mt-6 max-w-xl text-pretty text-base leading-8 text-white/90 sm:text-lg">{t('vegamind-action-description')}</p>
          <button
            type="button"
            onClick={() => setDemoOpen(true)}
            className="vegamind-action-button mt-8 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary-dark shadow-lg shadow-black/10 transition hover:bg-light-mint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {t('vegamind-action-request-demo')}
          </button>
        </div>

        <div className={i18n.language === 'ar' ? 'lg:order-1' : ''}>
          <div className="overflow-hidden rounded-3xl bg-white/10 p-2 ring-1 ring-white/10">
            <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={videoSrc}
                  title={t('vegamind-action-video-title')}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div className="vegamind-action-caption mt-4 flex items-center justify-center gap-2 text-sm text-white/70">
            <PlayCircleIcon className="size-5 text-secondary" aria-hidden="true" />
            <span>{t('vegamind-action-caption')}</span>
          </div>
        </div>
      </div>

      <DemoRequestModal open={demoOpen} setOpen={setDemoOpen} />
    </section>
  )
}
