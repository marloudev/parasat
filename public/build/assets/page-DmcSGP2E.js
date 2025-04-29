import{r as e,s as m,j as t}from"./app-BnnyjQDk.js";import s from"./layout-D8ZU86s5.js";import p from"./inventory-table-section-Cs7wCrx1.js";import n from"./add-item-section-Df7uKM07.js";import{g as l}from"./item-thunk-CILaBCH6.js";import{F as a}from"./PrinterIcon-DiZKq1fY.js";import"./sidebar-section-COQLT9AM.js";import"./XMarkIcon-C9Aunlm7.js";import"./HomeIcon-CPoU5sp5.js";import"./UserGroupIcon-C_SL3sE7.js";import"./UsersIcon-BWVX_DL9.js";import"./FolderIcon-CMSQsrsc.js";import"./ClipboardDocumentListIcon-BlSzSY0C.js";import"./dialog-DGgbXQo3.js";import"./portal-gc47BLjy.js";import"./topbar-section-BjEcL6Bl.js";import"./app-thunk-C_uBPrTr.js";import"./notification-section-GIl3l14R.js";import"./LeftOutlined-DDVvoykz.js";import"./AntdIcon-B1Ll9DyW.js";import"./index-CC1Cf4Aq.js";import"./useId-tTaDpT3m.js";import"./useZIndex-BAoOZL47.js";import"./context-DtfQ-UWR.js";import"./asyncToGenerator-CPhWFk8e.js";import"./PurePanel-phU8pnS-.js";import"./index-BsSo2Mb2.js";import"./ContextIsolator-Dp89Hjdk.js";import"./zoom-MkstPgzc.js";import"./Overflow-CicLuxZx.js";import"./button-Bjc9Om4D.js";import"./UnstableContext-BnqtY7fl.js";import"./BellIcon-D3l4P3KT.js";import"./MagnifyingGlassIcon-B1ykouS7.js";import"./item-detail-section-DmF5UJJf.js";import"./inputfield-BG1Rf4sE.js";import"./modal-BnXM99FS.js";import"./moment-C5S46NFB.js";import"./restock-section-psG3fcdM.js";import"./serial-number-item-thunk-zn4hh1j4.js";import"./serial-number-item-service-DDUuxcjE.js";import"./PlusIcon-DYSgBIdK.js";import"./CheckBadgeIcon-BoXh5neH.js";import"./button-gDHvYb_B.js";function ot(){e.useEffect(()=>{m.dispatch(l())},[]);const r=()=>{const i=document.getElementById("report-table");if(!i){console.error("Table content not found.");return}const o=window.open("","","height=600,width=800");o.document.write(`
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
              ${i.outerHTML} <!-- Copy the table content -->
            </body>
          </html>
        `),o.document.close(),o.print()};return t.jsx("div",{children:t.jsx(s,{children:t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"sm:flex sm:items-center",children:[t.jsxs("div",{className:"sm:flex-auto",children:[t.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Inventory"}),t.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the items in the inventory."})]}),t.jsxs("div",{className:" flex gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:[t.jsx("button",{onClick:r,className:"inline-flex items-center px-2 h-10 text-white bg-gray-600 rounded-md hover:bg-blue-700",children:t.jsx(a,{className:"h-5 w-5"})}),t.jsx(n,{})]})]}),t.jsx(p,{})]})})})}export{ot as default};
