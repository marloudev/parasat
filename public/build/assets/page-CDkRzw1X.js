import{r,s as m,j as t}from"./app-BdYCeRy3.js";import s from"./layout-8QiTv_hi.js";import n from"./inventory-table-section-eF03o3BM.js";import p from"./add-item-section-CC9HwP2o.js";import{g as l}from"./item-thunk-8WeVKSoV.js";import{F as a}from"./PrinterIcon-BphyoGb1.js";import"./sidebar-section-DLATiEE4.js";import"./XMarkIcon-Cw_KaWmE.js";import"./HomeIcon-BFY0cnxZ.js";import"./UserGroupIcon-DwdPxggf.js";import"./UsersIcon-DL5DDLLw.js";import"./FolderIcon-p0p-YVia.js";import"./ClipboardDocumentListIcon-Ctm7vS01.js";import"./dialog-CT8qPWon.js";import"./portal-BRaTHlcm.js";import"./topbar-section-Bv2iwSuH.js";import"./app-thunk-By9jK_Wd.js";import"./notification-section-Bd_828Y9.js";import"./RightOutlined-CIyqs8HJ.js";import"./AntdIcon-TD81VMqc.js";import"./index-GpkgfUJh.js";import"./useId-BzzyfbhV.js";import"./useZIndex-HprYgSeT.js";import"./ContextIsolator-BZG6Fbwn.js";import"./UnstableContext-DcQra4DD.js";import"./PurePanel-B0f9rJm9.js";import"./BellIcon-DCZygFC2.js";import"./MagnifyingGlassIcon-CWWD6Q7g.js";import"./item-detail-section-Cmu2GPZ8.js";import"./inputfield-7YwwF0XG.js";import"./modal-1vOop1KN.js";import"./moment-C5S46NFB.js";import"./restock-section-Dxy8CRb4.js";import"./serial-number-item-thunk-DCGA6F9u.js";import"./serial-number-item-service-DL4C_hS0.js";import"./PlusIcon-Bg3gtaRm.js";import"./CheckBadgeIcon-Bbs8niVA.js";import"./button-CnN78wWO.js";function U(){r.useEffect(()=>{m.dispatch(l())},[]);const i=()=>{const e=document.getElementById("report-table");if(!e){console.error("Table content not found.");return}const o=window.open("","","height=600,width=800");o.document.write(`
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
