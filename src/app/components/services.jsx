import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const services = [
  {
    id: 1,
    name: 'remote-control-schedule',
    description: 'remote-control-schedule-description',
    params: ['remote-control-schedule-point-1', 'remote-control-schedule-point-2', 'remote-control-schedule-point-3'],
    imageUrl: '/images/services/control.jpg',
    url: '#',
  },
  {
    id: 2,
    name: 'real-time-monitoring',
    description: 'real-time-monitoring-description',
    params: ['real-time-monitoring-point-1', 'real-time-monitoring-point-2', 'real-time-monitoring-point-3'],
    imageUrl: '/images/services/monitoring.jpg',
    url: '#',
  },
  {
    id: 3,
    name: 'ai-enhanced-irrigation',
    description: 'ai-enhanced-irrigation-description',
    params: ['ai-enhanced-irrigation-point-1', 'ai-enhanced-irrigation-point-2', 'ai-enhanced-irrigation-point-3'],
    imageUrl: '/images/services/vegamind.jpg',
    url: '/vegamind',
  }
];


export default function Services() {
  const { t } = useTranslation();
  return (
    <div className="bg-white pb-24 lg:pb-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold leading-snug text-primary-dark sm:text-5xl">{t('our-services')}</h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            {t('services-intro')}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {services.map((service) => (
            <Link key={service.id} href={service.url} className="shadow-md hover:bg-gray-50 rounded-2xl hover:shadow-sm cursor-pointer">
              <img alt="" src={service.imageUrl} className="w-full max-h-60 rounded-t-2xl object-cover" />
              <div className="p-4 pb-6 mt-2">
                <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">{t(service.name)}</h3>
                <p className="mt-2 text-gray-700">{t(service.description)}</p>
                <ul className="mt-3 text-gray-700 space-y-2 flex-1">
                  {service.params.map((param) => (
                    <li key={param} className="flex gap-x-2 ml-2 items-start">
                      <CheckBadgeIcon className="w-5 h-4 text-secondary" />
                      <p className="-mt-0.5 text-sm">{t(param)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}
