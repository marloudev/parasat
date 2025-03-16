import{r as i,s,j as t}from"./app-CdR7ZR8r.js";import n from"./layout-FwH9jW_h.js";import m from"./inventory-table-section-BO0UXG05.js";import l from"./add-item-section-nKtEnVxq.js";import{g as a}from"./item-thunk-B9iPVt1A.js";import{F as p}from"./PrinterIcon-CRobg4Vx.js";import"./custodian-sidebar-section copy-CtTlwaiP.js";import"./XMarkIcon-D7Xi3JZG.js";import"./FolderIcon-j-sTe71-.js";import"./ClipboardDocumentListIcon-C8kZZi_h.js";import"./dialog-BJjRBMqs.js";import"./portal-TqA-BmXV.js";import"./topbar-section-BEQiFBZc.js";import"./app-thunk-BHfNTC0e.js";import"./MagnifyingGlassIcon-BNuMUMp3.js";import"./item-detail-section-DF2JFOhw.js";import"./inputfield-DJWXf0vm.js";import"./modal-Cmh7Aqq_.js";import"./moment-C5S46NFB.js";import"./restock-section-CzrEpYP8.js";import"./serial-number-item-thunk-D4_GCD55.js";import"./serial-number-item-service-DpH7oFF0.js";import"./PlusIcon-KZFKaPfb.js";import"./CheckBadgeIcon-C3Rranpe.js";import"./button-CwWCcHUI.js";function H(){i.useEffect(()=>{s.dispatch(a())},[]);const r=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
        `),e.document.close(),e.print()};return t.jsx("div",{children:t.jsx(n,{children:t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"sm:flex sm:items-center",children:[t.jsxs("div",{className:"sm:flex-auto",children:[t.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Inventory"}),t.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the items in the inventory."})]}),t.jsxs("div",{className:" flex gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:[t.jsx("button",{onClick:r,className:"inline-flex items-center px-2 h-10 text-white bg-gray-600 rounded-md hover:bg-blue-700",children:t.jsx(p,{className:"h-5 w-5"})}),t.jsx(l,{})]})]}),t.jsx(m,{})]})})})}export{H as default};
