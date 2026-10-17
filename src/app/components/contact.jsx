'use client';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Spinner from './ui/Spinner';

export default function Contact() {
    const { t, i18n } = useTranslation();
    const [formData, setFormData] = useState(
      { firstname: "", lastname: "", phone: "", email: "", message: "" }
    );
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (status !== "") {
        const timer = setTimeout(() => setStatus(""), 3000);
        return () => clearTimeout(timer);
      }
    }, [status]);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const data = {
        name: `${formData.firstname} ${formData.lastname}`,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      }

      try {
        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (res.ok) {
          setLoading(false);
          setStatus("success");
          setFormData({ firstname: "", lastname: "", phone: "", email: "", message: "" });
        } else {
          setLoading(false);
          setStatus("error");
        }
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    };

  return (
    <div className="relative isolate bg-white" id="contact">
      {status !== "" && (
        <div className={`absolute bottom-3/5 lg:bottom-1/4 ${i18n.language==='ar' ? 'right-4 lg:right-8' : 'left-4 lg:left-8'} z-10 w-auto max-w-sm`}>
          <div className={`rounded-md ${status==="success" ? "bg-green-50" : "bg-red-50"} p-4`}>
            <div className="flex gap-x-2">
              <div className="shrink-0">
                {status === "success" ? (
                  <CheckCircleIcon aria-hidden="true" className="size-5 text-green-400" />
                ):(
                  <XCircleIcon aria-hidden="true" className="size-5 text-red-400" />
                )}
              </div>
              <div >
                {status === "success" ? (
                  <p className="text-sm font-medium text-green-800">{t('message-sent-successfully')}</p>
                ):(
                  <p className="text-sm font-medium text-red-800">{t('error-sending-message')}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className={`absolute inset-y-0 ${i18n.language==='ar' ? 'right-0' : 'left-0'} -z-10 w-full overflow-hidden bg-secondary/5 lg:w-1/2 
                [mask-image:radial-gradient(ellipse_at_center,black,transparent)] 
                [mask-repeat:no-repeat] 
                [mask-size:100%_100%]`}
            >
                <svg
                    aria-hidden="true"
                    className={`absolute inset-0 size-full stroke-secondary/50 ${i18n.language==='ar' ? '[mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]' : '[mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'}`}
                >
                    <defs>
                    <pattern
                        x="100%"
                        y={-1}
                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                        width={200}
                        height={200}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth={0} className="fill-white" />
                    <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                    </svg>
                    <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
                </svg>
                <div
                    aria-hidden="true"
                    className="absolute -left-56 top-[calc(100%-13rem)] hidden transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                >
                    <div
                    style={{
                        clipPath:
                        'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                    }}
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-secondary to-secondary-dark opacity-10"
                    />
                </div>
            </div>

            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-primary-dark sm:text-5xl">
                {t('contact-us')}
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
                {t('contact-intro')}
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">{t('address')}</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-secondary" />
                </dt>
                <dd>
                  {t('innovega-address')}
                  <br />
                  {t('innovega-city')}, {t('innovega-zip')}
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-secondary" />
                </dt>
                <dd>
                  <a href="tel:+21623354108" className="hover:text-gray-900" dir='ltr'>
                    +216 23 354 108
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-secondary" />
                </dt>
                <dd>
                  <a href="mailto:contact@innovega.tn" className="hover:text-gray-900">
                    contact@innovega.tn
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                  {t('first-name')}
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="firstname"
                    type="text" placeholder={t('foulen')}
                    onChange={handleChange}
                    value={formData.firstname}
                    autoComplete="given-name"
                    className="block w-full rounded-lg bg-white placeholder:text-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                  {t('last-name')}
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="lastname"
                    onChange={handleChange}
                    value={formData.lastname}
                    type="text" placeholder={t('ben-foulen')}
                    autoComplete="family-name"
                    className="block w-full rounded-lg bg-white placeholder:text-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-primary"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                  {t('email')}
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    type="email" placeholder={t('example-email')}
                    autoComplete="email"
                    className="block w-full rounded-lg bg-white placeholder:text-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-primary"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                    {t('phone-number')}
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                    type="tel" placeholder={t('example-phone')}
                    autoComplete="tel"
                    className={`block w-full rounded-lg bg-white ${i18n.language==='ar' ? 'text-right' : 'text-left'} placeholder:text-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-primary`}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                    {t('message')}
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    rows={4} placeholder={t('example-message')}
                    className="block w-full rounded-lg bg-white placeholder:text-sm px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-primary"
                    value={formData.message}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg cursor-pointer bg-primary px-3.5 py-2.5 text-center text-sm font-semibold flex gap-x-2 items-center text-white shadow-sm hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark disabled:bg-primary/50"
              >
                <p>{loading && (<Spinner color="white" />)}</p> 
                <p>{t('send-message')}</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
