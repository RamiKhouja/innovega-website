'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import DemoRequestModal from '../ui/demo-request'
import VideoModal from '../ui/videoModal'

const galleryVideos = [
  { id: 'ZRKsIWkwL6Y', title: 'gallery-valve-video-title', description: 'gallery-valve-video-description' },
  { id: 'NZiXpF6DXj0', title: 'gallery-pump-video-title', description: 'gallery-pump-video-description' },
]

export default function VideoDemos() {
  const { t, i18n } = useTranslation()
  const [openDemoReqModal, setOpenDemoReqModal] = useState(false)
  const [openVideoModal, setOpenVideoModal] = useState(false)
  const videoSrc = 'https://www.youtube.com/embed/uCZLsbdt4PM?si=wZA6bzhKM5w5693x'

  return (
    <section className="bg-gray-50 py-20 sm:py-24" aria-labelledby="gallery-videos-title">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16 lg:px-8">
        <div className={`max-w-md lg:pt-8 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
          <h2 id="gallery-videos-title" className="text-pretty text-3xl font-semibold tracking-tight text-primary-dark sm:text-4xl">
            {t('gallery-videos-title')}
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            {t('gallery-videos-description')}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <button
              type="button"
              onClick={() => setOpenDemoReqModal(true)}
              className="cursor-pointer rounded-full bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
            >
              {t('get-started')}
            </button>
            <button
              type="button"
              onClick={() => setOpenVideoModal(true)}
              className="cursor-pointer text-sm font-semibold text-gray-900 hover:text-secondary-dark"
            >
              {t('live-demo')} <span aria-hidden="true">{i18n.language === 'ar' ? '←' : '→'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          {galleryVideos.map((video, index) => (
            <article key={video.id} className={index === 1 ? 'mt-8 lg:mt-36' : ''}>
              <div className="mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-2xl bg-primary-dark shadow-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={t(video.title)}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className={`mt-6 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
                <h3 className="text-xl font-semibold text-primary-dark">{t(video.title)}</h3>
                <p className="mt-2 text-gray-600">{t(video.description)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <DemoRequestModal open={openDemoReqModal} setOpen={setOpenDemoReqModal} />
      <VideoModal open={openVideoModal} setOpen={setOpenVideoModal} videoSrc={videoSrc} />
    </section>
  )
}
