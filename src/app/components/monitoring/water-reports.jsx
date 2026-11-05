'use client'

import { CalendarDaysIcon, ChartBarIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './water-reports.module.css'

const reports = [
  { key: 'daily', icon: ClockIcon, position: { top: '18%', left: '8%', width: '84%', height: '18%' } },
  { key: 'trends', icon: CalendarDaysIcon, position: { top: '36%', left: '8%', width: '84%', height: '18%' } },
  { key: 'historical', icon: ChartBarIcon, position: { top: '54%', left: '8%', width: '84%', height: '18%' } },
  { key: 'accountability', icon: CheckCircleIcon, position: { top: '72%', left: '8%', width: '84%', height: '18%' } },
]

const periods = ['daily', 'trends', 'historical', 'accountability']

export default function WaterReports() {
  const { t, i18n } = useTranslation()
  const [activeReport, setActiveReport] = useState('daily')

  return (
    <section id="water-reports" className="bg-light-mint px-6 py-20 sm:px-10 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary-dark">
            {t('water-reports-eyebrow')}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-primary-dark sm:text-5xl">
            {t('water-reports-title')}
          </h2>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-primary-dark/75 sm:text-lg">
            {t('water-reports-description')}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label={t('water-reports-period-selector')}>
          {periods.map((period) => (
            <button
              key={period}
              type="button"
              aria-pressed={activeReport === period}
              onClick={() => setActiveReport(period)}
              className={`${styles.periodButton} ${activeReport === period ? styles.periodButtonActive : ''}`}
            >
              {t(`water-reports-period-${period}`)}
            </button>
          ))}
        </div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div className="space-y-3">
            {reports.map(({ key, icon: Icon }) => {
              const active = activeReport === key
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveReport(key)}
                  className={`${styles.reportCard} ${active ? styles.reportCardActive : ''}`}
                >
                  <span className={styles.reportIcon}><Icon aria-hidden="true" /></span>
                  <span className={`min-w-0 flex-1 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <span className="block text-base font-semibold text-primary-dark">
                      {t(`water-reports-${key}-title`)}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-primary-dark/75">
                      {t(`water-reports-${key}-description`)}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          <div className={styles.reportFrame}>
            <div className={styles.reportImageWrap}>
              <img src="/images/screens/flow-reports.png" alt={t('water-reports-image-alt')} className={styles.reportImage} />
              {reports.map(({ key, position }) => (
                <div
                  key={key}
                  aria-hidden="true"
                  className={`${styles.reportRing} ${activeReport === key ? styles.reportRingActive : ''}`}
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
