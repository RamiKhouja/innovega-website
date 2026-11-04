'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './schedule-section.module.css'

const steps = [
  { key: 'valves', shortKey: 'valves' },
  { key: 'times', shortKey: 'times' },
  { key: 'days', shortKey: 'days' },
  { key: 'activate', shortKey: 'activate' },
]

export default function ScheduleSection() {
  const { t } = useTranslation()
  const [activeStep, setActiveStep] = useState(0)
  const step = steps[activeStep]

  return (
    <section id="schedule-section" className="bg-white px-6 py-20 sm:px-10 sm:py-20 lg:px-8">
      <div className={styles.schedulePanel}>
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className={styles.tabletFrame}>
                <div className={styles.tabletTopBar} aria-hidden="true">
                  <span className={styles.tabletCamera} />
                </div>
                <div className={styles.tabletScreen}>
                  <img src="/images/screens/schedule.gif" alt={t('schedule-section-image-alt')} className={styles.scheduleImage} />
                </div>
              </div>
            </div>
            <div className='order-1 lg:order-2'>
              <h2 className="text-3xl max-w-3xl font-semibold leading-tight tracking-tight text-primary-dark sm:text-5xl">{t('schedule-section-title')}</h2>
              <p className="my-8 max-w-4xl text-base leading-7 text-primary-dark/85 sm:text-lg">{t('schedule-section-description')}</p>
              <div className="flex items-center justify-between gap-4 px-1 text-xs font-semibold uppercase tracking-[0.14em] text-secondary-dark">
                <span>{t('schedule-section-workflow')}</span>
                <span>{activeStep + 1} / {steps.length}</span>
              </div>

              <div className={styles.activeStep}>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary-dark">{t('schedule-step-label')} {activeStep + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-primary-dark sm:text-2xl">{t(`schedule-step-${step.key}-title`)}</h3>
                <p className="mt-2 text-base leading-7 text-primary-dark/70 sm:text-lg">{t(`schedule-step-${step.key}-description`)}</p>
              </div>

              <div className="mt-3 grid gap-3 grid-cols-2 sm:grid-cols-4">
                {steps.map(({ key, shortKey }, index) => (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={activeStep === index}
                    onClick={() => setActiveStep(index)}
                    className={`${styles.stepButton} ${activeStep === index ? styles.stepButtonActive : ''}`}
                  >
                    <span className="text-2xl font-semibold leading-none">{index + 1}</span>
                    <span className="mt-2 text-xs font-medium">{t(`schedule-step-${shortKey}-short`)}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
