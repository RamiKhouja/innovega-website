'use client'

import { CalendarDaysIcon, CircleStackIcon, CpuChipIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

const steps = [
  { key: 'data', icon: CircleStackIcon },
  { key: 'vegamind', icon: CpuChipIcon },
  { key: 'schedule', icon: CalendarDaysIcon },
]

export default function VegamindHowItWorks() {
  const { t } = useTranslation()

  return (
    <section id="how-vegamind-works" className="relative overflow-hidden bg-white px-6 py-20 text-primary-dark sm:px-10 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          {/* <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">{t('vegamind-how-eyebrow')}</p> */}
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">{t('vegamind-how-eyebrow')}</h2>
          <p className="mt-5 text-pretty text-base leading-7 text-primary-dark/75 sm:text-lg">{t('vegamind-how-intro')}</p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[1.5rem] border border-secondary bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(49,188,133,0.09),transparent_36%)]" aria-hidden="true" />

          <div className="relative mx-auto max-w-5xl">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-4 lg:gap-8">
              {steps.map(({ key, icon: Icon }, index) => (
                <div key={key} className="contents">
                  <div className={`relative flex min-h-32 flex-col items-center justify-center rounded-2xl px-4 text-center ${key === 'vegamind' ? 'bg-light-mint shadow-[0_0_40px_rgba(49,188,133,0.08)] ring-1 ring-secondary/20' : ''}`}>
                    <Icon className="size-7 text-secondary" aria-hidden="true" />
                    <h3 className="mt-3 text-base font-semibold uppercase tracking-wide text-primary-dark">{t(`vegamind-how-${key}`)}</h3>
                    <p className="mt-2 max-w-[15rem] text-sm leading-5 text-primary-dark/75">{t(`vegamind-how-${key}-description`)}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="relative flex h-8 items-center justify-center md:h-auto md:w-14" aria-hidden="true">
                      <div className="h-px w-16 bg-gradient-to-r from-secondary/20 via-secondary to-secondary/20" />
                      <span className="absolute size-1.5 animate-vegamind-flow rounded-full bg-secondary shadow-[0_0_10px_#31BC85]" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-primary-dark">
              <ArrowPathIcon className="size-5 shrink-0 animate-[spin_3s_linear_infinite] text-secondary motion-reduce:animate-none" aria-hidden="true" />
              <span>{t('vegamind-how-rethink')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
