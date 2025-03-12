import{r as i,s,j as t}from"./app-C5CtHKKT.js";import n from"./layout-BVcraum4.js";import m from"./inventory-table-section-BqixgvUd.js";import l from"./add-item-section-BLpPkXhv.js";import{g as a}from"./item-thunk-UYhN-RtB.js";import{F as p}from"./PrinterIcon-Dj-Je5UP.js";import"./custodian-sidebar-section copy-DZ7t3iWW.js";import"./XMarkIcon-BR4Za3OQ.js";import"./FolderIcon-D7NzWh4a.js";import"./ClipboardDocumentListIcon-DsmAuU6d.js";import"./dialog-Ccfzbb7O.js";import"./portal-Cb4E0ZJm.js";import"./topbar-section-CC8rkAta.js";import"./app-thunk-CDf4H3go.js";import"./MagnifyingGlassIcon-DbYVk-4E.js";import"./item-detail-section-DBTqC9S2.js";import"./inputfield-CqJ8W0Dq.js";import"./modal-C0dpkZeW.js";import"./moment-C5S46NFB.js";import"./restock-section-CwPHcl6_.js";import"./serial-number-item-thunk-DGdwecH-.js";import"./serial-number-item-service-Dlgb50tq.js";import"./PlusIcon-CHPii54V.js";import"./CheckBadgeIcon-2cM0z0hH.js";import"./button-BqBdLt8P.js";function H(){i.useEffect(()=>{s.dispatch(a())},[]);const r=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
