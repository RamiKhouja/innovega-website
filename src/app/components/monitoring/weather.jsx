'use client'

import { ArrowsRightLeftIcon, CalendarDaysIcon, CloudIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

const conditions = [
  { key: 'temperature', icon: SunIcon },
  { key: 'humidity', icon: CloudIcon },
  { key: 'wind', icon: ArrowsRightLeftIcon },
  { key: 'forecasts', icon: CalendarDaysIcon },
]

export default function Weather() {
  const { t } = useTranslation()

  return (
    <section id="weather" className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary-dark">
            {t('weather-eyebrow')}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-primary-dark sm:text-5xl">
            {t('weather-title')}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-primary-dark/70 sm:text-lg">
            {t('weather-description')}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:max-w-2xl">
            {conditions.map(({ key, icon: Icon }) => (
              <div key={key} className="flex flex-col items-center gap-3 text-center">
                <Icon className="size-7 text-secondary" aria-hidden="true" />
                <span className="text-sm font-semibold text-primary-dark sm:text-base">
                  {t(`weather-${key}`)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/screens/weather.png"
            alt={t('weather-image-alt')}
            className="w-full max-w-md object-contain drop-shadow-[0_24px_28px_rgba(10,61,77,0.18)]"
          />
        </div>
      </div>
    </section>
  )
}
