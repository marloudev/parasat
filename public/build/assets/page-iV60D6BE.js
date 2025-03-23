import{r as i,s,j as t}from"./app-MqHCgvvo.js";import n from"./layout-BknaWkV3.js";import m from"./inventory-table-section-BMFq_SOt.js";import l from"./add-item-section-CoJ-_5CG.js";import{g as a}from"./item-thunk-C-v42qsc.js";import{F as p}from"./PrinterIcon-BOS5D8tq.js";import"./custodian-sidebar-section copy-CF0UA0Ir.js";import"./XMarkIcon-ZRuGWFBj.js";import"./FolderIcon-C8aYR6qW.js";import"./ClipboardDocumentListIcon-Bi8183KO.js";import"./dialog-DH-GPbG1.js";import"./portal-CQPeQ3L1.js";import"./topbar-section-B59WH_rD.js";import"./app-thunk-BM7fO6dW.js";import"./MagnifyingGlassIcon-B6q67BKb.js";import"./item-detail-section-DXYZb2si.js";import"./inputfield-C869jY6G.js";import"./modal-C3ZS-aI6.js";import"./moment-C5S46NFB.js";import"./restock-section-C-Qb1LWm.js";import"./serial-number-item-thunk--ZA_BJE3.js";import"./serial-number-item-service-DgI5NCec.js";import"./PlusIcon-DaSwS5SZ.js";import"./CheckBadgeIcon-CVf_vwXL.js";import"./button-B_79-B3_.js";function H(){i.useEffect(()=>{s.dispatch(a())},[]);const r=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
