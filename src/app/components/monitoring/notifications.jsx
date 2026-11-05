'use client'

import { useTranslation } from 'react-i18next'

export default function Notifications() {
  const { t } = useTranslation()

  return (
    <section id="notifications" className="bg-white px-6 py-20 sm:px-10 sm:py-32 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 flex justify-center lg:order-1">
          <img
            src="/images/screens/notifications.png"
            alt={t('notifications-image-alt')}
            className="w-full max-w-xl object-contain drop-shadow-[0_24px_30px_rgba(10,61,77,0.16)]"
          />
        </div>

        <div className="order-1 max-w-2xl lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary-dark">
            {t('notifications-eyebrow')}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-primary-dark sm:text-5xl">
            {t('notifications-title')}
          </h2>
          <p className="mt-5 text-pretty text-base leading-7 text-primary-dark/70 sm:text-lg">
            {t('notifications-description')}
          </p>
        </div>
      </div>
    </section>
  )
}
