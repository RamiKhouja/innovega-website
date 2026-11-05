'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function MonitoringVegamindCta() {
  const { t, i18n } = useTranslation()

  return (
    <section className="bg-white px-6 pb-20 sm:px-10 sm:pb-24 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl bg-primary-dark px-6 py-8 text-white sm:px-8 sm:py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
          {t('monitoring-vegamind-eyebrow')}
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          {t('monitoring-vegamind-title')}
        </h2>
        <p className="mt-4 max-w-4xl text-base leading-7 text-white/85 sm:text-lg">
          {t('monitoring-vegamind-description')}
        </p>
        <Link
          href="/vegamind"
          className="mt-6 inline-flex items-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-primary-dark shadow-sm transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {t('monitoring-vegamind-cta')}
          <span className="ml-2" aria-hidden="true">{i18n.language === 'ar' ? '←' : '→'}</span>
        </Link>
      </div>
    </section>
  )
}
