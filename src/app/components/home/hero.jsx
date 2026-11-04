'use client'

import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import VideoModal from '../ui/videoModal'
import DemoRequestModal from '../ui/demo-request'
import styles from './hero.module.css'

function ConnectivityPattern() {
  return (
    <svg aria-hidden="true" className={styles.connectivityPattern} viewBox="0 0 720 620" fill="none" preserveAspectRatio="none">
      <defs>
        <filter id="home-control-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="home-control-line" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#1aa6a6" stopOpacity="0" />
          <stop offset="0.45" stopColor="#1aa6a6" stopOpacity="0.55" />
          <stop offset="1" stopColor="#1aa6a6" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <g stroke="url(#home-control-line)" strokeWidth="1.5">
        <path d="M30 120 170 80l120 100 160-40 210 125" /><path d="M80 390 210 260l125 75 125-130 215 75" />
        <path d="M280 20 290 180l45 155 35 250" /><path d="M580 0 450 140l10 180-115 160" />
        <path d="M170 80 210 260l-5 170 145 80" />
      </g>
      <g fill="#1aa6a6" filter="url(#home-control-glow)">
        <circle cx="170" cy="80" r="4" /><circle cx="290" cy="180" r="3" /><circle cx="450" cy="140" r="4" />
        <circle cx="335" cy="335" r="5" /><circle cx="460" cy="320" r="3" /><circle cx="350" cy="570" r="4" /><circle cx="690" cy="265" r="4" />
      </g>
    </svg>
  )
}

function Hero() {
    const { t, i18n} = useTranslation()
    const [openModal, setOpenModal] = useState(false)
    const [openDemoReqModal, setOpenDemoReqModal] = useState(false)
    const [videoSrc, setVideoSrc] = useState('https://www.youtube.com/embed/uCZLsbdt4PM?si=wZA6bzhKM5w5693x')


  return (
    <div className="relative isolate overflow-hidden">
        <ConnectivityPattern />
        <div className={styles.glow} />
        <svg
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 -z-10 h-[48rem] w-full stroke-[#1aa6a6]/30 ${styles.squarePattern}`}
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
        <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-36 sm:pt-60 lg:px-8 lg:pt-32 lg:pb-24">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl 2xl:max-w-3xl">
                
                <h1 className="text-pretty text-4xl font-semibold leading-snug text-gray-900 sm:text-6xl">
                {t('hero-title')}
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-primary-dark sm:max-w-md sm:text-xl/8 lg:max-w-none">
                {t('hero-subtitle')}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                <button
                    onClick={() => setOpenDemoReqModal(true)}
                    className="rounded-full cursor-pointer bg-primary hover:bg-secondary-dark px-3.5 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
                >
                    {t('get-started')}
                </button>
                <button 
                    onClick={() => setOpenModal(true)}
                    className="text-sm/6 font-semibold text-gray-900 cursor-pointer hover:text-secondary-dark"
                >
                    {t('live-demo')} <span aria-hidden="true">{i18n.language === 'ar' ? '←' : '→'}</span>
                </button>
                </div>
            </div>
            <div className="flex justify-end gap-8 mt-16 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 xl:pl-20">
                <div className="ml-auto w-48 lg:w-72 xl:w-80 flex-none space-y-8 lg:order-last xl:order-none ">
                <div className="relative rounded-[1.65rem] bg-white/70 shadow-[0_28px_70px_rgba(10,61,77,0.16),0_0_0_10px_rgba(26,166,166,0.08)] backdrop-blur-[8px]">
                    <img
                    alt=""
                    src="/images/hero-image.png"
                    className=" w-full rounded-4xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute -inset-[0.9rem] -z-10 rounded-[2rem] border border-[#1aa6a6]/35" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <VideoModal open={openModal} setOpen={setOpenModal} videoSrc={videoSrc} />
        <DemoRequestModal open={openDemoReqModal} setOpen={setOpenDemoReqModal} />
    </div>
  )
}

export default Hero
