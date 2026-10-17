'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

export default function VideoModal({open, setOpen, videoSrc}) {

  return (
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-2 text-center">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-4xl bg-gray-50 text-left shadow-2xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:w-fit p-1 sm:p-2 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
                <iframe 
                    className='w-full h-auto md:h-[315px] md:w-[556px] lg:h-[420px] lg:w-[746px] rounded-3xl'
                    src={videoSrc} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
                <div className="m-4">
                  <p className="text-lg lg:text-3xl font-semibold text-gray-800">Watch our demo video</p>
                  <p className="text-sm lg:text-base md:mt-2 text-gray-700 max-w-full md:max-w-3/4">
                    Discover how Innovega can transform your irrigation management with our innovative solutions.
                  </p>
                </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
