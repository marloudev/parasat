import{r,s,j as t}from"./app-BBXbNUoE.js";import n from"./layout-FfYVSFI2.js";import m from"./inventory-table-section-sJ3MQMqW.js";import l from"./add-item-section-CuefRR-_.js";import{g as p}from"./item-thunk-vUFaXxiz.js";import{F as a}from"./PrinterIcon-DbHTPtYv.js";import"./sidebar-section-DKHL5lbP.js";import"./XMarkIcon-C1LqHOnz.js";import"./HomeIcon-CNkK_lik.js";import"./UserGroupIcon-c28UzGlh.js";import"./UsersIcon-BttDhG3L.js";import"./FolderIcon-D4ABoToO.js";import"./ClipboardDocumentListIcon-DSN3hKy4.js";import"./dialog-Lsc5W_C_.js";import"./portal-H4kDCLIp.js";import"./topbar-section-ymkKbsN3.js";import"./app-thunk-C7V8buil.js";import"./MagnifyingGlassIcon-CydHc5iC.js";import"./item-detail-section-CtDJzKlJ.js";import"./inputfield-C9Ok-TCw.js";import"./modal-Ba7nwWL1.js";import"./moment-C5S46NFB.js";import"./restock-section-M9F3TcPg.js";import"./serial-number-item-thunk-DA3zvwQH.js";import"./serial-number-item-service-C2e0H4Gz.js";import"./PlusIcon-ieNp0WwI.js";import"./CheckBadgeIcon-C80F2nVa.js";import"./button-DKgOKdjE.js";function S(){r.useEffect(()=>{s.dispatch(p())},[]);const i=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
