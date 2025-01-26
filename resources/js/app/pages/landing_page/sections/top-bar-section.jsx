import React, { useState, useEffect, useRef } from 'react'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { router } from '@inertiajs/react'

export default function TopBarSection() {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false)
    const tooltipRef = useRef(null)
    const buttonRef = useRef(null)

    const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
    ]

    // Close tooltip if click is outside button or tooltip
    useEffect(() => {
        function handleClickOutside(event) {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsTooltipVisible(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div>
            <div className="bg-gray-800">
                <div className="mx-auto sm:px-10">
                    <div className="relative flex h-16 items-center justify-between w-full">
                        <div className='w-full'>
                            <img src="/images/para-fiber.jpg" className='h-10' alt="" />
                        </div>
                        <div className="flex flex-1 gap-5 w-full  text-white items-center justify-center sm:items-stretch sm:justify-start">
                            <div className='hover:text-slate-400'>
                                <a href=""> About Us</a>
                            </div>
                            <div className='hover:text-slate-400'>
                                <a href=""> Contact</a>
                            </div>
                            <div className='hover:text-slate-400'>
                                <a href=""> Home</a>
                            </div>
                        </div>

                        <div className="fixed bottom-10 right-14 flex items-center justify-center">
                            {/* Settings button */}
                            <button
                                ref={buttonRef}  // Attach reference to the button
                                type="button"
                                onClick={() => setIsTooltipVisible(!isTooltipVisible)}  // Toggle tooltip visibility
                                className="bg-[rgba(0,0,0,0.4)] px-2 py-2 rounded-md text-white hover:bg-slate-600 flex items-center justify-center">
                                <Cog6ToothIcon className="h-8" />
                            </button>

                            {/* Tooltip menu for LOGIN */}
                            {isTooltipVisible && (
                                <div ref={tooltipRef} className="absolute bottom-full mb-2 right-0 w-40 bg-slate-200 shadow-lg rounded-lg">
                                    {/* Message bubble arrow */}
                                    <div className="absolute top-full right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-transparent border-l-transparent border-r-transparent border-b-slate-300"></div>

                                    {/* Login button inside the tooltip */}
                                    <button
                                        onClick={() => {
                                            router.visit('/logins')
                                            setIsTooltipVisible(false)  // Close tooltip after redirection
                                        }}
                                        className="block w-full px-4 py-2 text-md text-blue-500 hover:bg-slate-300 text-center rounded-md">
                                        <b>Sign In</b>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
