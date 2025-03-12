import{r,s,j as t}from"./app-HpNJZ-Se.js";import m from"./layout-DhVkheUD.js";import n from"./inventory-table-section-105tGJRo.js";import p from"./add-item-section-b8bZzNCo.js";import{g as l}from"./item-thunk-jZyRv6n6.js";import{F as a}from"./PrinterIcon-CHsVALs3.js";import"./sidebar-section-DzgokB_C.js";import"./XMarkIcon-Dj5ux5Cc.js";import"./Cog6ToothIcon-BJdEc5gJ.js";import"./HomeIcon-DVDUwffd.js";import"./UserGroupIcon-DmVDPWql.js";import"./UsersIcon-BEY8VAOs.js";import"./FolderIcon-Bn-iZQtL.js";import"./ClipboardDocumentListIcon-D9xOJH8f.js";import"./dialog-CsPSL7N0.js";import"./portal-CZp_5lNf.js";import"./topbar-section-D3jfONgU.js";import"./app-thunk-CoKDh1OP.js";import"./MagnifyingGlassIcon-CYAVp-3j.js";import"./item-detail-section-C89QFLvv.js";import"./inputfield-UMxdyt_O.js";import"./modal-DeNWinEt.js";import"./moment-C5S46NFB.js";import"./restock-section-MVKKDKEq.js";import"./serial-number-item-thunk-BIVjX3BH.js";import"./serial-number-item-service-D9AZi5yY.js";import"./PlusIcon-I8F7cxzu.js";import"./CheckBadgeIcon-BYxOeTeB.js";import"./button-Cq-X6zF2.js";function W(){r.useEffect(()=>{s.dispatch(l())},[]);const i=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
        `),e.document.close(),e.print()};return t.jsx("div",{children:t.jsx(m,{children:t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"sm:flex sm:items-center",children:[t.jsxs("div",{className:"sm:flex-auto",children:[t.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Inventory"}),t.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the items in the inventory."})]}),t.jsxs("div",{className:" flex gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:[t.jsx("button",{onClick:i,className:"inline-flex items-center px-2 h-10 text-white bg-gray-600 rounded-md hover:bg-blue-700",children:t.jsx(a,{className:"h-5 w-5"})}),t.jsx(p,{})]})]}),t.jsx(n,{})]})})})}export{W as default};
