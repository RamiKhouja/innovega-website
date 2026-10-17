import React from 'react'
import { useTranslation } from 'react-i18next';

function Demo() {
    const { t,i18n } = useTranslation();
  return (
    <div className="isolate overflow-hidden bg-primary-dark mb-24 mt-8 lg:mb-32 lg:mt-12" id='demo'>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="px-6 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-balance text-2xl font-semibold tracking-tight italic text-white sm:text-4xl">
                        {t('see-in-action')}
                    </h2>
                    <p className="mt-6 max-w-xl text-pretty text-lg/8 text-gray-300">
                        {t('demo-description')}
                    </p>
                </div>
                <div className="mt-10">
                    <a
                        href="#"
                        className="rounded-md bg-white/15 px-3.5 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/5 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        {t('contact-us')}
                    </a>
                </div>
            </div>
            <img
                src="/images/patterns/pattern-full.png"
                alt=""
                className={`absolute bottom-3/7 ${i18n.language==='ar'? 'left-4 lg:left-3/5' : 'right-4 lg:right-3/5'} lg:bottom-8 -z-10 w-auto h-1/6 lg:h-1/4 xl:h-1/3 object-cover objectcenter brightness-50 saturate-150`}
            />
            <div className={`relative aspect-[16/9] h-44 mb-8 lg:my-auto lg:aspect-auto lg:h-80 ${i18n.language==='ar'?'lg:ml-8':'lg:mr-8'} mx-auto lg:mx-0`}>
                <iframe 
                    className="absolute inset-0 w-full h-full rounded-lg lg:rounded-xl bg-gray-50/50" 
                    src="https://www.youtube.com/embed/uCZLsbdt4PM?si=wZA6bzhKM5w5693x" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe> 
            </div>
        </div>
    </div>
  )
}

export default Demo