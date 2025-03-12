import React, { useEffect, useState } from 'react'
import AdminLayout from '../layout'
import InventoryTable from './_sections/inventory-table-section'
import AddItemSection from './_sections/add-item-section'
import store from '../../store/store'
import { get_item_thunk } from '@/app/redux/item-thunk'
import { PrinterIcon } from '@heroicons/react/24/outline'

export default function InventoryPage() {

    useEffect(() => {
        store.dispatch(get_item_thunk())
    }, [])

    const handlePrint = () => {
        const printContent = document.getElementById('report-table'); // Get the table by its ID

        if (!printContent) {
            console.error("Table content not found.");
            return;
        }

        const printWindow = window.open('', '', 'height=600,width=800');

        printWindow.document.write(`
          <html>
            <head>
              <title>Report</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th, td { padding: 10px; text-align: left; border: 1px solid #000; }
                th { background-color: #f4f4f4; }
                
                th:nth-child(4), td:nth-child(4) {
                  display: none;
                }
    
                /* Adjust icon sizes */
                img, svg, i, .icon { 
                  width: 16px !important;
                  height: 16px !important;
                }
              </style>
            </head>
            <body>
              <h2>Report</h2>
              ${printContent.outerHTML} <!-- Copy the table content -->
            </body>
          </html>
        `);

        printWindow.document.close();
        printWindow.print();
    };

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
                        <div className=" flex gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                            <button
                                onClick={handlePrint}
                                className="inline-flex items-center px-2 h-10 text-white bg-gray-600 rounded-md hover:bg-blue-700"
                            >
                                <PrinterIcon className="h-5 w-5" />

                            </button>
                            <AddItemSection />
                        </div>
                    </div>
                    <InventoryTable />
                </div>
            </AdminLayout>
        </div>
    )
}