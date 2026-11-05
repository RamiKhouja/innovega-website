'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import Spinner from './Spinner'

const emptyForm = { name: '', email: '', phone: '', company: '', state: '', city: '', surfaceArea: '', singleValves: '', doubleValves: '', pumps: '', pumpType: '', pumpPowerSupply: '', has220v: '', message: '' }

export default function QuoteRequestModal({ open, setOpen }) {
  const { t, i18n } = useTranslation()
  const [formData, setFormData] = useState(emptyForm)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const inputClass = 'mt-2 block w-full rounded-lg bg-white px-3.5 py-2.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-sm placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-primary'
  const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value })
  const closeModal = () => { if (!loading) { setStatus(''); setOpen(false) } }
  const handleSubmit = async (event) => {
    event.preventDefault(); setLoading(true); setStatus('')
    try {
      const response = await fetch('/api/send-email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, quoteRequest: true }) })
      if (!response.ok) throw new Error('Unable to send quote request')
      setFormData(emptyForm); setStatus('success')
    } catch (error) { console.error(error); setStatus('error') } finally { setLoading(false) }
  }
  const field = (label, key = label, type = 'text', required = false, helpKey = '') => <div><div className="flex items-center gap-1"><label htmlFor={`quote-${key}`} className="text-sm font-semibold text-gray-900">{t(label)} {!required && <span className="font-normal text-gray-500">({t('optional')})</span>}</label>{helpKey && <span className="group relative inline-flex"><InformationCircleIcon className="size-4 cursor-help text-gray-400" aria-describedby={`quote-help-${key}`} tabIndex={0} /><span id={`quote-help-${key}`} role="tooltip" className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden w-56 -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-xs font-normal leading-5 text-white shadow-lg group-hover:block group-focus-within:block">{t(helpKey)}</span></span>}</div><input id={`quote-${key}`} name={key} type={type} required={required} value={formData[key]} onChange={handleChange} className={inputClass} /></div>
  const select = (label, key, options) => <div><label htmlFor={`quote-${key}`} className="block text-sm font-semibold text-gray-900">{t(label)} <span className="font-normal text-gray-500">({t('optional')})</span></label><select id={`quote-${key}`} name={key} value={formData[key]} onChange={handleChange} className={inputClass}><option value="">{t('select-option')}</option>{options.map((option) => <option key={option} value={option}>{t(option)}</option>)}</select></div>
  return <Dialog open={open} onClose={closeModal} className="relative z-50"><DialogBackdrop className="fixed inset-0 bg-gray-500/75" /><div className="fixed inset-0 z-50 w-screen overflow-y-auto"><div className="flex min-h-full items-center justify-center p-4"><DialogPanel dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} className="relative w-full max-w-3xl rounded-3xl bg-gray-50 p-6 text-left shadow-2xl sm:p-8">
    <button type="button" onClick={closeModal} disabled={loading} aria-label={t('close')} className={`absolute top-5 rounded-full p-1 text-gray-500 hover:bg-gray-200 ${i18n.language === 'ar' ? 'left-5' : 'right-5'}`}><XMarkIcon className="size-6" /></button>
    <div className={`mb-6 ${i18n.language === 'ar' ? 'pl-8 text-right' : 'pr-8 text-left'}`}><DialogTitle className="text-2xl font-semibold text-primary-dark sm:text-3xl">{t('quote-request-title')}</DialogTitle><p className="mt-2 text-sm text-gray-600">{t('quote-request-description')}</p></div>
    <form onSubmit={handleSubmit} className="space-y-5"><div className="grid grid-cols-1 gap-5 sm:grid-cols-2">{field('name', 'name', 'text', true)}{field('email', 'email', 'email', true)}{field('phone-number', 'phone', 'tel', true)}{field('company')}{field('state')}{field('city')}{field('surface-area', 'surfaceArea', 'number')}{field('single-valves', 'singleValves', 'number', false, 'single-valves-info')}{field('double-valves', 'doubleValves', 'number', false, 'double-valves-info')}{field('pumps', 'pumps', 'number')}{select('pump-type', 'pumpType', ['monophase', 'three-phase'])}{select('pump-power-supply', 'pumpPowerSupply', ['circuit', 'solar-panel'])}{select('has-220v', 'has220v', ['yes', 'no'])}</div><div><label htmlFor="quote-message" className="block text-sm font-semibold text-gray-900">{t('message')} <span className="font-normal text-gray-500">({t('optional')})</span></label><textarea id="quote-message" name="message" rows={3} value={formData.message} onChange={handleChange} className={inputClass} /></div>{status && <p className={`text-sm font-medium ${status === 'success' ? 'text-green-700' : 'text-red-700'}`}>{status === 'success' ? t('quote-request-sent') : t('error-sending-message')}</p>}<div className="flex flex-col-reverse justify-end gap-3 sm:flex-row"><button type="button" onClick={closeModal} disabled={loading} className="rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-200">{t('cancel')}</button><button type="submit" disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark disabled:bg-primary/50">{loading && <Spinner color="white" />}{t('request-quote')}</button></div></form>
  </DialogPanel></div></div></Dialog>
}
