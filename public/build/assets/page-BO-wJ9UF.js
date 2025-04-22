import{r as i,s as m,j as t}from"./app-CrnNVmyU.js";import s from"./layout-D5KUcTJu.js";import n from"./inventory-table-section-C9kUYfcj.js";import p from"./add-item-section-DE_YRjln.js";import{g as l}from"./item-thunk-CCjEE5zP.js";import{F as a}from"./PrinterIcon-CLKP6CRa.js";import"./custodian-sidebar-section copy-qK56YEA7.js";import"./XMarkIcon-hDHrQwjh.js";import"./FolderIcon-BY8cTMq-.js";import"./ClipboardDocumentListIcon-E3pPMy6Q.js";import"./dialog-Co9YlO6x.js";import"./portal-CwveYH7m.js";import"./topbar-section-CFTygXKy.js";import"./app-thunk-glCjbGKM.js";import"./notification-section-KLCcwZU1.js";import"./RightOutlined-BZKDTdYd.js";import"./AntdIcon-jlCH_JYE.js";import"./index-8kaxMhEI.js";import"./useId-BKzT_iXt.js";import"./useZIndex-DgUKtVcm.js";import"./ContextIsolator-BDB7FEA7.js";import"./UnstableContext-Bl9nYEbg.js";import"./PurePanel-Ds_wxG4Y.js";import"./BellIcon-B3tKT0ie.js";import"./MagnifyingGlassIcon-DtE460QA.js";import"./item-detail-section-5u5nuK3d.js";import"./inputfield-BAHkQIaM.js";import"./modal-CzIMEHMz.js";import"./moment-C5S46NFB.js";import"./restock-section-BxXwVS3L.js";import"./serial-number-item-thunk-CJPviuxs.js";import"./serial-number-item-service-C1UTXbP0.js";import"./PlusIcon-UJ72wolj.js";import"./CheckBadgeIcon-RBzbsERg.js";import"./button-nCyMKVTJ.js";function K(){i.useEffect(()=>{m.dispatch(l())},[]);const r=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
          <html>
            <head>
              <title>Report</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th, td { padding: 10px; text-align: left; border: 1px solid #000; }
                th { background-color: #f4f4f4; }
              </style>
            </head>
            <body>
              <h2>Report</h2>
              ${o.outerHTML} <!-- This ensures the full table is copied -->
            </body>
          </html>
        `),e.document.close(),e.print()};return t.jsx("div",{children:t.jsx(s,{children:t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"sm:flex sm:items-center",children:[t.jsxs("div",{className:"sm:flex-auto",children:[t.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Inventory"}),t.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the items in the inventory."})]}),t.jsxs("div",{className:" flex gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:[t.jsx("button",{onClick:r,className:"inline-flex items-center px-2 h-10 text-white bg-gray-600 rounded-md hover:bg-blue-700",children:t.jsx(a,{className:"h-5 w-5"})}),t.jsx(p,{})]})]}),t.jsx(n,{})]})})})}export{K as default};
