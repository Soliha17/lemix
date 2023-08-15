import { useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import lemixLogo from 'src/assets/images/lemix-logo.png';

import Propover from './Propover';
import DisclosureComp from './Disclosure';
import LanguageSelect from './LanguageSelect';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white-main">
      <nav className="flex items-center justify-between p-3" aria-label="Global">
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="w-36 sm:h-12 sm:w-auto" src={lemixLogo} alt="" />
          </a>
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
          <a
            href="#"
            className="text-sm font-normal leading-normal text-black-75 hover:text-primary-100"
          >
            Bosh sahifasi
          </a>
          <Propover title="Mahsulotlar" />
          <Propover title="Yechimlar" />
          <Propover title="Resurslar" />
        </Popover.Group>

        <div className="hidden gap-4 lg:flex lg:items-center lg:justify-end">
          <div>
            <LanguageSelect />
          </div>
          <button className="rounded-2xl bg-primary-100 px-9 py-4 text-white-main hover:bg-blue-600">
            Demodan foydalanish
          </button>
          <button className="rounded-2xl border border-primary-100 px-9 py-4 text-primary-100 hover:bg-primary-100 hover:text-white-main">
            Kirish
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white-main px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={lemixLogo} alt="lemixLogo" />
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
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-normal hover:bg-gray-50"
                >
                  Bosh sahifasi
                </a>
                <DisclosureComp title="Mahsulotlar" />
                <DisclosureComp title="Yechimlar" />
                <DisclosureComp title="Resurslar " />
              </div>
              <div className="flex flex-col gap-3 py-6">
                <button className="rounded-2xl bg-primary-100 px-9 py-4 text-white-main hover:bg-blue-600">
                  Demodan foydalanish
                </button>
                <button className="rounded-2xl border border-primary-100 px-9 py-4 text-primary-100 hover:bg-primary-100 hover:text-white-main">
                  Kirish
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Header;
