import{r,s,j as t}from"./app-LljaV6RL.js";import n from"./layout-D0oJ1LLY.js";import m from"./inventory-table-section-Dc3mZ9qx.js";import l from"./add-item-section-D_uFJ8nW.js";import{g as p}from"./item-thunk-Macd1pX2.js";import{F as a}from"./PrinterIcon-BMalYU58.js";import"./sidebar-section-CtC6IID4.js";import"./XMarkIcon-yhs3yUS9.js";import"./HomeIcon-DU_mU007.js";import"./UserGroupIcon-Cmqd8L1C.js";import"./UsersIcon-BgvrmPq3.js";import"./FolderIcon-BlYcjQ6m.js";import"./ClipboardDocumentListIcon-CJsfuFOM.js";import"./dialog-CqgjJa2d.js";import"./portal-o8cF3Yu5.js";import"./topbar-section-D5fTpDXH.js";import"./app-thunk-DAErknl3.js";import"./MagnifyingGlassIcon-C3Gd-_Bb.js";import"./item-detail-section-CW4tmCHY.js";import"./inputfield-DwbweKyn.js";import"./modal-BOBH11ip.js";import"./moment-C5S46NFB.js";import"./restock-section-DqyOVu_3.js";import"./serial-number-item-thunk-BZ1G32Se.js";import"./serial-number-item-service-V7KwNdui.js";import"./PlusIcon-BmFSdcI3.js";import"./CheckBadgeIcon-CCGFtaPY.js";import"./button-DD8Y9u5P.js";function S(){r.useEffect(()=>{s.dispatch(p())},[]);const i=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
