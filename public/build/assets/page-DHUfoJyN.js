import{r as i,s,j as t}from"./app-DCWloSEy.js";import m from"./layout-C0G6UBu0.js";import n from"./inventory-table-section-jWxcg8vQ.js";import l from"./add-item-section-FR9KR1VY.js";import{g as p}from"./item-thunk-Ds8D5bd7.js";import{F as a}from"./PrinterIcon-Cb4zh1Qs.js";import"./sidebar-section-CDiNYvFE.js";import"./XMarkIcon-CrD5ABHo.js";import"./Cog6ToothIcon-v2ln_HgF.js";import"./HomeIcon-Dyks_Mcc.js";import"./UserGroupIcon-Dx6hNgyh.js";import"./UsersIcon-C5jk_JCG.js";import"./FolderIcon-MHGfRJ8F.js";import"./ClipboardDocumentListIcon-PxKx_C8F.js";import"./dialog-D4PvMpSv.js";import"./portal-CQPsSGcU.js";import"./topbar-section-BLvgYLDX.js";import"./app-thunk-CRd-7Pnv.js";import"./MagnifyingGlassIcon-Ba338QqF.js";import"./item-detail-section-B0sVVyvl.js";import"./inputfield-Bw4mDVWA.js";import"./modal-D6bQvWwo.js";import"./moment-C5S46NFB.js";import"./restock-section-CdoMsraN.js";import"./serial-number-item-thunk-CsUHH8oG.js";import"./serial-number-item-service-CUlaYQSG.js";import"./PlusIcon-DNIbBqCO.js";import"./CheckBadgeIcon-D2SrQ2le.js";import"./button-BYpysVlA.js";function $(){i.useEffect(()=>{s.dispatch(p())},[]);const r=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
        `),e.document.close(),e.print()};return t.jsx("div",{children:t.jsx(m,{children:t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"sm:flex sm:items-center",children:[t.jsxs("div",{className:"sm:flex-auto",children:[t.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Inventory"}),t.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the items in the inventory."})]}),t.jsxs("div",{className:" flex gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:[t.jsx("button",{onClick:r,className:"inline-flex items-center px-2 h-10 text-white bg-gray-600 rounded-md hover:bg-blue-700",children:t.jsx(a,{className:"h-5 w-5"})}),t.jsx(l,{})]})]}),t.jsx(n,{})]})})})}export{$ as default};
