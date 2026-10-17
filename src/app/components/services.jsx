import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

const services = [
  {
    id: 1,
    name: 'remote-irrigation-control',
    description: 'remote-irrigation-control-desc',
    params: ['open-close-valves', 'pump-control', 'schedule-irrigation'],
    imageUrl: '/images/service-1.jpg',
    url: '#',
  },
  {
    id: 2,
    name: 'monitoring-analytics',
    description: 'monitoring-analytics-desc',
    params: ['water-consumption', 'sensor-readings', 'connectivity-status'],
    imageUrl: '/images/service-2.jpg',
    url: '#',
  },
  {
    id: 3,
    name: 'smart-alerts',
    description: 'smart-alerts-desc',
    params: ['leak-detection', 'system-notifications', 'deficiency-alerts'],
    imageUrl: '/images/service-3.jpg',
    url: '#',
  },
  {
    id: 4,
    name: 'automation-ai',
    description: 'automation-ai-desc',
    params: ['auto-irrigation', 'fertilizer-integration', 'future-updates'],
    imageUrl: '/images/service-2.jpg',
    url: '#',
  },
  {
    id: 5,
    name: 'solar-wireless-hardware',
    description: 'solar-wireless-hardware-desc',
    params: ['solar-powered', 'no-wires', 'flexible-installation'],
    imageUrl: '/images/service-3.jpg',
    url: '#',
  },
];


export default function Services() {
  const { t } = useTranslation();
  return (
    <div className="bg-white py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{t('our-services')}</h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            {t('services-intro')}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {services.map((service) => (
            <li key={service.id} className="shadow-md hover:bg-gray-50 rounded-2xl hover:shadow-sm cursor-pointer">
              <img alt="" src={service.imageUrl} className="aspect-[3/2] w-full max-h-44 rounded-t-2xl object-cover" />
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
              {/* <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a href={service.xUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">X</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                    <a href={service.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">LinkedIn</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                        <path
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
              </ul> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
