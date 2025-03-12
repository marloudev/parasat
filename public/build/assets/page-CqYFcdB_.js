import{r as i,s,j as t}from"./app-CyMwx2OI.js";import n from"./layout-C_1cr9yj.js";import m from"./inventory-table-section-DAx94eN8.js";import l from"./add-item-section-_KESbW8K.js";import{g as a}from"./item-thunk-lg3zEOsk.js";import{F as p}from"./PrinterIcon-CVhulaO6.js";import"./custodian-sidebar-section copy-CPuz0fFa.js";import"./XMarkIcon-C5IT-Gy2.js";import"./FolderIcon-C3zrlm9-.js";import"./ClipboardDocumentListIcon-CxM30k7d.js";import"./dialog-IkTHxwCW.js";import"./portal-CsrneY8N.js";import"./topbar-section-Chdtck1P.js";import"./app-thunk-DL6QOboE.js";import"./MagnifyingGlassIcon-_iwiYESE.js";import"./item-detail-section-CKV2Tnnt.js";import"./inputfield-CQdu3Yq1.js";import"./modal-CAjWTksk.js";import"./moment-C5S46NFB.js";import"./restock-section-DlGfG_g0.js";import"./serial-number-item-thunk-DsYSMuOz.js";import"./serial-number-item-service-BpS_Dvd6.js";import"./PlusIcon-Duxh1J3T.js";import"./CheckBadgeIcon-BtU0SJcz.js";import"./button-C2K0zpUQ.js";function H(){i.useEffect(()=>{s.dispatch(a())},[]);const r=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
