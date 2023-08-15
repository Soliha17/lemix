import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const products = [
  {
    name: 'Lemix ERP',
    href: '/erp',
  },
  {
    name: 'Lemix LMS',
    href: '/lms',
  },
  {
    name: 'Lemix EXAM',
    href: '/exam',
  },
];

const Propover = ({ title }) => {
  return (
    <Popover className="relative z-50 border-none outline-none">
      <Popover.Button className="flex items-center gap-x-1 border-none text-sm font-normal leading-6 text-black-75 outline-none hover:text-primary-100">
        {title}
        <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="dropdown-header absolute -left-8 top-full z-10 mt-3 w-screen overflow-hidden rounded-2xl bg-white-main shadow-md ring-1 ring-gray-900/5">
          <div className="p-2">
            {products.map((item) => (
              <div
                key={item.name}
                className="propover-panel group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
              >
                <NavLink exact="true" to={item.href} className="block font-normal text-gray-900">
                  {item.name}
                  <span className="absolute inset-0" />
                </NavLink>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Propover;

Propover.propTypes = {
  title: PropTypes.string.isRequired,
};
