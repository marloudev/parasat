import{r as i,s,j as t}from"./app-C5gSas0A.js";import n from"./layout-BbYeIAzi.js";import m from"./inventory-table-section-ampQ-ehz.js";import l from"./add-item-section-CmCM1h2Y.js";import{g as a}from"./item-thunk-HDZ7qWPo.js";import{F as p}from"./PrinterIcon-Bws9Qms5.js";import"./custodian-sidebar-section copy-Drz0GxhL.js";import"./XMarkIcon-BhY5h6y2.js";import"./FolderIcon-CZaOqlLi.js";import"./ClipboardDocumentListIcon-DkIwttJt.js";import"./dialog-CuOUPRpi.js";import"./portal-CZYwQVCb.js";import"./topbar-section-C-CQzSfX.js";import"./app-thunk-BQ8Aqscf.js";import"./MagnifyingGlassIcon-3hPeReTy.js";import"./item-detail-section-GuHDZ4d_.js";import"./inputfield-mhlx3ORy.js";import"./modal-C6siscNH.js";import"./moment-C5S46NFB.js";import"./restock-section-Bskvs7vX.js";import"./serial-number-item-thunk-CR9TV4yu.js";import"./serial-number-item-service-cknMPbbF.js";import"./PlusIcon-Bl9HecjI.js";import"./CheckBadgeIcon-CMxS7T4h.js";import"./button-CyiWaBl6.js";function H(){i.useEffect(()=>{s.dispatch(a())},[]);const r=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
        `),e.document.close(),e.print()};return t.jsx("div",{children:t.jsx(n,{children:t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"sm:flex sm:items-center",children:[t.jsxs("div",{className:"sm:flex-auto",children:[t.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Inventory"}),t.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the items in the inventory."})]}),t.jsxs("div",{className:" flex gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:[t.jsx("button",{onClick:r,className:"inline-flex items-center px-2 h-10 text-white bg-gray-600 rounded-md hover:bg-blue-700",children:t.jsx(p,{className:"h-5 w-5"})}),t.jsx(l,{})]})]}),t.jsx(m,{})]})})})}export{H as default};
