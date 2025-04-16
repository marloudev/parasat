import{r as i,s,j as t}from"./app-CRrYj2hz.js";import n from"./layout-C6WPBL5c.js";import m from"./inventory-table-section-GvpyJgFJ.js";import l from"./add-item-section-B9HcJp4I.js";import{g as a}from"./item-thunk-Cgv-T3wh.js";import{F as p}from"./PrinterIcon-CCKvi7Kw.js";import"./custodian-sidebar-section copy-ZAfAMRgN.js";import"./XMarkIcon-CTU6-WBE.js";import"./FolderIcon-CgKBG5bY.js";import"./ClipboardDocumentListIcon-IsVxplMz.js";import"./dialog-nHCze39Q.js";import"./portal-CzP1zBcO.js";import"./topbar-section-BRWT3eS3.js";import"./app-thunk-gSz-4FS_.js";import"./MagnifyingGlassIcon-BQfVWqzO.js";import"./item-detail-section-lPc7EWK3.js";import"./inputfield-CD4vPMem.js";import"./modal-BqgxlrmT.js";import"./moment-C5S46NFB.js";import"./restock-section-DJN9IP4U.js";import"./serial-number-item-thunk-CksiH2C7.js";import"./serial-number-item-service-B7hxHqK9.js";import"./PlusIcon-Bkyh3Yi-.js";import"./CheckBadgeIcon-DWyQsuz6.js";import"./button-No8AWJTz.js";function H(){i.useEffect(()=>{s.dispatch(a())},[]);const r=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
