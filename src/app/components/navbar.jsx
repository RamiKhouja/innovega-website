'use client'
import React, {useEffect, useRef, useState} from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, ChartBarIcon, ChevronDownIcon, CpuChipIcon, LanguageIcon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import LanguageDropdown from './ui/Dropdown'
import Link from 'next/link'
import QuoteRequestModal from './ui/quote-request'

const serviceLinks = [
  { name: 'remote-control-schedule', href: '/remote-control', icon: 'valve' },
  { name: 'real-time-monitoring', href: '/monitoring', icon: ChartBarIcon },
  { name: 'vegamind-nav', href: '/vegamind', icon: CpuChipIcon },
]

function ValveIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 512 487.2" fill="currentColor" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      <path d="M332.04 217.39c10.77 6.32 20.28 13.5 28.51 21.3a141.02 141.02 0 0 1 19.19 22.38h44.38V235.4c0-5.59 2.28-10.68 5.96-14.35 3.67-3.68 8.76-5.96 14.35-5.96h47.25c5.59 0 10.69 2.28 14.36 5.96 3.67 3.67 5.96 8.76 5.96 14.35v215.04c0 5.59-2.29 10.69-5.96 14.36a20.257 20.257 0 0 1-14.36 5.96h-47.25c-5.59 0-10.68-2.28-14.35-5.96a20.257 20.257 0 0 1-5.96-14.36v-25.66h-45.83c-12.54 18.36-29.41 34.05-50.06 45.12-20.35 10.91-44.29 17.3-71.28 17.3-26.98 0-51.01-6.41-71.48-17.32-20.7-11.06-37.66-26.75-50.27-45.1H87.89v25.66c0 5.59-2.29 10.69-5.96 14.36l-.68.62c-3.62 3.31-8.43 5.34-13.68 5.34H20.32c-5.59 0-10.69-2.28-14.36-5.96A20.299 20.299 0 0 1 0 450.44V235.4c0-5.59 2.29-10.68 5.96-14.35 3.67-3.68 8.77-5.96 14.36-5.96h47.25c5.59 0 10.68 2.28 14.36 5.96 3.67 3.67 5.96 8.76 5.96 14.35v25.67h47.18c5.97-8.33 13.05-16.24 21.26-23.58 9.05-8.1 19.46-15.45 31.26-21.84 5.19-2.8 9.26-5.85 11.93-8.86 1.86-2.11 2.93-3.97 3-5.35l-.04-.17c0-1.69-1.18-3.48-2.98-4.94-2.32-1.88-5.47-3.09-8.75-3.16l-5.77.03c-9.15 0-17.49-3.76-23.54-9.81-6.05-6.01-9.81-14.36-9.81-23.54 0-9.17 3.76-17.53 9.79-23.56l.58-.54c6-5.72 14.12-9.25 22.98-9.25h16.13l30.39-49.34v-3.95h-90.31c-10.07 0-19.24-4.12-25.86-10.74-6.61-6.62-10.74-15.79-10.74-25.86 0-10.08 4.13-19.25 10.74-25.87C121.95 4.13 131.12 0 141.19 0h233.83c10.07 0 19.24 4.13 25.86 10.74 6.62 6.62 10.74 15.79 10.74 25.86 0 10.08-4.12 19.25-10.74 25.87-6.62 6.62-15.79 10.74-25.86 10.74h-85.58v6.99l25.52 46.3h13.97c9.14 0 17.49 3.76 23.53 9.81 6.05 6.01 9.81 14.37 9.81 23.54 0 9.16-3.72 17.39-9.72 23.39l-.58.54c-5.93 5.65-14.01 9.2-22.86 9.39l-3.33.2c-5.32.47-8.74 1.69-10.62 3.32-1.01.88-1.49 2.03-1.53 3.27l.05.79c.73 8.09 5.96 10.53 11.37 13.05l.69.36c2.05.96 4.13 1.96 6.3 3.23zm81.6 61.87v127.33h19.57c5.03 0 9.1 4.07 9.1 9.09v34.76c0 .57.25 1.12.63 1.5.38.38.92.63 1.49.63h47.25c.57 0 1.12-.25 1.5-.63.38-.38.63-.93.63-1.5V235.4c0-.57-.25-1.11-.63-1.49a2.16 2.16 0 0 0-1.5-.63h-47.25c-.57 0-1.11.25-1.49.63-.38.38-.63.92-.63 1.49v34.77c0 5.02-4.07 9.09-9.1 9.09h-19.57zm-15.73 127.33V279.26h-23c-3-.03-5.92-1.52-7.64-4.22-5.23-8.2-11.63-16.01-19.22-23.2-7.29-6.92-15.69-13.26-25.18-18.82-1.43-.84-3.1-1.65-4.79-2.44l-.71-.29c-10.26-4.79-20.16-9.41-21.8-27.98l-.06-1.7c-.14-6.63 2.24-12.8 7.72-17.57 4.69-4.08 11.59-6.96 20.99-7.79l4.53-.2c4.07-.08 7.8-1.71 10.58-4.29l.36-.39c2.71-2.7 4.39-6.41 4.39-10.52 0-4.15-1.72-7.95-4.46-10.7a15.02 15.02 0 0 0-10.69-4.46H184.98c-3.99 0-7.64 1.56-10.32 4.07l-.37.39c-2.75 2.75-4.47 6.55-4.47 10.7 0 4.16 1.72 7.95 4.47 10.7 2.72 2.75 6.51 4.46 10.69 4.46.92 0 5.33-.15 5.88.04 7.48.09 14.72 2.87 20.08 7.22 5.89 4.76 9.74 11.51 9.74 19l-.04.28c-.08 5.91-2.75 11.83-7.54 17.24-4.1 4.61-9.87 9.04-16.91 12.85-10.57 5.72-19.83 12.24-27.78 19.35-8.15 7.28-15.05 15.26-20.71 23.71a9.078 9.078 0 0 1-7.89 4.56h-25.72v127.33h25.96c2.99.03 5.92 1.51 7.64 4.22 11.24 17.64 26.9 32.72 46.31 43.08 17.85 9.53 39 15.12 62.95 15.12 23.94 0 45-5.58 62.76-15.1 19.12-10.24 34.56-25.12 45.71-42.56a9.096 9.096 0 0 1 8.01-4.76h24.48zm-299.55 0V279.26H78.79a9.09 9.09 0 0 1-9.09-9.09V235.4c0-.57-.25-1.11-.63-1.49a2.16 2.16 0 0 0-1.5-.63H20.32c-.57 0-1.12.25-1.5.63-.38.38-.63.92-.63 1.49v215.04c0 .57.25 1.12.63 1.5.38.38.93.63 1.5.63h47.25c.49 0 .95-.17 1.31-.44l.19-.19c.38-.38.63-.93.63-1.5v-34.76a9.09 9.09 0 0 1 9.09-9.09h19.57zm276.66-388.4H141.19c-5.05 0-9.66 2.09-12.99 5.42s-5.42 7.94-5.42 12.99c0 5.06 2.09 9.68 5.42 13.01s7.94 5.41 12.99 5.41h99.4c5.02 0 9.1 4.08 9.1 9.1v15.56a9.395 9.395 0 0 1-1.38 4.76l-25.08 40.71 70.51.47-21.07-38.25a9.02 9.02 0 0 1-1.42-4.87V64.12c0-5.02 4.07-9.1 9.09-9.1h94.68c5.05 0 9.66-2.08 12.99-5.41s5.42-7.95 5.42-13c0-5.06-2.09-9.67-5.42-13s-7.94-5.42-12.99-5.42z" />
    </svg>
  );
}

function ServiceIcon({ icon }) {
  const Icon = icon === 'valve' ? ValveIcon : icon
  return <Icon className="size-5 shrink-0 text-secondary" />
}

function Navbar() {
    const { t, i18n } = useTranslation()
    const navigation = [
        { name: 'home', href: '/' },
        { name: 'product', href: '/#product' },
        { name: 'features', href: '/#features' },
        { name: 'contact', href: '/#contact' },
    ]

    const [languageOpen, setLanguageOpen] = useState(false);

    const languages = [
      { code: "en", label: "English" },
      { code: "fr", label: "Français" },
      { code: "ar", label: "العربية" },
    ];

    const handleChange = (lng) => {
        const html = document.documentElement;
        i18n.changeLanguage(lng);
        if (lng === 'ar') {
          html.classList.add('ar');
        } else {
          html.classList.remove('ar');
        }
        setMobileMenuOpen(false);
        localStorage.setItem('i18nextLng', lng); // optional: persist language manually
    };

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const [quoteModalOpen, setQuoteModalOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const desktopServicesRef = useRef(null)
    const mobileServicesRef = useRef(null)

    useEffect(() => {
      setDarkMode(document.documentElement.classList.contains('dark'))
    }, [])

    useEffect(() => {
      const onScroll = () => {
        setScrolled(window.scrollY > 10);
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleDarkMode = () => {
      const nextDarkMode = !darkMode
      document.documentElement.classList.toggle('dark', nextDarkMode)
      localStorage.setItem('innovega-theme', nextDarkMode ? 'dark' : 'light')
      setDarkMode(nextDarkMode)
    }

    useEffect(() => {
      const closeOnOutsideClick = (event) => {
        const clickedDesktopMenu = desktopServicesRef.current?.contains(event.target)
        const clickedMobileMenu = mobileServicesRef.current?.contains(event.target)
        if (!clickedDesktopMenu && !clickedMobileMenu) setServicesOpen(false)
      }

      document.addEventListener('pointerdown', closeOnOutsideClick)
      return () => document.removeEventListener('pointerdown', closeOnOutsideClick)
    }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? `backdrop-blur ${darkMode ? 'bg-[#010807]/80' : 'bg-white/70'}` : ''
      }`}
    >
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={darkMode ? '/images/logo-white.png' : '/images/logo.png'}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="rounded-full cursor-pointer p-2.5 text-primary-dark transition hover:bg-primary-dark hover:text-white dark:text-white dark:hover:bg-white/10"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <SunIcon aria-hidden="true" className="size-5" /> : <MoonIcon aria-hidden="true" className="size-5" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-x-10">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                {t(item.name)}
              </Link>
            ))}
            <div ref={desktopServicesRef} className="relative">
              <button type="button" onClick={() => setServicesOpen(!servicesOpen)} className="inline-flex items-center gap-1 text-sm/6 font-semibold text-gray-900 dark:text-white" aria-expanded={servicesOpen}>
                {t('services')} <ChevronDownIcon className={`size-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute right-0 top-full z-50 mt-3 w-80 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-gray-900/10 dark:bg-[#071311] dark:ring-white/10">
                  {serviceLinks.map((item) => <Link key={item.href} href={item.href} onClick={() => setServicesOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/10"><ServiceIcon icon={item.icon} />{t(item.name)}</Link>)}
                </div>
              )}
            </div>
            <button type="button" onClick={() => setQuoteModalOpen(true)} className="rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark">{t('request-quote')}</button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <LanguageDropdown />
            <button type="button" onClick={toggleDarkMode} className="ml-4 cursor-pointer rounded-full p-2 text-primary-dark transition hover:bg-primary-dark hover:text-white dark:text-white dark:hover:bg-white/10" aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
              {darkMode ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
            </button>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden" dir={ i18n.language === 'ar' ? 'rtl' : 'ltr' }>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={darkMode ? '/images/logo-white.png' : '/images/logo.png'}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/10"
                    >
                      {t(item.name)}
                    </a>
                  ))}
                  <div ref={mobileServicesRef}>
                    <button type="button" onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen} className="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/10">
                      {t('services')} <ChevronDownIcon className={`size-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && <div className="space-y-1 rounded-xl bg-gray-50 p-2 dark:bg-white/10">
                      {serviceLinks.map((item) => <a key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white dark:text-gray-200 dark:hover:bg-white/10"><ServiceIcon icon={item.icon} />{t(item.name)}</a>)}
                    </div>}
                  </div>
                  <button type="button" onClick={() => { setMobileMenuOpen(false); setQuoteModalOpen(true) }} className="mt-3 w-full rounded-lg bg-primary px-4 py-3 text-center text-base font-semibold text-white hover:bg-primary-dark">{t('request-quote')}</button>
                </div>
                
                <div className="py-6">
                  <button
                    onClick={() => setLanguageOpen(!languageOpen)}
                    className="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/10"
                  >
                    <div className='flex items-center gap-x-2'>
                      <LanguageIcon  className="w-5 h-5 text-primary" />
                      <p>{t(i18n.language)}</p>
                    </div>
                    <svg
                      className={`h-5 w-5 transition-transform ${
                        languageOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {languageOpen && (
                    <div className="mt-2 space-y-1 pl-6">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            handleChange(lang.code);
                            
                          }}
                          className={`block w-full rounded-lg px-3 py-2 ${i18n.language==='ar'?'text-right':'text-left'} text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  )}
                  <button type="button" onClick={toggleDarkMode} className="-mx-3 mt-3 flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/10">
                    {darkMode ? <SunIcon className="size-5 text-primary" /> : <MoonIcon className="size-5 text-primary" />}
                    {darkMode ? 'Light mode' : 'Dark mode'}
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        <QuoteRequestModal open={quoteModalOpen} setOpen={setQuoteModalOpen} />
    </header>
  )
}

export default Navbar
