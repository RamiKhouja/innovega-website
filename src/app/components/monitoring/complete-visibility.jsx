'use client'

import {
  BellAlertIcon,
  ChartBarIcon,
  SignalIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const capabilities = [
  { key: 'sensor', icon: SignalIcon, link: '#sensor-monitoring' },
  { key: 'water', icon: ChartBarIcon, link: '#water-reports' },
  { key: 'alerts', icon: BellAlertIcon, link: '#notifications' },
]

export default function CompleteVisibility() {
  const { t } = useTranslation()

  return (
    <section className="bg-white px-6 py-20 sm:px-10 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary-dark sm:text-4xl">
            {t('monitoring-visibility-title')}
          </h2>
          {/* <h3 className="mt-8 text-2xl font-semibold tracking-tight text-primary-dark sm:text-3xl">
            {t('monitoring-visibility-heading')}
          </h3> */}
          <p className="mt-4 text-pretty text-base leading-7 text-primary-dark/75 sm:text-lg">
            {t('monitoring-visibility-intro')}
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {capabilities.map(({ key, icon: Icon, link }) => (
            <Link
              key={key}
              href={link}
              className="rounded-2xl cursor-pointer border border-secondary bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 sm:p-6"
            >
              <Icon className="size-7 text-secondary" aria-hidden="true" />
              <h4 className="mt-6 text-lg font-semibold text-primary-dark sm:text-xl">
                {t(`monitoring-visibility-${key}-title`)}
              </h4>
              <p className="mt-3 text-sm leading-6 text-primary-dark/75 sm:text-base">
                {t(`monitoring-visibility-${key}-description`)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
