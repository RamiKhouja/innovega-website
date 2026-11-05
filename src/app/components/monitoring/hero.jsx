'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import DemoRequestModal from '../ui/demo-request'
import styles from './hero.module.css'

export default function MonitoringHero() {
  const { t } = useTranslation()
  const [openDemoReqModal, setOpenDemoReqModal] = useState(false)

  return (
    <section className={styles.hero}>
      <div className={styles.pattern} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div className="relative z-10">
            <h1 className="mt-5 text-pretty text-3xl font-semibold leading-tight tracking-tight text-primary-dark sm:text-5xl">
              {t('monitoring-hero-title')}
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-primary-dark/85 sm:text-xl">
              {t('monitoring-hero-description')}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <button
                type="button"
                onClick={() => setOpenDemoReqModal(true)}
                className="cursor-pointer rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/15 transition hover:bg-secondary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
              >
                {t('get-started')}
              </button>
            </div>
          </div>

          <div className="relative z-10 lg:justify-self-end">
            <div className={styles.imageFrame}>
              <img
                src="/images/services/monitoring.jpg"
                alt="Real-time irrigation monitoring and water analytics"
                className="relative aspect-[4/3] w-full rounded-[1.35rem] object-cover"
              />
              <div className={styles.imageRing} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <DemoRequestModal open={openDemoReqModal} setOpen={setOpenDemoReqModal} />
    </section>
  )
}
