import{r,s,j as t}from"./app-CyMwx2OI.js";import n from"./layout-BWHhLsGt.js";import m from"./inventory-table-section-Dwt0dygD.js";import l from"./add-item-section-DlssE26k.js";import{g as p}from"./item-thunk-lg3zEOsk.js";import{F as a}from"./PrinterIcon-CVhulaO6.js";import"./sidebar-section-BDutxpix.js";import"./XMarkIcon-C5IT-Gy2.js";import"./HomeIcon-DDd6X0J5.js";import"./UserGroupIcon-38YYvmYy.js";import"./UsersIcon-B8kLI9lP.js";import"./FolderIcon-C3zrlm9-.js";import"./ClipboardDocumentListIcon-CxM30k7d.js";import"./dialog-IkTHxwCW.js";import"./portal-CsrneY8N.js";import"./topbar-section-Chdtck1P.js";import"./app-thunk-DL6QOboE.js";import"./MagnifyingGlassIcon-_iwiYESE.js";import"./item-detail-section-D6mHJtXd.js";import"./inputfield-CQdu3Yq1.js";import"./modal-CAjWTksk.js";import"./moment-C5S46NFB.js";import"./restock-section-D13CR4Ce.js";import"./serial-number-item-thunk-DsYSMuOz.js";import"./serial-number-item-service-BpS_Dvd6.js";import"./PlusIcon-Duxh1J3T.js";import"./CheckBadgeIcon-BtU0SJcz.js";import"./button-C2K0zpUQ.js";function S(){r.useEffect(()=>{s.dispatch(p())},[]);const i=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
