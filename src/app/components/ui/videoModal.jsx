'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

export default function VideoModal({ open, setOpen, videoSrc, title, description }) {
  const { t, i18n } = useTranslation()

  return (
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <DialogBackdrop
          transition
          className="modal-backdrop fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-2 text-center">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-4xl bg-gray-50 text-left shadow-2xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:w-fit p-1 sm:p-2 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
                <iframe 
                    className='w-full h-auto md:h-[315px] md:w-[556px] lg:h-[420px] lg:w-[746px] xl:h-[600px] xl:w-[1066px] rounded-3xl'
                    src={videoSrc} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
                <div className={`m-4 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
                  <p className="text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800">{title || t('video-modal-title')}</p>
                  <p className="text-sm lg:text-base md:mt-2 text-gray-700 max-w-full md:max-w-3/4">
                    {description || t('video-modal-description')}
                  </p>
                </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
