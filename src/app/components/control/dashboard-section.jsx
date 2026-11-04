'use client'

import { useState } from 'react'
import { ChartBarIcon, SignalIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import styles from './dashboard-section.module.css'

const hotspots = [
  { key: 'gateway', icon: SignalIcon, position: { top: '6%', left: '4%', width: '92%', height: '8%' } },
  { key: 'overview', icon: ChartBarIcon, position: { top: '14%', left: '4%', width: '92%', height: '14%' } },
  { key: 'pumps', iconSrc: '/images/icons/motor-pump-icon-secondary.svg', position: { top: '28%', left: '4%', width: '92%', height: '16%' } },
  { key: 'valves', iconSrc: '/images/icons/valve-outline-icon-secondary.svg', position: { top: '45%', left: '3%', width: '94%', height: '51%' } },
]

export default function DashboardSection() {
  const { t, i18n } = useTranslation()
  const [activeHotspot, setActiveHotspot] = useState(null)

  return (
    <section id="dashboard-section" className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary-dark">{t('dashboard-section-eyebrow')}</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-primary-dark sm:text-5xl">{t('dashboard-section-title')}</h2>
          <p className="mt-5 text-pretty text-base leading-7 text-primary-dark/65 sm:text-lg">{t('dashboard-section-description')}</p>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-3">
            {hotspots.map(({ key, icon: Icon, iconSrc }) => {
              const active = activeHotspot === key
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveHotspot(active ? null : key)}
                  className={`${styles.hotspotCard} ${active ? styles.hotspotCardActive : ''}`}
                >
                  <span className={styles.hotspotIcon}>{iconSrc ? <img src={iconSrc} alt="" /> : <Icon aria-hidden="true" />}</span>
                  <span className={`min-w-0 flex-1 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <span className="block text-base font-semibold text-primary-dark">{t(`dashboard-hotspot-${key}-title`)}</span>
                    <span className="mt-2 block text-sm leading-6 text-primary-dark/85">{t(`dashboard-hotspot-${key}-description`)}</span>
                  </span>
                  <span className={`${styles.chevron} ${active ? styles.chevronActive : ''}`} aria-hidden="true">+</span>
                </button>
              )
            })}
          </div>

          <div className={styles.dashboardFrame}>
            <div className={styles.dashboardImageWrap}>
              <img src="/images/screens/dashboard-tablet.png" alt={t('dashboard-section-image-alt')} className={styles.dashboardImage} />
              {hotspots.map(({ key, position }) => (
                <div
                  key={key}
                  aria-hidden="true"
                  className={`${styles.dashboardRing} ${activeHotspot === key ? styles.dashboardRingActive : ''}`}
                  style={position}
                />
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
