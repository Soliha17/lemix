import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import lemixLogo from 'src/assets/images/lemix-logo.png';

import Propover from './Propover';
import DisclosureComp from './Disclosure';
import LanguageSelect from './LanguageSelect';
import ContactModal from '../../atoms/ContactModal';

function Header() {
  const { t } = useTranslation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const openContactModal = () => {
    setOpen(!open);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white-main">
      <nav className="flex items-center justify-between p-3" aria-label="Global">
        <div className="flex">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Lemix</span>
            <img
              className="w-36 sm:h-12 sm:w-auto"
              src={lemixLogo}
              width={156}
              height={48}
              alt="lemix logo"
            />
          </NavLink>
        </div>
        <div className="flex gap-3 lg:hidden">
          <LanguageSelect />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden items-center lg:flex lg:gap-x-6">
          <NavLink
            to={'/'}
            exact="true"
            className={`text-sm font-normal leading-normal ${
              location.pathname === '/' ? 'text-primary-100' : 'text-black-75'
            } hover:text-primary-100`}
          >
            {t('home')}
          </NavLink>
          <Propover title="products" />
          <Propover title="solutions" />
          <Propover title="resources" />
        </Popover.Group>

        <div className="hidden gap-4 lg:flex lg:items-center lg:justify-end">
          <div>
            <LanguageSelect />
          </div>
          <button
            onClick={openContactModal}
            className="rounded-2xl bg-primary-100 px-9 py-4 text-white-main hover:bg-blue-600"
          >
            {t('demoUsage')}
          </button>
          <button className="rounded-2xl border border-primary-100 px-9 py-4 text-primary-100 hover:bg-primary-100 hover:text-white-main">
            {t('enter')}
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={closeMobileMenu}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white-main px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" width={156} height={48} src={lemixLogo} alt="lemixLogo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 text-black-75">
                <NavLink
                  to={'/'}
                  exact="true"
                  onClick={closeMobileMenu}
                  className={`-mx-3 block ${
                    location.pathname === '/' ? 'text-primary-100' : 'text-black-75'
                  } rounded-lg px-3 py-2 text-base font-semibold leading-normal hover:bg-gray-50`}
                >
                  {t('home')}
                </NavLink>
                <DisclosureComp title="products" />
                <DisclosureComp title="solutions" />
                <DisclosureComp title="resources" />
              </div>
              <div className="flex flex-col gap-3 py-6">
                <button
                  onClick={openContactModal}
                  className="rounded-2xl bg-primary-100 px-9 py-4 text-white-main hover:bg-blue-600"
                >
                  {t('demoUsage')}
                </button>
                <button className="rounded-2xl border border-primary-100 px-9 py-4 text-primary-100 hover:bg-primary-100 hover:text-white-main">
                  {t('enter')}
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <ContactModal open={open} setOpen={setOpen} />
    </header>
  );
}

export default Header;
