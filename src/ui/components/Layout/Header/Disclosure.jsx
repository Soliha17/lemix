import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const products = [
  {
    name: 'lemixErp',
    href: '/erp',
  },
  {
    name: 'lemixLms',
    href: '/lms',
  },
  {
    name: 'lemixExam',
    href: '/exam',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const DisclosureComp = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Disclosure as="div" className="-mx-3">
        {({ open }) => (
          <div>
            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base text-black-75 hover:bg-gray-50">
              {t(title)}
              <ChevronDownIcon
                className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                aria-hidden="true"
              />
            </Disclosure.Button>
            <Disclosure.Panel className="disclosure-panel mt-2 space-y-2">
              {products.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={NavLink}
                  to={item.href}
                  exact="true"
                  className="block rounded-lg py-2 pl-6 pr-3 text-sm text-black-75 hover:bg-gray-50"
                >
                  {t(item.name)}
                </Disclosure.Button>
              ))}
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default DisclosureComp;

DisclosureComp.propTypes = {
  title: PropTypes.string.isRequired,
};
