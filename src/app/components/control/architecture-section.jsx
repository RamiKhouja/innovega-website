'use client'

import { CloudIcon, ComputerDesktopIcon, SignalIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import styles from './architecture-section.module.css'

function VerticalConnector() {
  return <div className={styles.verticalConnector} aria-hidden="true"><span className={styles.flowDot} /></div>
}

export default function ArchitectureSection() {
  const { t } = useTranslation()

  return (
    <section id="architecture-section" className="bg-white px-6 py-20 sm:px-10 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary-dark sm:text-5xl">{t('architecture-section-title')}</h2>
          <p className="mt-5 text-pretty text-base leading-7 text-primary-dark/85 sm:text-lg">{t('architecture-section-description')}</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className={styles.architectureDiagram}>
            <p className="text-center text-sm mb-4 font-semibold uppercase tracking-[0.18em] text-primary-dark/55 dark:text-gray-100">{t('architecture-diagram-label')}</p>

            <div className={styles.diagramNode}>
              <ComputerDesktopIcon className={styles.nodeIcon} aria-hidden="true" />
              <h3>{t('architecture-application-title')}</h3>
              <p>{t('architecture-application-description')}</p>
            </div>
            <VerticalConnector />
            <div className={styles.diagramNode}>
              <CloudIcon className={styles.nodeIcon} aria-hidden="true" />
              <h3>{t('architecture-cloud-title')}</h3>
              <p>{t('architecture-cloud-description')}</p>
            </div>
            <VerticalConnector />
            <div className={`${styles.diagramNode} ${styles.gatewayNode}`}>
              <SignalIcon className={styles.nodeIcon} aria-hidden="true" />
              <h3>{t('architecture-gateway-title')}</h3>
              <p>{t('architecture-gateway-description')}</p>
            </div>

            <div className={styles.branchConnectors} aria-hidden="true">
              <div className={styles.branchLine}><span className={styles.flowDot} /></div>
              <div className={styles.branchLine}><span className={styles.flowDot} /></div>
            </div>
            <div className="mt-4 grid gap-2 sm:gap-8 grid-cols-2">
              <div className={styles.fieldNode}>
                <img src="/images/icons/valve-outline-icon-secondary.svg" alt="" />
                <h3>{t('architecture-valve-title')}</h3>
                <p>{t('architecture-valve-description')}</p>
              </div>
              <div className={styles.fieldNode}>
                <img src="/images/icons/motor-pump-icon-secondary.svg" alt="" />
                <h3>{t('architecture-pump-title')}</h3>
                <p>{t('architecture-pump-description')}</p>
              </div>
            </div>
          </div>

          <img src="/images/field-architecture.jpg" alt={t('architecture-image-alt')} className="w-full rounded-3xl object-cover shadow-2xl shadow-primary-dark/15" />
        </div>
      </div>
    </section>
  )
}
