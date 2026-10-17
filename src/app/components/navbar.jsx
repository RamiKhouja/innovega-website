'use client'
import React, {useEffect, useState} from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, LanguageIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import LanguageDropdown from './ui/Dropdown'

function Navbar() {
    const { t, i18n } = useTranslation()
    const navigation = [
        { name: 'services', href: '#services' },
        { name: 'about', href: '#about' },
        { name: 'features', href: '#features' },
        { name: 'product', href: '#demo' },
        { name: 'contact', href: '#contact' },
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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        setScrolled(window.scrollY > 10);
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'backdrop-blur bg-white/70 dark:bg-gray-50/60' : ''
      }`}
    >
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/images/logo.png"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {t(item.name)}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <LanguageDropdown />
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden" dir={ i18n.language === 'ar' ? 'rtl' : 'ltr' }>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="/images/logo.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {t(item.name)}
                    </a>
                  ))}
                </div>
                
                <div className="py-6">
                  <button
                    onClick={() => setLanguageOpen(!languageOpen)}
                    className="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
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
                          className={`block w-full rounded-lg px-3 py-2 ${i18n.language==='ar'?'text-right':'text-left'} text-sm font-medium text-gray-700 hover:bg-gray-100`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
    </header>
  )
}

export default Navbar