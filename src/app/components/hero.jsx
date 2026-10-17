'use client'

import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import VideoModal from './ui/videoModal'

function Hero() {
    const { t, i18n} = useTranslation()
    const [openModal, setOpenModal] = useState(false)
    const [videoSrc, setVideoSrc] = useState('https://www.youtube.com/embed/uCZLsbdt4PM?si=wZA6bzhKM5w5693x')


  return (
    <div className="relative isolate">
        <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        >
        <defs>
            <pattern
            x="50%"
            y={-1}
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
            >
            <path d="M.5 200V.5H200" fill="none" />
            </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
            />
        </svg>
        <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div
            aria-hidden="true"
            className={`absolute ${i18n.language === 'ar' ? 'right-1/2 left-0 -mr-24 lg:mr-24 xl:mr-48' : 'left-1/2 right-0 -ml-24 lg:ml-24 xl:ml-48'} top-0 -z-10 transform-gpu overflow-hidden blur-3xl`}
        >
        <div
            style={{
            clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
            }}
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-secondary to-white opacity-30"
        />
        </div>
        <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                
                <h1 className="text-pretty text-4xl font-semibold leading-snug text-gray-900 sm:text-6xl">
                {t('smart-irrigation')}
                </h1>
                <h1 className="text-pretty text-4xl font-semibold leading-snug text-gray-900 sm:text-6xl">
                {t('anywhere-anytime')}
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-600 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                {t('hero-subtitle')}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                <a
                    href="#"
                    className="rounded-full bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {t('get-started')}
                </a>
                <button 
                    onClick={() => setOpenModal(true)}
                    className="text-sm/6 font-semibold text-gray-900 cursor-pointer hover:text-secondary-dark"
                >
                    {t('live-demo')} <span aria-hidden="true">→</span>
                </button>
                </div>
            </div>
            <div className="flex justify-end gap-8 mt-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 xl:pl-20">
                <div className="ml-auto w-48 lg:w-72 flex-none space-y-8 lg:order-last xl:order-none ">
                <div className="relative">
                    <img
                    alt=""
                    src="/images/hero-image.png"
                    className="aspect-[2/3] w-full leaf bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 leaf ring-1 ring-inset ring-gray-900/10" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <VideoModal open={openModal} setOpen={setOpenModal} videoSrc={videoSrc} />
    </div>
  )
}

export default Hero