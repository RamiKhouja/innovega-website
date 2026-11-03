'use client'

import {
  BookOpenIcon,
  CalendarDaysIcon,
  Square3Stack3DIcon,
  CloudIcon,
  EyeIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

const sources = [
  { key: 'agronomic', icon: BookOpenIcon },
  { key: 'crop', icon: CalendarDaysIcon },
  { key: 'soil', icon: Square3Stack3DIcon },
  { key: 'weather', icon: CloudIcon },
  { key: 'plant', icon: EyeIcon },
  { key: 'infrastructure', icon: WrenchScrewdriverIcon },
]

export default function VegamindAgriculturalData() {
  const { t } = useTranslation()

  return (
    <section id="agricultural-data" className="bg-white px-6 py-20 sm:px-10 sm:pb-28 pt-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          {/* <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary-dark">{t('vegamind-data-eyebrow')}</p> */}
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-primary-dark sm:text-5xl">{t('vegamind-data-eyebrow')}</h2>
          <p className="mt-5 text-pretty text-base leading-7 text-primary-dark/65 sm:text-lg">{t('vegamind-data-intro')}</p>
        </div>

        {/* <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-secondary/20 bg-light-mint/60 px-5 py-4 text-center text-sm leading-6 text-primary-dark/80 sm:px-8">
          {t('vegamind-data-note')}
        </div> */}

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:gap-5">
          {sources.map(({ key, icon: Icon }) => (
            <article key={key} className="group rounded-2xl border border-secondary bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
              <Icon className="size-8 text-secondary transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-primary-dark">{t(`vegamind-data-${key}`)}</h3>
              <p className="mt-2 text-sm leading-6 text-primary-dark/65">{t(`vegamind-data-${key}-description`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
