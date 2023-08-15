import PropTypes from 'prop-types';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Disclosure } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const DisclosureComp = ({ title }) => {
  return (
    <div>
      <Disclosure as="div" className="-mx-3">
        {({ open }) => (
          <div>
            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base text-black-75 hover:bg-gray-50">
              {title}
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
                  {item.name}
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
