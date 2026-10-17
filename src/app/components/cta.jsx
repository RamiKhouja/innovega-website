import { useState } from "react"
import VideoModal from "./ui/videoModal"

export default function CallToAction() {
    const [openModal, setOpenModal] = useState(false)
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
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Boost your productivity. Start using our app today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-300">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
            commodo do ea.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white/15 px-3.5 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/5 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
            <button 
                onClick={() => setOpenModal(true)}
                className="text-sm/6 font-semibold text-white hover:text-gray-300 cursor-pointer"
            >
              See Demo <span aria-hidden="true">→</span>
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
    </div>
  )
}
