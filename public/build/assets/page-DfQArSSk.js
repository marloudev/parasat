import{r,s,j as t}from"./app-CwvsqSfj.js";import n from"./layout-CmmAQqPU.js";import m from"./inventory-table-section-WiPY-KSe.js";import l from"./add-item-section-XwmqDFsx.js";import{g as p}from"./item-thunk-Q81OAYNW.js";import{F as a}from"./PrinterIcon-CIt0pQxJ.js";import"./sidebar-section-Qs_vAsxr.js";import"./XMarkIcon-CqJSSKC6.js";import"./HomeIcon-CWm2QXU9.js";import"./UserGroupIcon-9JoX-on2.js";import"./UsersIcon-DLJVGH1Z.js";import"./FolderIcon-C6-wut8c.js";import"./ClipboardDocumentListIcon-CQ35X6xy.js";import"./dialog-DwUVwlT5.js";import"./portal-DM6_BdB6.js";import"./topbar-section-BD-toY-w.js";import"./app-thunk-CtAwisR8.js";import"./MagnifyingGlassIcon-ByzaqW1s.js";import"./item-detail-section-bT3X294J.js";import"./inputfield-B5qjv64p.js";import"./modal-BxCKEvOS.js";import"./moment-C5S46NFB.js";import"./restock-section-C9Hgo_pN.js";import"./serial-number-item-thunk-XRkmqzGE.js";import"./serial-number-item-service-ChppU-ei.js";import"./PlusIcon-Dts7HtLz.js";import"./CheckBadgeIcon-CHMGHS5B.js";import"./button--OywJZZR.js";function S(){r.useEffect(()=>{s.dispatch(p())},[]);const i=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
