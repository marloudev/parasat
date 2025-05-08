import{r as e,s as m,j as t}from"./app-59A4OiMn.js";import s from"./layout-BT5xhaiZ.js";import p from"./inventory-table-section-BmWVWTtJ.js";import n from"./add-item-section-DXzAPv1Y.js";import{g as l}from"./item-thunk-CqJu0RBY.js";import{F as a}from"./PrinterIcon-C2U9TSd1.js";import"./sidebar-section-DN4aEgoC.js";import"./XMarkIcon-BoEzmM0d.js";import"./HomeIcon-OR0uG1Pi.js";import"./UserGroupIcon-BogM5Tee.js";import"./UsersIcon-DQdqx2GM.js";import"./FolderIcon-BSNqO_WQ.js";import"./ClipboardDocumentListIcon-BA6QjsPM.js";import"./dialog-BhTje3F_.js";import"./portal-jCCE95Dp.js";import"./topbar-section-J2x6rpQu.js";import"./app-thunk-BywjzQIa.js";import"./notification-section-CHeV24CM.js";import"./LeftOutlined-Df7HmZGF.js";import"./AntdIcon-ChYTRmnh.js";import"./index-dqxGoXe0.js";import"./useId-BY7RRZsf.js";import"./useZIndex-B34FJ_NF.js";import"./context-IoX1pXoG.js";import"./asyncToGenerator-qv0E7mvu.js";import"./PurePanel-BS_OsSQJ.js";import"./index-B5Yl-aGu.js";import"./ContextIsolator-CkO0obDK.js";import"./zoom-clwRm-y_.js";import"./Overflow-BWWsdhVs.js";import"./button-DqtS1SEa.js";import"./UnstableContext-CDnba3gm.js";import"./BellIcon-BAmRUzvy.js";import"./MagnifyingGlassIcon-C1IzyIMC.js";import"./item-detail-section-Ctk-1BMb.js";import"./inputfield-C--3VyrO.js";import"./modal-BUJJtY0_.js";import"./moment-C5S46NFB.js";import"./restock-section-2UqnnhBb.js";import"./serial-number-item-thunk-BJuXmA7F.js";import"./serial-number-item-service-DqakcW0C.js";import"./PlusIcon-DTG2G9Bz.js";import"./CheckBadgeIcon-CQT5AidW.js";import"./button-Ce9QDokc.js";function ot(){e.useEffect(()=>{m.dispatch(l())},[]);const r=()=>{const i=document.getElementById("report-table");if(!i){console.error("Table content not found.");return}const o=window.open("","","height=600,width=800");o.document.write(`
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
