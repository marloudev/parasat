import { BuildingOfficeIcon, DevicePhoneMobileIcon, PhoneIcon } from '@heroicons/react/16/solid'
import React from 'react'

export default function AboutUsSection() {
    return (
        <div className='bg-white pb-10 p-14'>
            <div className='flex items-center justify-center w-full gap-28'>
                <div className='text-xl p-4'>
                    <h1 className='flex items-center'>
                        <b>CONTACT US&nbsp;</b>
                        <PhoneIcon className='h-5' />:
                    </h1>
                </div>
                <div>
                    <h1 className='mb-5 text-3xl'>
                        <b>Office</b>
                    </h1>
                    <p className='flex items-center text-lg'>
                        <BuildingOfficeIcon className='h-4' />
                        &nbsp;Unit 5 Plaza Bldg. Rizal St.,
                        San Carlos City, Negros Occidental
                        Philippines 6127
                    </p>
                    <p className='flex items-center'>
                        <DevicePhoneMobileIcon className='h-4' />
                        &nbsp;0915-870-1972
                    </p>
                    <p className='flex items-center'>
                        <PhoneIcon className='h-4' />
                        &nbsp;(034)312-6184
                    </p>
                    {/* <p>
                        parasat.web@websprinter.net
                    </p> */}
                </div>
                <div className='mb-6'>
                    <h1 className='mb-5 text-3xl'>
                        <b>Operating Hours</b>
                    </h1>
                    <div className=''>
                        <p className='text-lg'>
                            Mon - Fri: 8:00am - 5:00pm

                        </p>
                        <p className='text-lg'>
                            Saturday: 8:00am - 5:00pm
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
