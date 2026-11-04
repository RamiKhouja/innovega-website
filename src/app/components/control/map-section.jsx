'use client'

import {
  AdjustmentsHorizontalIcon,
  MapPinIcon,
  SignalIcon,
  CursorArrowRaysIcon,
} from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import styles from './map-section.module.css'

const mapFeatures = [
  { key: 'controllers', icon: MapPinIcon },
  { key: 'connectivity', icon: SignalIcon },
  { key: 'control', icon: CursorArrowRaysIcon },
  { key: 'section', icon: AdjustmentsHorizontalIcon },
]

export default function MapSection() {
  const { t } = useTranslation()

  return (
    <section id="map-section" className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary-dark sm:text-5xl">{t('map-section-title')}</h2>
          <p className="mt-5 text-pretty text-base leading-7 text-primary-dark/65 sm:text-lg">{t('map-section-description')}</p>
        </div>

        <div className={styles.tabletFrame}>
          <div className={styles.tabletTopBar} aria-hidden="true">
            <span className={styles.tabletCamera} />
          </div>
          <div className={styles.tabletScreen}>
            <img src="/images/screens/map.jpg" alt={t('map-section-image-alt')} className={styles.mapImage} />
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-x-8 gap-y-6 sm:grid-cols-2">
          {mapFeatures.map(({ key, icon: Icon }) => (
            <div key={key} className="flex items-center justify-center gap-3 text-base font-medium text-primary-dark sm:text-lg">
              <Icon className="size-5 shrink-0 text-secondary-dark" aria-hidden="true" />
              <span>{t(`map-feature-${key}`)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
