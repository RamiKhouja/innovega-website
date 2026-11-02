'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CalendarDaysIcon, ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import Spinner from './Spinner'

const emptyForm = { name: '', email: '', phone: '', company: '', state: '', city: '', meetingDate: '', message: '' }

function getMinimumMeetingDate() {
  const date = new Date()
  date.setDate(date.getDate() + 1)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

function parseDateKey(dateKey) {
  const [year, month, day] = dateKey.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function getDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

function isBefore(date, minimumDate) {
  return date.getTime() < minimumDate.getTime()
}

export default function DemoRequestModal({ open, setOpen }) {
  const { t, i18n } = useTranslation()
  const [formData, setFormData] = useState(emptyForm)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const minimumMeetingDate = getMinimumMeetingDate()
  const minimumDate = parseDateKey(minimumMeetingDate)
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [calendarMonth, setCalendarMonth] = useState(() => new Date(minimumDate.getFullYear(), minimumDate.getMonth(), 1))

  const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, demoRequest: true }),
      })
      if (!response.ok) throw new Error('Unable to send demo request')
      setFormData(emptyForm)
      setStatus('success')
    } catch (error) {
      console.error(error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const closeModal = () => {
    if (!loading) {
      setCalendarOpen(false)
      setStatus('')
      setOpen(false)
    }
  }

  const openCalendar = () => {
    const selectedDate = formData.meetingDate ? parseDateKey(formData.meetingDate) : minimumDate
    setCalendarMonth(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1))
    setCalendarOpen(true)
  }

  const selectMeetingDate = (date) => {
    if (!isBefore(date, minimumDate)) {
      setFormData({ ...formData, meetingDate: getDateKey(date) })
      setCalendarOpen(false)
    }
  }

  const changeCalendarMonth = (offset) => {
    const nextMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + offset, 1)
    const minimumMonth = new Date(minimumDate.getFullYear(), minimumDate.getMonth(), 1)
    if (offset < 0 && nextMonth < minimumMonth) return
    setCalendarMonth(nextMonth)
  }

  const calendarMonthLabel = new Intl.DateTimeFormat(i18n.language, { month: 'long', year: 'numeric' }).format(calendarMonth)
  const weekdayLabels = Array.from({ length: 7 }, (_, index) => new Intl.DateTimeFormat(i18n.language, { weekday: 'short' }).format(new Date(2024, 0, 7 + index)))
  const firstDay = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), 1).getDay()
  const daysInMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 0).getDate()
  const calendarDays = Array.from({ length: firstDay + daysInMonth }, (_, index) => index < firstDay ? null : new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), index - firstDay + 1))
  const selectedMeetingDate = formData.meetingDate ? parseDateKey(formData.meetingDate) : null
  const formattedMeetingDate = selectedMeetingDate
    ? new Intl.DateTimeFormat(i18n.language, { day: 'numeric', month: 'short', year: 'numeric' }).format(selectedMeetingDate)
    : t('choose-date')

  const inputClass = 'mt-2 block w-full rounded-lg bg-white px-3.5 py-2.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-sm placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-primary'

  return (
    <Dialog open={open} onClose={closeModal} className="relative z-50">
      <DialogBackdrop transition className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in" />
      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel transition dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} className={`relative w-full max-w-2xl transform overflow-visible rounded-3xl bg-gray-50 p-6 ${i18n.language === 'ar' ? 'text-right' : 'text-left'} shadow-2xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:p-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95`}>
            <button type="button" onClick={closeModal} disabled={loading} aria-label={t('close')} className={`absolute top-5 rounded-full p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-800 disabled:cursor-not-allowed ${i18n.language === 'ar' ? 'left-5' : 'right-5'}`}>
              <XMarkIcon className="size-6" aria-hidden="true" />
            </button>

            <div className={`mb-6 ${i18n.language === 'ar' ? 'pl-8' : 'pr-8'}`}>
              <DialogTitle className="text-2xl font-semibold text-primary-dark sm:text-3xl">{t('demo-request-title')}</DialogTitle>
              <p className="mt-2 text-sm text-gray-600">{t('demo-request-description')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="demo-name" className="block text-sm font-semibold text-gray-900">{t('name')}</label>
                  <input id="demo-name" name="name" type="text" required value={formData.name} onChange={handleChange} autoComplete="name" placeholder={t('name-placeholder')} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="demo-email" className="block text-sm font-semibold text-gray-900">{t('email')}</label>
                  <input id="demo-email" name="email" type="email" required value={formData.email} onChange={handleChange} autoComplete="email" placeholder={t('example-email')} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="demo-phone" className="block text-sm font-semibold text-gray-900">{t('phone-number')}</label>
                  <input id="demo-phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} autoComplete="tel" placeholder={t('example-phone')} dir="ltr" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="demo-company" className="block text-sm font-semibold text-gray-900">{t('company')} <span className="font-normal text-gray-500">({t('optional')})</span></label>
                  <input id="demo-company" name="company" type="text" value={formData.company} onChange={handleChange} autoComplete="organization" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="demo-state" className="block text-sm font-semibold text-gray-900">{t('state')} <span className="font-normal text-gray-500">({t('optional')})</span></label>
                  <input id="demo-state" name="state" type="text" value={formData.state} onChange={handleChange} autoComplete="address-level1" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="demo-city" className="block text-sm font-semibold text-gray-900">{t('city')} <span className="font-normal text-gray-500">({t('optional')})</span></label>
                  <input id="demo-city" name="city" type="text" value={formData.city} onChange={handleChange} autoComplete="address-level2" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="demo-meeting-date" className="block text-sm font-semibold text-gray-900">{t('meeting-date')} <span className="font-normal text-gray-500">({t('optional')})</span></label>
                  <div className="relative">
                    <input type="hidden" name="meetingDate" value={formData.meetingDate} />
                    <button
                      id="demo-meeting-date"
                      type="button"
                      onClick={openCalendar}
                      aria-haspopup="dialog"
                      aria-expanded={calendarOpen}
                      className={`${inputClass} flex cursor-pointer items-center justify-between gap-3 ${i18n.language === 'ar' ? 'text-right' : 'text-left'} ${formData.meetingDate ? 'text-gray-900' : 'text-gray-400'}`}
                    >
                      <span>{formattedMeetingDate}</span>
                      <CalendarDaysIcon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                    </button>

                    {calendarOpen && (
                      <div role="dialog" aria-label={t('meeting-date')} className="absolute left-0 right-0 top-full z-20 mt-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
                        <div className="mb-4 flex items-center justify-between">
                          <button type="button" onClick={() => changeCalendarMonth(-1)} disabled={calendarMonth.getFullYear() === minimumDate.getFullYear() && calendarMonth.getMonth() === minimumDate.getMonth()} aria-label={t('previous-month')} className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30">
                            <ChevronLeftIcon className="size-5" aria-hidden="true" />
                          </button>
                          <p className="text-sm font-semibold capitalize text-primary-dark">{calendarMonthLabel}</p>
                          <button type="button" onClick={() => changeCalendarMonth(1)} aria-label={t('next-month')} className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-primary">
                            <ChevronRightIcon className="size-5" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-400">
                          {weekdayLabels.map((day, index) => <span key={`${day}-${index}`} className="py-1">{day}</span>)}
                        </div>
                        <div className="mt-1 grid grid-cols-7 gap-1 text-center">
                          {calendarDays.map((date, index) => date ? (
                            <button
                              key={getDateKey(date)}
                              type="button"
                              onClick={() => selectMeetingDate(date)}
                              disabled={isBefore(date, minimumDate)}
                              aria-label={new Intl.DateTimeFormat(i18n.language, { dateStyle: 'full' }).format(date)}
                              className={`aspect-square rounded-full text-sm transition ${selectedMeetingDate && getDateKey(selectedMeetingDate) === getDateKey(date) ? 'bg-primary font-semibold text-white' : isBefore(date, minimumDate) ? 'cursor-not-allowed text-gray-300' : 'text-gray-700 hover:bg-secondary/15 hover:text-primary'}`}
                            >
                              {date.getDate()}
                            </button>
                          ) : <span key={`empty-${index}`} />)}
                        </div>
                        {/* <p className="mt-3 text-xs text-gray-500">{t('calendar-minimum-date')}</p> */}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="demo-message" className="block text-sm font-semibold text-gray-900">{t('message')}</label>
                <textarea id="demo-message" name="message" required rows={4} value={formData.message} onChange={handleChange} placeholder={t('example-message')} className={inputClass} />
              </div>

              {status && <p className={`text-sm font-medium ${status === 'success' ? 'text-green-700' : 'text-red-700'}`}>{status === 'success' ? t('demo-request-sent') : t('error-sending-message')}</p>}

              <div className="flex flex-col-reverse justify-end gap-3 sm:flex-row">
                <button type="button" onClick={closeModal} disabled={loading} className="rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-200 disabled:cursor-not-allowed">{t('cancel')}</button>
                <button type="submit" disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark disabled:cursor-not-allowed disabled:bg-primary/50">
                  {loading && <Spinner color="white" />}
                  {t('request-demo')}
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
