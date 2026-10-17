import { Battery100Icon, ChartPieIcon, Cog8ToothIcon, CpuChipIcon, GlobeAltIcon, LockClosedIcon, NoSymbolIcon, WifiIcon } from '@heroicons/react/24/outline';
import React from 'react'
import { useTranslation } from 'react-i18next';

const features = [
  {
    id: 1,
    name: 'feature-control-anywhere',
    description: 'feature-control-anywhere-desc',
    icon: <GlobeAltIcon className="h-16 w-16 text-secondary"/>,
    url: '#',
  },
  {
    id: 2,
    name: 'feature-water-reports',
    description: 'feature-water-reports-desc',
    icon: <ChartPieIcon className="h-16 w-16 text-secondary"/>,
    url: '#',
  },
  {
    id: 3,
    name: 'feature-solar-energy',
    description: 'feature-solar-energy-desc',
    icon: <Battery100Icon className="h-16 w-16 text-secondary -rotate-45"/>,
    url: '#',
  },
  {
    id: 4,
    name: 'feature-pump-valve',
    description: 'feature-pump-valve-desc',
    icon: <Cog8ToothIcon className="h-16 w-16 text-secondary"/>,
    url: '#',
  },
  {
    id: 5,
    name: 'feature-lora-wireless',
    description: 'feature-lora-wireless-desc',
    icon: <WifiIcon className="h-16 w-16 text-secondary"/>,
    url: '#',
  },
  {
    id: 6,
    name: 'feature-secure-comm',
    description: 'feature-secure-comm-desc',
    icon: <LockClosedIcon className="h-16 w-16 text-secondary"/>,
    url: '#',
  },
  {
    id: 7,
    name: 'feature-no-wires',
    description: 'feature-no-wires-desc',
    icon: <NoSymbolIcon className="h-16 w-16 text-secondary"/>,
    url: '#',
  },
  {
    id: 8,
    name: 'feature-ai-ready',
    description: 'feature-ai-ready-desc',
    icon: <CpuChipIcon className="h-16 w-16 text-secondary"/>,
    url: '#',
  }
]

function Features() {
  const {t, i18n} = useTranslation();
    return (
        <div className="bg-white py-24" id='features'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto text-center">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl">{t('why-choose-innovega')}</h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        {t('why-choose-innovega-desc')}
                    </p>
                </div>
                <div
                    role="list"
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
                >
                    {features.map((feature) => (
                        <div key={feature.id} className='text-center'>
                          <div className='w-full flex justify-center'>
                            <div className="bg-white rounded-full p-4 -mb-10 z-20">{feature.icon}</div>
                          </div>
                          <a href={feature.url} className="flex flex-col items-center border border-primary/50 rounded-2xl p-4 pt-10 hover:shadow-xl">
                            <p className="text-primary text-xl font-semibold">{t(feature.name)}</p>
                            <p className="text-gray-600 text-base font-normal mt-4">{t(feature.description)}</p>
                          </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features