'use client'

import {
  ArrowPathIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  MinusIcon,
} from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

const responses = [
  { key: 'increase', icon: ArrowTrendingUpIcon },
  { key: 'maintain', icon: MinusIcon },
  { key: 'postpone', icon: ClockIcon },
  { key: 'reschedule', icon: ArrowPathIcon },
]

export default function VegamindAdapt() {
  const { t } = useTranslation()

  return (
    <section id="designed-to-adapt" className="bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-light-mint px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-secondary-dark">
            <span className="size-1.5 rounded-full bg-secondary" aria-hidden="true" />
            {t('vegamind-adapt-label')}
          </div> */}
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-secondary-dark">{t('vegamind-adapt-eyebrow')}</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-snug tracking-tight text-primary-dark sm:text-5xl">{t('vegamind-adapt-title')}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-8 text-primary-dark/75 sm:text-lg">{t('vegamind-adapt-description')}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {responses.map(({ key, icon: Icon }) => (
            <div key={key} className="flex flex-col items-center rounded-2xl border border-gray-200 px-4 py-6 text-center transition hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg hover:shadow-primary/5">
              <Icon className="size-7 text-secondary" aria-hidden="true" />
              <p className="mt-4 text-sm font-semibold text-primary-dark">{t(`vegamind-adapt-${key}`)}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-primary-dark/75">{t('vegamind-adapt-footnote')}</p>
      </div>
    </section>
  )
}
