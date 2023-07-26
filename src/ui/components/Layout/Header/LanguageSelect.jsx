import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const languages = [
  {
    id: 1,
    name: 'UZ',
  },
  {
    id: 2,
    name: 'EN',
  },
  {
    id: 3,
    name: 'RU',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function LanguageSelect() {
  const [selected, setSelected] = useState(languages[0]);

  return (
    <Listbox value={selected} onChange={setSelected} className="border-0">
      {({ open }) => (
        <>
          <Listbox.Label className="hidden">Assigned to</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white-main py-1.5 pl-3 pr-10 text-left text-black-75 focus:outline-none focus:ring-2 focus:ring-primary-100 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-black-75" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white-main py-1 text-base ring-1 ring-black-25 focus:outline-none sm:text-sm">
                {languages.map((language) => (
                  <Listbox.Option
                    key={language.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-primary-75' : 'text-black-75',
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                      )
                    }
                    value={language}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {/* <img
                            src={person.avatar}
                            alt=""
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                          /> */}
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate',
                            )}
                          >
                            {language.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white-main' : 'text-primary-100',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
