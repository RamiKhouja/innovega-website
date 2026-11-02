import { useState } from "react"
import VideoModal from "./ui/videoModal"
import DemoRequestModal from "./ui/demo-request"
import { useTranslation } from "react-i18next";

export default function CallToAction() {
    const [openModal, setOpenModal] = useState(false)
    const [openDemoReqModal, setOpenDemoReqModal] = useState(false)
    const { t, i18n } = useTranslation();
    const [videoSrc, setVideoSrc] = useState('https://www.youtube.com/embed/uCZLsbdt4PM?si=wZA6bzhKM5w5693x')
  return (
    <div className="relative isolate overflow-hidden bg-primary-dark">
        <img
            src="/images/patterns/pattern.png"
            alt=""
            className="absolute bottom-0 -left-2 -z-10 w-auto h-1/4 lg:h-1/3 xl:h-1/2 object-cover objectcenter brightness-50 saturate-150 hidden sm:block"
        />
        <img
            src="/images/patterns/pattern-reverse.png"
            alt=""
            className="absolute top-0 -right-2 -z-10 w-auto h-1/4 lg:h-1/3 xl:h-1/2 object-cover objectcenter brightness-50 saturate-150 hidden sm:block"
        />
      <div className="px-6 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-normal leading-snug text-white sm:text-5xl">
            {t('cta-section-title')}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-gray-100">
            {t('cta-section-description')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => setOpenDemoReqModal(true)}
              className="rounded-full cursor-pointer bg-white px-3.5 py-2 text-sm font-semibold text-primary-dark shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t('get-started')}
            </button>
            <button 
                onClick={() => setOpenModal(true)}
                className="text-sm/6 font-semibold text-white hover:text-gray-300 cursor-pointer"
            >
              {t('live-demo')} <span aria-hidden="true">{i18n.language==='ar' ? '←' : '→'}</span>
            </button>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
      >
        <circle r={512} cx={512} cy={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#31BC85" />
            <stop offset={1} stopColor="#105157" />
          </radialGradient>
        </defs>
      </svg>
      <VideoModal open={openModal} setOpen={setOpenModal} videoSrc={videoSrc} />
      <DemoRequestModal open={openDemoReqModal} setOpen={setOpenDemoReqModal} />
    </div>
  )
}
