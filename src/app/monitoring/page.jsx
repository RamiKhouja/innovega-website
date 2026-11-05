'use client'

import { useTranslation } from 'react-i18next'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import MonitoringHero from '../components/monitoring/hero'
import CompleteVisibility from '../components/monitoring/complete-visibility'
import SensorMonitoring from '../components/monitoring/sensor-monitoring'
import WaterReports from '../components/monitoring/water-reports'
import Notifications from '../components/monitoring/notifications'
import CallToAction from '../components/cta'
import Weather from '../components/monitoring/weather'
import MonitoringVegamindCta from '../components/monitoring/vegamind-cta'

export default function MonitoringPage() {
  const { i18n } = useTranslation()

  return (
    <div className="min-h-screen bg-white" dir={i18n.dir()}>
      <Navbar />
      <main>
        <MonitoringHero />
        <CompleteVisibility />
        <SensorMonitoring />
        <WaterReports />
        <Notifications />
        <CallToAction />
        <Weather />
        <MonitoringVegamindCta />
      </main>
      <Footer />
    </div>
  )
}
