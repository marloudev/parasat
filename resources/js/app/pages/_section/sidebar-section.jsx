import React, { useState } from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    TransitionChild,
} from "@headlessui/react";

import { ClipboardDocumentListIcon, Cog6ToothIcon, EnvelopeOpenIcon, SignalIcon, UserGroupIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarOpen } from "@/app/redux/app-slice";
import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function SidebarSection() {

    const path = window.location.pathname.split('/')[2]
    const navigation = [
        { name: "Dashboard", href: "/administrator/dashboard", icon: HomeIcon, current: path == 'dashboard' },
        { name: "User Management", href: "/administrator/user_manangement", icon: UserGroupIcon, current: path == 'user_manangement' },
        { name: "Internet Plans", href: "/administrator/internetplans", icon: SignalIcon, current: path == 'internetplans' },
        { name: "Applications", href: "/administrator/application", icon: UsersIcon, current: path == 'application' },
        { name: "Inventory", href: "/administrator/inventory", icon: FolderIcon, current: path == 'inventory' },
        { name: "Requests", href: "/administrator/requests", icon: ClipboardDocumentListIcon, current: path == 'requests' },
        { name: "Email notifications", href: "#", icon: EnvelopeOpenIcon, current: path == '' },
    ];

    const teams = [
        { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
        {
            id: 2,
            name: "Tailwind Labs",
            href: "#",
            initial: "T",
            current: false,
        },
        { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
    ];

    const { sidebarOpen } = useSelector((store) => store.app);
    const dispatch = useDispatch();
    function close_sidebar(params) {
        dispatch(setSidebarOpen());
    }
    return (
        <>
            <Dialog
                open={sidebarOpen}
                onClose={close_sidebar}
                className="relative z-50 lg:hidden"
            >
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                />
                <div className="fixed inset-0 flex">
                    <DialogPanel
                        transition
                        className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                    >
                        <TransitionChild>
                            <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                                <button
                                    type="button"
                                    onClick={() =>
                                        dispatch(setSidebarOpen(false))
                                    }
                                    className="-m-2.5 p-2.5"
                                >
                                    <span className="sr-only">
                                        Close sidebar
                                    </span>
                                    <XMarkIcon
                                        aria-hidden="true"
                                        className="size-6 text-white"
                                    />
                                </button>
                            </div>
                        </TransitionChild>
                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                            <div className="flex h-16 shrink-0 items-center">
                                <img
                                    alt="Your Company"
                                    src="/images/para-fiber.jpg"
                                    className="h-8 w-auto"
                                />
                            </div>
                            <nav className="flex flex-1 flex-col">
                                <ul
                                    role="list"
                                    className="flex flex-1 flex-col gap-y-7"
                                >
                                    <li>
                                        <ul
                                            role="list"
                                            className="-mx-2 space-y-1 "
                                        >
                                            {navigation.map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? "bg-gray-800 text-white"
                                                                : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                                            "group flex gap-x-3 rounded-sm p-2 text-sm/6 font-semibold "
                                                        )}
                                                    >
                                                        <item.icon
                                                            aria-hidden="true"
                                                            className="size-6 shrink-0"
                                                        />
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="text-xs/6 font-semibold text-gray-400">
                                            Your teams
                                        </div>
                                        <ul
                                            role="list"
                                            className="-mx-2 mt-2 space-y-1"
                                        >
                                            {teams.map((team) => (
                                                <li key={team.name}>
                                                    <Link
                                                        href={team.href}
                                                        className={classNames(
                                                            team.current
                                                                ? "bg-gray-800 text-white"
                                                                : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                                            "group flex gap-x-3 rounded-sm p-2 text-sm/6 font-semibold"
                                                        )}
                                                    >
                                                        <span className="flex size-6 shrink-0 items-center justify-center rounded-sm border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                                            {team.initial}
                                                        </span>
                                                        <span className="truncate">
                                                            {team.name}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li className="mt-auto">
                                        <a
                                            href="#"
                                            className="group -mx-2 flex gap-x-3 rounded-sm p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                                        >
                                            <Cog6ToothIcon
                                                aria-hidden="true"
                                                className="size-6 shrink-0"
                                            />
                                            Settings
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-sky-500 px-5 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                        <img
                            alt="Your Company"
                            src="/images/para-fiber.jpg"
                            className="h-12 mt-4 w-auto"
                        />
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul
                            role="list"
                            className="flex flex-1 flex-col gap-y-7"
                        >
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <div key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-sky-800 text-white"
                                                        : "text-white hover:bg-sky-800 hover:text-white",
                                                    "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold "
                                                )}
                                            >
                                                <item.icon
                                                    aria-hidden="true"
                                                    className="size-6 shrink-0"
                                                />
                                                {item.name}
                                            </Link>
                                        </div>
                                    ))}
                                </ul>
                            </li>
                            {/* <li>
                                <div className="text-xs/6 font-semibold text-gray-400">
                                    Your teams
                                </div>
                                <ul
                                    role="list"
                                    className="-mx-2 mt-2 space-y-1"
                                >
                                    {teams.map((team) => (
                                        <li key={team.name}>
                                            <a
                                                href={team.href}
                                                className={classNames(
                                                    team.current
                                                        ? "bg-gray-800 text-white"
                                                        : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                                    "group flex gap-x-3 rounded-sm p-2 text-sm/6 font-semibold"
                                                )}
                                            >
                                                <span className="flex size-6 shrink-0 items-center justify-center rounded-sm border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                                    {team.initial}
                                                </span>
                                                <span className="truncate">
                                                    {team.name}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li> */}
                            <li className="mt-auto">
                                <a
                                    href="#"
                                    className="group -mx-2 flex gap-x-3 rounded-sm p-2 text-sm/6 font-semibold text-white hover:bg-gray-800 hover:text-white"
                                >
                                    <Cog6ToothIcon
                                        aria-hidden="true"
                                        className="size-6 shrink-0"
                                    />
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
