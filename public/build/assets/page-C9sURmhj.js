import{r as i,s,j as t}from"./app-DWnh22hT.js";import n from"./layout-o3MHTuGR.js";import m from"./inventory-table-section-BZNSF6Iw.js";import l from"./add-item-section-B5Igo0VT.js";import{g as a}from"./item-thunk-DNwMzTOB.js";import{F as p}from"./PrinterIcon--wk6q1nh.js";import"./custodian-sidebar-section copy-BN9Zm7fY.js";import"./XMarkIcon-BNiAG7eE.js";import"./FolderIcon-Dn9fD230.js";import"./ClipboardDocumentListIcon-0nDybuOw.js";import"./dialog-CRVWFhyT.js";import"./portal-D75GgklT.js";import"./topbar-section-C7-Eic5g.js";import"./app-thunk-C3GOrCuX.js";import"./MagnifyingGlassIcon-DNeWtrt6.js";import"./item-detail-section-BadY5RC7.js";import"./inputfield-BNSpLMt0.js";import"./modal-BCh7HJZA.js";import"./moment-C5S46NFB.js";import"./restock-section-Dur3YwkQ.js";import"./serial-number-item-thunk-Qf1XZvc0.js";import"./serial-number-item-service-ZUC7HKpA.js";import"./PlusIcon-Co4BC24z.js";import"./CheckBadgeIcon-x1q3L7Yh.js";import"./button-DxQAZYLs.js";function H(){i.useEffect(()=>{s.dispatch(a())},[]);const r=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
