import Link from 'next/link'
import { useTranslation } from 'react-i18next'

function VegamindPattern() {
  return (
    <svg viewBox="0 0 720 360" fill="none" aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 top-auto h-[58%] w-full max-w-none opacity-30 sm:inset-y-0 sm:h-full sm:max-w-3xl" preserveAspectRatio="xMidYMax slice">
      <g stroke="currentColor" strokeWidth="1">
        <path d="M455 32 548 92v82l-92 58-93-58V92l92-60Z" />
        <path d="m548 92 72-38 64 40v72l-64 36-72-26M363 92l-70-40-66 40v76l66 38 70-30M456 232v72l-68 40M456 232l70 36v74M294 168l-68 46v70l68 40M620 186l-58 46v72l58 40" />
        <path d="m363 92 93 60 92-60M363 174l93 58 92-58M294 52l68 40M526 268l36-36M620 186l64 38" />
        <path d="M154 102h70M92 248h134M604 54h68M638 302h52" />
      </g>
      <text x="416" y="214" fill="none" stroke="currentColor" strokeWidth="1" fontSize="72" fontFamily="Arial, sans-serif" fontWeight="300" letterSpacing="6">AI</text>
      <g fill="currentColor">
        <circle cx="455" cy="32" r="4" /><circle cx="548" cy="92" r="4" /><circle cx="456" cy="152" r="4" />
        <circle cx="363" cy="92" r="4" /><circle cx="363" cy="174" r="4" /><circle cx="548" cy="174" r="4" />
        <circle cx="620" cy="54" r="4" /><circle cx="684" cy="94" r="4" /><circle cx="226" cy="52" r="4" />
        <circle cx="226" cy="214" r="4" /><circle cx="92" cy="248" r="4" /><circle cx="690" cy="302" r="4" />
      </g>
      <g stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 7">
        <path d="M86 78c38 10 53 29 68 64M590 332c8-26 24-42 48-52M160 316c33-22 54-29 84-26" />
      </g>
    </svg>
  )
}

export default function VegamindCta() {
  const { t, i18n } = useTranslation()

  return (
    <section id="vegamind" className="relative isolate overflow-hidden bg-primary-dark text-white">
      {/* <VegamindPattern /> */}
      <img src="/images/ai-pattern.png" alt="" className={`pointer-events-none absolute bottom-0 right-0 top-auto h-fit w-full opacity-30 sm:inset-y-0 sm:bottom-auto ${i18n.language === 'ar' ? '-scale-x-100' : ''}`} />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{t('vegamind-eyebrow')}</p>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{t('vegamind-title')}</h2>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-white/95 sm:text-lg lg:text-xl sm:leading-8">{t('vegamind-description')}</p>
          <Link href="/vegamind" className="vegamind-cta-button mt-8 inline-flex items-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-primary shadow-sm transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            {t('vegamind-cta')}
            <span className="ml-2" aria-hidden="true">{i18n.language === 'ar' ? '←' : '→'}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
