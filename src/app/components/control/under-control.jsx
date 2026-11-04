'use client'

import {
  AdjustmentsHorizontalIcon,
  CalendarDaysIcon,
  MapIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const capabilities = [
  { key: 'remote-control', icon: AdjustmentsHorizontalIcon, link: '#dashboard-section' },
  { key: 'smart-scheduling', icon: CalendarDaysIcon, link: '#schedule-section' },
  { key: 'field-management', icon: MapIcon, link: '#map-section' },
]

export default function UnderControl() {
  const { t } = useTranslation()

  return (
    <section id="under-control" className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary-dark sm:text-4xl">
            {t('under-control-title')}
          </h2>
          <p className="mt-4 text-pretty text-base leading-7 text-primary-dark/85 sm:text-lg">
            {t('under-control-intro')}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {capabilities.map(({ key, icon: Icon, link }) => (
            <Link
              href={link}
              key={key}
              className="group rounded-3xl border border-secondary/50 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-lg hover:shadow-primary/5 sm:p-6"
            >
              <Icon className="size-8 text-secondary transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              <h3 className="mt-6 text-lg lg:text-2xl font-semibold text-primary-dark">
                {t(`under-control-${key}-title`)}
              </h3>
              <p className="mt-2 text-sm lg:text-base leading-6 text-primary-dark/85">
                {t(`under-control-${key}-description`)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
