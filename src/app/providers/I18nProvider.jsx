'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

export default function I18nProvider({ children }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const syncLanguage = (language) => {
      const html = document.documentElement;
      const isArabic = language === 'ar';

      html.lang = language;
      html.dir = isArabic ? 'rtl' : 'ltr';
      html.classList.toggle('ar', isArabic);
      localStorage.setItem('i18nextLng', language);
    };

    syncLanguage(i18n.language);
    i18n.on('languageChanged', syncLanguage);
    setIsReady(true);

    return () => i18n.off('languageChanged', syncLanguage);
  }, []);

  return <I18nextProvider i18n={i18n}>{isReady ? children : null}</I18nextProvider>;
}
