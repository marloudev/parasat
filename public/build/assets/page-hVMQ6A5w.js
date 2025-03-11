import{r as i,s,j as t}from"./app-CdDlPTwP.js";import m from"./layout-Cm8Vkbr3.js";import n from"./inventory-table-section-CkyglGoV.js";import l from"./add-item-section-k9prMqXj.js";import{g as a}from"./item-thunk-DQVmG7eN.js";import{F as p}from"./PrinterIcon-S5ewEp1C.js";import"./custodian-sidebar-section copy-Chsm7-lC.js";import"./XMarkIcon-A4GBuzq4.js";import"./Cog6ToothIcon-DmvNsuX1.js";import"./FolderIcon-Ea0sMdH3.js";import"./ClipboardDocumentListIcon-DI21aNZu.js";import"./dialog-DsCyTlPw.js";import"./portal-BDU-aZdt.js";import"./topbar-section-nXH_XuRE.js";import"./app-thunk-DU4j0v4V.js";import"./MagnifyingGlassIcon-SaNqzj2D.js";import"./item-detail-section-C1GYbTtx.js";import"./inputfield-sG4ziYib.js";import"./modal-cXnX6MO8.js";import"./moment-C5S46NFB.js";import"./restock-section-DCJAqLSz.js";import"./serial-number-item-thunk-CE-YRu8H.js";import"./serial-number-item-service-DWfLHcJY.js";import"./PlusIcon-DnrdPs12.js";import"./CheckBadgeIcon-DZqk8lA8.js";import"./button-BqZ-REQQ.js";function M(){i.useEffect(()=>{s.dispatch(a())},[]);const r=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
          <html>
            <head>
              <title>Report</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th, td { padding: 10px; text-align: left; border: 1px solid #000; }
                th { background-color: #f4f4f4; }
              </style>
            </head>
            <body>
              <h2>Report</h2>
              ${o.outerHTML} <!-- This ensures the full table is copied -->
            </body>
          </html>
        `),e.document.close(),e.print()};return t.jsx("div",{children:t.jsx(m,{children:t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"sm:flex sm:items-center",children:[t.jsxs("div",{className:"sm:flex-auto",children:[t.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Inventory"}),t.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the items in the inventory."})]}),t.jsxs("div",{className:" flex gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:[t.jsx("button",{onClick:r,className:"inline-flex items-center px-2 h-10 text-white bg-gray-600 rounded-md hover:bg-blue-700",children:t.jsx(p,{className:"h-5 w-5"})}),t.jsx(l,{})]})]}),t.jsx(n,{})]})})})}export{M as default};
