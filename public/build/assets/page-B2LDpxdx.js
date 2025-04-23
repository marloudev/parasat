import{r as i,s as m,j as t}from"./app-BkqLmpyb.js";import s from"./layout-DsIPrnEv.js";import n from"./inventory-table-section-c252hcgS.js";import p from"./add-item-section-Cmo9CWtH.js";import{g as l}from"./item-thunk-BRfJZoPo.js";import{F as a}from"./PrinterIcon-N1d9D3Lk.js";import"./custodian-sidebar-section copy-Dkj7LvCt.js";import"./XMarkIcon-DkskUOnR.js";import"./FolderIcon-o2YTv9uZ.js";import"./ClipboardDocumentListIcon-0yYMbCyZ.js";import"./dialog-BEQMaxDX.js";import"./portal-Bmp6Cxop.js";import"./topbar-section-C8yd9lpt.js";import"./app-thunk-DdoZJn5H.js";import"./notification-section-Bi8h8K7X.js";import"./RightOutlined-Dm14pgpq.js";import"./AntdIcon-D6Bh8nuW.js";import"./index-jYF1THBx.js";import"./useId-Czr2Q_8W.js";import"./useZIndex-EDs8pH6d.js";import"./ContextIsolator-CsigKFm0.js";import"./UnstableContext-FJgMJlPZ.js";import"./PurePanel-YucRY-Jb.js";import"./BellIcon-CemjT_7X.js";import"./MagnifyingGlassIcon-svnfWLGO.js";import"./item-detail-section-BJgDO0xo.js";import"./inputfield-CcMaY1y-.js";import"./modal-GGcBaMok.js";import"./moment-C5S46NFB.js";import"./restock-section-DJwNuWoR.js";import"./serial-number-item-thunk-CgCoLtkP.js";import"./serial-number-item-service-BvMinRM_.js";import"./PlusIcon-CZ_zQlGb.js";import"./CheckBadgeIcon-CXKlsOt2.js";import"./button-BOWi1ift.js";function K(){i.useEffect(()=>{m.dispatch(l())},[]);const r=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
