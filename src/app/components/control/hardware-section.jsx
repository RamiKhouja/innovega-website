'use client'

import { useTranslation } from 'react-i18next'
import styles from './hardware-section.module.css'

const hardware = [
  { key: 'gateway', image: '/images/gallery/gateway-2.jpg' },
  { key: 'valve-controller', image: '/images/gallery/valve-2.jpg' },
  { key: 'pump-controller', image: '/images/gallery/pump-controller.jpg'},
]

export default function HardwareSection() {
  const { t } = useTranslation()

  return (
    <section id="hardware" className="bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary-dark">{t('hardware-section-eyebrow')}</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-primary-dark sm:text-5xl">{t('hardware-section-title')}</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {hardware.map(({ key, image, caption }) => (
            <article key={key} className={styles.hardwareCard}>
              <div className={styles.imageWrap}>
                <img src={image} alt={t(`hardware-${key}-alt`)} className={styles.hardwareImage} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-primary-dark">{t(`hardware-${key}-title`)}</h3>
                <p className="mt-3 text-sm leading-6 text-primary-dark/65">{t(`hardware-${key}-description`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
