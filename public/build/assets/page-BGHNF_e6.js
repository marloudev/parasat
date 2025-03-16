import{r,s,j as t}from"./app-DfNpiL82.js";import n from"./layout-RqgYUa9g.js";import m from"./inventory-table-section-BNlXgAnu.js";import l from"./add-item-section-DOqGG_9m.js";import{g as p}from"./item-thunk-BJWyEPc8.js";import{F as a}from"./PrinterIcon-ClDuKBZ1.js";import"./sidebar-section-DpEI2SRx.js";import"./XMarkIcon-Bl0xxI5I.js";import"./HomeIcon-DYqIPLjn.js";import"./UserGroupIcon-BL9g_unl.js";import"./UsersIcon-BLMvlkAG.js";import"./FolderIcon-bpL_-27l.js";import"./ClipboardDocumentListIcon-CuYPWqs6.js";import"./dialog-CqcoAr1H.js";import"./portal-Dybk9uxp.js";import"./topbar-section-C_LH_WsE.js";import"./app-thunk-Do9vgoF2.js";import"./MagnifyingGlassIcon-ntWRoE_L.js";import"./item-detail-section-M9WK0L_V.js";import"./inputfield-BC7zgX_R.js";import"./modal-HJj3mAfe.js";import"./moment-C5S46NFB.js";import"./restock-section-D_YQRJ30.js";import"./serial-number-item-thunk-CvEpC5qY.js";import"./serial-number-item-service-DPAaeI_D.js";import"./PlusIcon-B5ODDhFm.js";import"./CheckBadgeIcon-DGGO_YxS.js";import"./button-EC-XD30i.js";function S(){r.useEffect(()=>{s.dispatch(p())},[]);const i=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
