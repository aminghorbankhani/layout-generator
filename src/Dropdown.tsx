import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

const Dropdown = ({ title, items, onClick }: {title: string, items: string[], onClick: (item: string) => void}): JSX.Element => {
  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 shadow">
          {title}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top rounded-md bg-white shadow">
          <div className="py-1">
            {items.map(item => (
              <Menu.Item key={item}>
              {({ active }) => (
                <button
                  onClick={() => onClick(item)}
                  className={`${
                    (active) ? 'bg-gray-100' : ''
                  } flex w-full items-center rounded-md px-4 py-2`}
                >
                  {item}
                </button>
              )}
            </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown
