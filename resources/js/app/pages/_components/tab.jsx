import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import Button from './button';

export default function Tab({ tabs, onTabChange }) {
    const [currentTab, setCurrentTab] = useState(tabs[0]);

    const handleTabClick = (tab) => {
        setCurrentTab(tab);
        onTabChange(tab);
    };

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:hidden">
                {/* Mobile view */}
                <select
                    value={currentTab.name}
                    onChange={(e) => {
                        const selectedTab = tabs.find((tab) => tab.name === e.target.value);
                        handleTabClick(selectedTab);
                    }}
                    aria-label="Select a tab"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                >
                    {tabs.map((tab) => (
                        <option key={tab.name} value={tab.name}>
                            {tab.name}
                        </option>
                    ))}
                </select>
                <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
                />
            </div>

            <div className="hidden sm:block">
                {/* Desktop view */}
                <div className="flex py-2">
                    <nav aria-label="Tabs" className="flex space-x-3">
                        {tabs.map((tab) => (
                            <Button
                                key={tab.name}
                                onClick={() => handleTabClick(tab)}
                                variant={currentTab.name === tab.name ? 'info' : 'default'}
                                className={classNames(
                                    currentTab.name === tab.name
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900', // Inactive tab
                                    'rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ease-in-out'
                                )}
                            >
                                {tab.name}
                            </Button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}
