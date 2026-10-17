import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { LanguageIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next';

export default function LanguageDropdown() {
    const { t, i18n } = useTranslation();

    const handleChange = (lng) => {
        const html = document.documentElement;
        i18n.changeLanguage(lng);
        if (lng === 'ar') {
          html.classList.add('ar');
        } else {
          html.classList.remove('ar');
        }
        localStorage.setItem('i18nextLng', lng); // optional: persist language manually
    };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="relative flex items-center gap-x-2 rounded-full text-sm px-3 py-1.5 cursor-pointer border border-primary bg-transparet text-primary hover:bg-primary hover:text-white" title='Select Language'>
            <LanguageIcon  className="w-5 h-5" />
            <p className="text-sm font-semibold">{t(i18n.language)}</p>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className={`absolute ${i18n.language=='ar' ? 'left-0' : 'right-0' } z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in`}
      >
        <div className="py-1">
          <MenuItem>
            <a
              type="button" onClick={() => handleChange('ar')}
              className="block cursor-pointer font-medium px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              العربية
            </a>
          </MenuItem>
          <MenuItem>
            <a
              type="button" onClick={() => handleChange('en')}
              className="block cursor-pointer font-medium px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              English
            </a>
          </MenuItem>
          <MenuItem>
            <a
              type="button" onClick={() => handleChange('fr')}
              className="block cursor-pointer font-medium px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Français
            </a>
          </MenuItem>
          
        </div>
      </MenuItems>
    </Menu>
  )
}
