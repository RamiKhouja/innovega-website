'use client'

import Link from "next/link";
import { useTranslation } from "react-i18next"

export default function Example() {
  const {t, i18n} = useTranslation();

  return (
    <div className="bg-white" id="about">

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight italic text-gray-900 sm:text-5xl lg:col-span-2 xl:col-auto">
                {t('who-we-are')}
              </h1>
              <div className="relative mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-pretty text-lg font-medium text-gray-700 sm:text-xl/8 mb-8">
                  {t('about-p1')}
                </p>
                <p className="text-pretty text-lg font-medium text-gray-700 sm:text-xl/8 mb-8">
                  {t('about-p2')}
                </p>
                <p className="text-pretty text-lg font-medium text-gray-700 sm:text-xl/8">
                  {t('about-p3')}
                </p>
                <Link href="/" className="mt-8 lg:mt-16 inline-block rounded-full bg-transparent border border-primary px-3 py-1.5 text-primary text-sm font-semibold hover:text-white shadow-md hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  {t('learn-more')}
                </Link>
                <img
                  alt=""
                  src="/images/patterns/pattern-full.png"
                  className={`absolute -bottom-16 hidden lg:block ${i18n.language==='ar' ? 'left-0': 'right-0'} w-2/5 opacity-50 h-auto max-w-xs object-cover sm:max-w-md lg:max-w-none animate-sway`}
                />
              </div>
              <img
                alt=""
                src="/images/about-section.jpg"
                //src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-16 shadow-lg"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>


      </main>

    </div>
  )
}
