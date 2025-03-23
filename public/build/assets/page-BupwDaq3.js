import{r,s,j as t}from"./app-CANLSkxi.js";import n from"./layout-D0zxqAsZ.js";import m from"./inventory-table-section-6y4yMIMV.js";import l from"./add-item-section-jC51ZGQu.js";import{g as p}from"./item-thunk-e9v5NQE6.js";import{F as a}from"./PrinterIcon-ByIoMEOh.js";import"./sidebar-section-Bv7uVe07.js";import"./XMarkIcon-BRxUvBlT.js";import"./HomeIcon-DzKp1trE.js";import"./UserGroupIcon-efrpj_wc.js";import"./UsersIcon-B-6EsNcD.js";import"./FolderIcon-CNW8OPVN.js";import"./ClipboardDocumentListIcon-DDDfJ0tq.js";import"./dialog-CvIFlg3v.js";import"./portal-HohOFgJO.js";import"./topbar-section-BE4xDQiZ.js";import"./app-thunk-Vx9EYZTW.js";import"./MagnifyingGlassIcon-Daph_0I_.js";import"./item-detail-section-C3CdbEqM.js";import"./inputfield-B0k_oXrj.js";import"./modal-CzbzaPdU.js";import"./moment-C5S46NFB.js";import"./restock-section-C0uqTgBj.js";import"./serial-number-item-thunk-B8YaSAn5.js";import"./serial-number-item-service-DpLX6uEL.js";import"./PlusIcon-B2zx8uWi.js";import"./CheckBadgeIcon-BMnlJPue.js";import"./button-DXPqfuyn.js";function S(){r.useEffect(()=>{s.dispatch(p())},[]);const i=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
