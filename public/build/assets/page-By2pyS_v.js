import{r,s,j as t}from"./app-tMUN1HKo.js";import n from"./layout-DxZCP8v-.js";import m from"./inventory-table-section-BiKMXs8V.js";import l from"./add-item-section-V60WtAEq.js";import{g as p}from"./item-thunk-B7LsWaHa.js";import{F as a}from"./PrinterIcon-Bgon9j7e.js";import"./sidebar-section-CHpAeDJd.js";import"./XMarkIcon-CU70bYuu.js";import"./HomeIcon-xXR6tr-3.js";import"./UserGroupIcon-1K92JUAC.js";import"./UsersIcon-BLodpx4m.js";import"./FolderIcon-DeHiNZUi.js";import"./ClipboardDocumentListIcon-DB64RLDC.js";import"./dialog-RWA457d8.js";import"./portal-BnAkOFGT.js";import"./topbar-section-_HkXbh7I.js";import"./app-thunk-BLenFN13.js";import"./MagnifyingGlassIcon-D4hgTGet.js";import"./item-detail-section-CBoz_DSo.js";import"./inputfield-DfL1JWTy.js";import"./modal-C8H5BO8t.js";import"./moment-C5S46NFB.js";import"./restock-section-CP3HbKpa.js";import"./serial-number-item-thunk-BTIm0gRH.js";import"./serial-number-item-service-D2GIN4as.js";import"./PlusIcon-CWZF99zy.js";import"./CheckBadgeIcon-D-pbFuUx.js";import"./button-BVp1Hjae.js";function S(){r.useEffect(()=>{s.dispatch(p())},[]);const i=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
              ${o.outerHTML} <!-- Copy the table content -->
            </body>
          </html>
        `),e.document.close(),e.print()};return t.jsx("div",{children:t.jsx(n,{children:t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"sm:flex sm:items-center",children:[t.jsxs("div",{className:"sm:flex-auto",children:[t.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Inventory"}),t.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the items in the inventory."})]}),t.jsxs("div",{className:" flex gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:[t.jsx("button",{onClick:i,className:"inline-flex items-center px-2 h-10 text-white bg-gray-600 rounded-md hover:bg-blue-700",children:t.jsx(a,{className:"h-5 w-5"})}),t.jsx(l,{})]})]}),t.jsx(m,{})]})})})}export{S as default};
