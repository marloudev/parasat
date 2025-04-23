import{r,s as m,j as t}from"./app-CAtsUqhW.js";import s from"./layout-i4rYMFIB.js";import n from"./inventory-table-section-Bon_U7ag.js";import p from"./add-item-section-B_mMGIxt.js";import{g as l}from"./item-thunk-DA-qjWJr.js";import{F as a}from"./PrinterIcon-CZoYVAb3.js";import"./sidebar-section-yOttItys.js";import"./XMarkIcon-D3p3shG4.js";import"./HomeIcon-1Zgq_CKA.js";import"./UserGroupIcon-QwMq_fR-.js";import"./UsersIcon-K9S7DFTX.js";import"./FolderIcon-KawUucm3.js";import"./ClipboardDocumentListIcon-Dn8cV98U.js";import"./dialog-cy8U7TlY.js";import"./portal-BBfJssa2.js";import"./topbar-section-CHFSP77R.js";import"./app-thunk-VcjQfob4.js";import"./notification-section-Bm7QE8hY.js";import"./RightOutlined-Beb34xKp.js";import"./AntdIcon-DFQ7Ga68.js";import"./index-CmInDRUE.js";import"./useId-3pwdi6KQ.js";import"./useZIndex-Xw8unYtW.js";import"./ContextIsolator-Dq_mNv6w.js";import"./UnstableContext-C8oNLldZ.js";import"./PurePanel-CSfkfXHn.js";import"./BellIcon-DHrldhcJ.js";import"./MagnifyingGlassIcon-CSaa-9ff.js";import"./item-detail-section-BJxudxFI.js";import"./inputfield-CebdP5Vi.js";import"./modal-CCaJSO9k.js";import"./moment-C5S46NFB.js";import"./restock-section-BK4zdctq.js";import"./serial-number-item-thunk-B7xd2nHT.js";import"./serial-number-item-service-D9KL1mRn.js";import"./PlusIcon-B1MYmBwD.js";import"./CheckBadgeIcon-BdGi7IAH.js";import"./button-B8wnVtGZ.js";function U(){r.useEffect(()=>{m.dispatch(l())},[]);const i=()=>{const e=document.getElementById("report-table");if(!e){console.error("Table content not found.");return}const o=window.open("","","height=600,width=800");o.document.write(`
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
              ${e.outerHTML} <!-- Copy the table content -->
            </body>
          </html>
        `),o.document.close(),o.print()};return t.jsx("div",{children:t.jsx(s,{children:t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"sm:flex sm:items-center",children:[t.jsxs("div",{className:"sm:flex-auto",children:[t.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Inventory"}),t.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the items in the inventory."})]}),t.jsxs("div",{className:" flex gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:[t.jsx("button",{onClick:i,className:"inline-flex items-center px-2 h-10 text-white bg-gray-600 rounded-md hover:bg-blue-700",children:t.jsx(a,{className:"h-5 w-5"})}),t.jsx(p,{})]})]}),t.jsx(n,{})]})})})}export{U as default};
