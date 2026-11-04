import { useTranslation } from 'react-i18next'

const goals = [
  {
    number: '06',
    nameKey: 'sdg-6-name',
    descriptionKey: 'sdg-6-description',
    image: '/images/sdg/sdg-6.png',
  },
  {
    number: '02',
    nameKey: 'sdg-2-name',
    descriptionKey: 'sdg-2-description',
    image: '/images/sdg/sdg-2.png',
  },
  {
    number: '07',
    nameKey: 'sdg-7-name',
    descriptionKey: 'sdg-7-description',
    image: '/images/sdg/sdg-7.png',
  },
  {
    number: '09',
    nameKey: 'sdg-9-name',
    descriptionKey: 'sdg-9-description',
    image: '/images/sdg/sdg-9.png',
  },
  {
    number: '12',
    nameKey: 'sdg-12-name',
    descriptionKey: 'sdg-12-description',
    image: '/images/sdg/sdg-12.png',
  },
  {
    number: '13',
    nameKey: 'sdg-13-name',
    descriptionKey: 'sdg-13-description',
    image: '/images/sdg/sdg-13.png',
  },
]

export default function Sdg() {
  const { t } = useTranslation()

  return (
    <section id="sdg" className="bg-gradient-to-b from-white via-light-mint to-white px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src="/images/sdg/sustainability.png"
            alt={t('sdg-image-alt')}
            className="mx-auto h-32 w-32 object-contain sm:h-40 sm:w-40"
          />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl">
            {t('sdg-title')}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            {t('sdg-description')}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16">
          {goals.map((goal) => (
            <article
              key={goal.number}
              className="flex flex-wrap sm:flex-nowrap items-start gap-5 rounded-3xl border border-primary/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:gap-7 sm:p-7"
            >
              <div className="flex size-24 shrink-0 items-center justify-center rounded-xl bg-gray-50 sm:size-32">
                <img
                  src={goal.image}
                  alt={t('sdg-goal-image-alt', { number: goal.number })}
                  className="size-full object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-bold tracking-[0.18em] text-secondary-dark sm:text-base">
                  {t('sdg-label', { number: goal.number })}
                </p>
                <h3 className="mt-1 text-lg font-bold leading-snug text-primary-dark sm:text-xl">
                  {t(goal.nameKey)}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                  {t(goal.descriptionKey)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
