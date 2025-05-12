import{r as e,s as m,j as t}from"./app-8egZVyLv.js";import s from"./layout-Dt2zbIXk.js";import p from"./inventory-table-section-9HV1iVK5.js";import n from"./add-item-section-2MNtSDLs.js";import{g as l}from"./item-thunk-CskMCl-G.js";import{F as a}from"./PrinterIcon-BWiWaRGp.js";import"./sidebar-section-BRK0FEM7.js";import"./XMarkIcon-CxcaOsRJ.js";import"./HomeIcon-BusnyHB2.js";import"./UserGroupIcon-Bu4SJ13s.js";import"./UsersIcon-0a8_sX4y.js";import"./FolderIcon-DFtLVHh9.js";import"./ClipboardDocumentListIcon-C5FmJrhB.js";import"./dialog-h9XOpuSN.js";import"./portal-CJ8jEFc2.js";import"./topbar-section-B923jQg0.js";import"./app-thunk-pBZp8Gcz.js";import"./notification-section-B2mU5L1X.js";import"./LeftOutlined-D5F09JPi.js";import"./AntdIcon-8Vk9WXN6.js";import"./index-DomzDmXK.js";import"./useId-KeqrKvvI.js";import"./useZIndex-D5UlUqXP.js";import"./context-BRjvOyHc.js";import"./asyncToGenerator-D3LqunMc.js";import"./PurePanel-BY6PaA5u.js";import"./index-Diz9Nr2x.js";import"./ContextIsolator-hOM55Hxh.js";import"./zoom-CAqg_G4r.js";import"./Overflow-BwTwqF6d.js";import"./button-DWciLPUN.js";import"./UnstableContext-Bc8Y8jXU.js";import"./BellIcon-C5tIX9JF.js";import"./MagnifyingGlassIcon-XljK2Hmb.js";import"./item-detail-section-COO1vahk.js";import"./inputfield-79C53FqS.js";import"./modal-ClyEMS8K.js";import"./moment-C5S46NFB.js";import"./restock-section-CEmGnBOG.js";import"./serial-number-item-thunk-DJ-gcuKQ.js";import"./serial-number-item-service-ViJCI5me.js";import"./PlusIcon-CIZWL7o8.js";import"./CheckBadgeIcon-DytNxhdB.js";import"./button-Cp6Hn1e9.js";function ot(){e.useEffect(()=>{m.dispatch(l())},[]);const r=()=>{const i=document.getElementById("report-table");if(!i){console.error("Table content not found.");return}const o=window.open("","","height=600,width=800");o.document.write(`
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
              ${i.outerHTML} <!-- Copy the table content -->
            </body>
          </html>
        `),o.document.close(),o.print()};return t.jsx("div",{children:t.jsx(s,{children:t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"sm:flex sm:items-center",children:[t.jsxs("div",{className:"sm:flex-auto",children:[t.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Inventory"}),t.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the items in the inventory."})]}),t.jsxs("div",{className:" flex gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:[t.jsx("button",{onClick:r,className:"inline-flex items-center px-2 h-10 text-white bg-gray-600 rounded-md hover:bg-blue-700",children:t.jsx(a,{className:"h-5 w-5"})}),t.jsx(n,{})]})]}),t.jsx(p,{})]})})})}export{ot as default};
