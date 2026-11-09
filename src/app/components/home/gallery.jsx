'use client'

import { useRef, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import { A11y, Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const galleryItems = [
  { image: '/images/gallery/valve-controller-v1.jpg', title: 'gallery-valve-controller-title', description: 'gallery-valve-controller-description' },
  { image: '/images/gallery/gateway.jpg', title: 'gallery-gateway-title', description: 'gallery-gateway-description' },
  { image: '/images/gallery/valve-controller-v1-night.jpg', title: 'gallery-night-controller-title', description: 'gallery-night-controller-description' },
  { image: '/images/gallery/pump-controller.jpg', title: 'gallery-pump-controller-title', description: 'gallery-pump-controller-description' },
  { image: '/images/gallery/flowmeter.jpg', title: 'gallery-flowmeter-title', description: 'gallery-flowmeter-description' },
  { image: '/images/gallery/pump-controller-v1.jpg', title: 'gallery-pump-controller-v1-title', description: 'gallery-pump-controller-v1-description' },
  { image: '/images/gallery/valve-controller-v2.jpg', title: 'gallery-valve-controller-v2-title', description: 'gallery-valve-controller-v2-description' },
]

export default function Gallery() {
  const { t, i18n } = useTranslation()
  const [selectedItem, setSelectedItem] = useState(null)
  const swiperRef = useRef(null)

  return (
    <section id="product" className="overflow-hidden mt-8 bg-white py-20 sm:py-24" aria-labelledby="gallery-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="gallery-title" className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {t('gallery-title')}
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            {t('gallery-description')}
          </p>
        </div>

        <div
          className="mt-12 sm:mt-14"
          onMouseEnter={() => swiperRef.current?.autoplay.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay.start()}
        >
          <Swiper
            dir="ltr"
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            modules={[A11y, Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ el: '.gallery-pagination', clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2.2, spaceBetween: 20 },
              1024: { slidesPerView: 3.2, spaceBetween: 24 },
              1536: { slidesPerView: 4.2, spaceBetween: 24 },
            }}
            className="mx-auto w-full max-w-7xl !overflow-hidden !pr-6 sm:!pr-8"
          >
            {galleryItems.map((item) => (
              <SwiperSlide key={item.image}>
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  aria-label={t(item.title)}
                  dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                  className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-primary shadow-lg ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}
                >
                  <img
                    src={item.image}
                    alt={t(item.title)}
                    className="aspect-[3/4] h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-primary-dark/90 via-primary-dark/45 to-transparent px-5 pb-5 pt-14 transition-all duration-700 ease-out group-hover:h-2/3 group-hover:from-primary-dark group-hover:via-primary-dark/80 group-focus-within:h-2/3 group-focus-within:from-primary-dark group-focus-within:via-primary-dark/80">
                    <div className="absolute bottom-5 left-5 right-5 transition duration-700 ease-out">
                      <h3 className="text-lg font-semibold text-white">{t(item.title)}</h3>
                      <p className="mt-0 max-h-0 translate-y-3 overflow-hidden text-sm leading-6 text-white/75 opacity-0 transition-all delay-100 duration-700 ease-out group-hover:mt-2 group-hover:max-h-24 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:mt-2 group-focus-within:max-h-24 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                        {t(item.description)}
                      </p>
                    </div>
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="gallery-pagination mt-6 flex min-h-3 items-center justify-center" />
        </div>
      </div>

      <Dialog open={Boolean(selectedItem)} onClose={() => setSelectedItem(null)} className="relative z-50">
        <DialogBackdrop transition className="modal-backdrop fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200" />
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-8">
            <DialogPanel
              transition
              dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
              className={`relative w-full max-w-5xl transform overflow-hidden rounded-3xl bg-gray-50 p-6 shadow-2xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 sm:p-8 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}
            >
              {selectedItem && (
                <>
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    aria-label={t('close')}
                    className={`absolute top-5 rounded-full p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-800 ${i18n.language === 'ar' ? 'left-5' : 'right-5'}`}
                  >
                    <XMarkIcon className="size-6" aria-hidden="true" />
                  </button>

                  <div className="flex max-h-[70vh] items-center justify-center overflow-hidden rounded-2xl bg-gray-50">
                    <img src={selectedItem.image} alt={t(selectedItem.title)} className="max-h-[70vh] w-full object-contain" />
                  </div>
                  <div className={`mt-6 ${i18n.language === 'ar' ? 'pl-8' : 'pr-8'}`}>
                    <DialogTitle className="text-2xl font-semibold text-primary-dark sm:text-3xl">{t(selectedItem.title)}</DialogTitle>
                    <p className="mt-2 text-sm text-gray-600">{t(selectedItem.description)}</p>
                  </div>
                </>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>

    </section>
  )
}
