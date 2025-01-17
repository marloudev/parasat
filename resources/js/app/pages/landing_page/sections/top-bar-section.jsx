import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { router } from '@inertiajs/react'

export default function TopBarSection() {
    const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div>
            <Disclosure as="nav" className="bg-gray-800">
                <div className="mx-auto sm:px-10">
                    <div className="relative flex h-16 items-center justify-between w-full">
                        <div className='w-full'>
                            <img src="/images/para-fiber.jpg" className='h-10' alt="" />
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            {/* <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div> */}
                        </div>

                        <div className=" flex items-center">
                            <button
                                type='button'
                                onClick={() => router.visit('/logins')}
                                className='bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600'>
                                LOGIN
                            </button>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    )
}
