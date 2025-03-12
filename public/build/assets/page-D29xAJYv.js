import{r,s,j as t}from"./app-C5CtHKKT.js";import n from"./layout-DuHl4k_Y.js";import m from"./inventory-table-section-CK8-6O9O.js";import l from"./add-item-section-C46wjcIq.js";import{g as p}from"./item-thunk-UYhN-RtB.js";import{F as a}from"./PrinterIcon-Dj-Je5UP.js";import"./sidebar-section-DZcxyMmw.js";import"./XMarkIcon-BR4Za3OQ.js";import"./HomeIcon-uiEqV9sJ.js";import"./UserGroupIcon-uOLichiw.js";import"./UsersIcon--aS6Ey-I.js";import"./FolderIcon-D7NzWh4a.js";import"./ClipboardDocumentListIcon-DsmAuU6d.js";import"./dialog-Ccfzbb7O.js";import"./portal-Cb4E0ZJm.js";import"./topbar-section-CC8rkAta.js";import"./app-thunk-CDf4H3go.js";import"./MagnifyingGlassIcon-DbYVk-4E.js";import"./item-detail-section-kuEtZ7vp.js";import"./inputfield-CqJ8W0Dq.js";import"./modal-C0dpkZeW.js";import"./moment-C5S46NFB.js";import"./restock-section-CwE3FsEJ.js";import"./serial-number-item-thunk-DGdwecH-.js";import"./serial-number-item-service-Dlgb50tq.js";import"./PlusIcon-CHPii54V.js";import"./CheckBadgeIcon-2cM0z0hH.js";import"./button-BqBdLt8P.js";function S(){r.useEffect(()=>{s.dispatch(p())},[]);const i=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
