import{r as i,s,j as t}from"./app-tMUN1HKo.js";import n from"./layout-Dro3BU7k.js";import m from"./inventory-table-section-BVttbwpr.js";import l from"./add-item-section-BY-jyZ3h.js";import{g as a}from"./item-thunk-B7LsWaHa.js";import{F as p}from"./PrinterIcon-Bgon9j7e.js";import"./custodian-sidebar-section copy-BkMot0jx.js";import"./XMarkIcon-CU70bYuu.js";import"./FolderIcon-DeHiNZUi.js";import"./ClipboardDocumentListIcon-DB64RLDC.js";import"./dialog-RWA457d8.js";import"./portal-BnAkOFGT.js";import"./topbar-section-_HkXbh7I.js";import"./app-thunk-BLenFN13.js";import"./MagnifyingGlassIcon-D4hgTGet.js";import"./item-detail-section-DymapWuX.js";import"./inputfield-DfL1JWTy.js";import"./modal-C8H5BO8t.js";import"./moment-C5S46NFB.js";import"./restock-section-BOepM7Iy.js";import"./serial-number-item-thunk-BTIm0gRH.js";import"./serial-number-item-service-D2GIN4as.js";import"./PlusIcon-CWZF99zy.js";import"./CheckBadgeIcon-D-pbFuUx.js";import"./button-BVp1Hjae.js";function H(){i.useEffect(()=>{s.dispatch(a())},[]);const r=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
