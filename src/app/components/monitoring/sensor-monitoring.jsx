'use client'

import { BeakerIcon, ChartBarIcon, SignalIcon, WifiIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './sensor-monitoring.module.css'

const hotspots = [
  {
    key: 'soil',
    icon: SignalIcon,
    positions: [{ top: '44%', left: '8%', width: '84%', height: '22%' }],
  },
  {
    key: 'flow',
    icon: BeakerIcon,
    positions: [{ top: '68%', left: '8%', width: '42%', height: '21%' }],
  },
  {
    key: 'pressure',
    icon: ChartBarIcon,
    positions: [{ top: '68%', left: '51%', width: '41%', height: '21%' }],
  },
  {
    key: 'connectivity',
    icon: WifiIcon,
    positions: [
      { top: '16%', left: '8%', width: '84%', height: '8%' },
      { top: '32%', left: '8%', width: '84%', height: '14%' },
    ],
  },
]

export default function SensorMonitoring() {
  const { t, i18n } = useTranslation()
  const [activeHotspot, setActiveHotspot] = useState(null)

  return (
    <section id="sensor-monitoring" className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary-dark">
            {t('sensor-monitoring-eyebrow')}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-primary-dark sm:text-5xl">
            {t('sensor-monitoring-title')}
          </h2>
          <p className="mt-5 text-pretty text-base leading-7 text-primary-dark/65 sm:text-lg">
            {t('sensor-monitoring-description')}
          </p>
        </div>

        <div className="mx-auto mt-12 w-full max-w-5xl">
          <div className={styles.sensorFrame}>
            <div className={styles.sensorImageWrap}>
              <img src="/images/screens/sensors.png" alt={t('sensor-monitoring-image-alt')} className={styles.sensorImage + ' drop-shadow-xl'} />
              {hotspots.flatMap(({ key, positions }) => positions.map((position, index) => (
                <div
                  key={`${key}-${index}`}
                  aria-hidden="true"
                  className={`${styles.sensorRing} ${activeHotspot === key ? styles.sensorRingActive : ''}`}
                  style={position}
                />
              )))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-3 lg:grid-cols-2">
            {hotspots.map(({ key, icon: Icon }) => {
              const active = activeHotspot === key
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveHotspot(active ? null : key)}
                  className={`${styles.hotspotCard} ${active ? styles.hotspotCardActive : ''}`}
                >
                  <span className={styles.hotspotIcon}><Icon aria-hidden="true" /></span>
                  <span className={`min-w-0 flex-1 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <span className="block text-base font-semibold text-primary-dark">
                      {t(`sensor-monitoring-${key}-title`)}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-primary-dark/85">
                      {t(`sensor-monitoring-${key}-description`)}
                    </span>
                  </span>
                  <span className={`${styles.chevron} ${active ? styles.chevronActive : ''}`} aria-hidden="true">+</span>
                </button>
              )
            })}
        </div>
      </div>
    </section>
  )
}
