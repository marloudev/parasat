import React, { useEffect, useState } from 'react'
import AdminLayout from '../layout'
import InventoryTable from './_sections/inventory-table-section'
import AddItemSection from './_sections/add-item-section'
import store from '../../store/store'
import { get_item_thunk } from '@/app/redux/item-thunk'

export default function InventoryPage() {
    
    useEffect(()=>{
        store.dispatch(get_item_thunk())
    },[])
    return (
        <div>
            <AdminLayout>
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <h1 className="text-base font-semibold text-gray-900">Inventory</h1>
                            <p className="mt-2 text-sm text-gray-700">
                                A list of all the items in the inventory.
                            </p>
                        </div>
                        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                           <AddItemSection /> 
                        </div>
                    </div>
                    <InventoryTable />
                </div>
            </AdminLayout>
        </div>
    )
}