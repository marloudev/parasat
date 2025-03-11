import{r as i,s,j as t}from"./app-DPxeDnrB.js";import m from"./layout-HU3eWAgx.js";import n from"./inventory-table-section-Dh9MVQ58.js";import l from"./add-item-section-DltBzIC5.js";import{g as a}from"./item-thunk-Cr2ipdIu.js";import{F as p}from"./PrinterIcon-CgRLm604.js";import"./custodian-sidebar-section copy-1YJBLkqS.js";import"./XMarkIcon-BkWbcnSc.js";import"./Cog6ToothIcon-Cowfa5iC.js";import"./FolderIcon-C94DmXdy.js";import"./ClipboardDocumentListIcon-uW66wZa1.js";import"./dialog-ppADpPKC.js";import"./portal-Bln-F2uw.js";import"./topbar-section-DL8it6vN.js";import"./app-thunk-Dk7EcTO6.js";import"./MagnifyingGlassIcon-BtzboxbT.js";import"./item-detail-section-DFoFpWgj.js";import"./inputfield-DHtAvMea.js";import"./modal-CfpcGUI-.js";import"./moment-C5S46NFB.js";import"./restock-section-B8Je1oEU.js";import"./serial-number-item-thunk-BRnra7Xb.js";import"./serial-number-item-service-DINXlutP.js";import"./PlusIcon-DtUR6tX1.js";import"./CheckBadgeIcon-BEyGuMD6.js";import"./button-CD3Mngxd.js";function M(){i.useEffect(()=>{s.dispatch(a())},[]);const r=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
        `),e.document.close(),e.print()};return t.jsx("div",{children:t.jsx(m,{children:t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"sm:flex sm:items-center",children:[t.jsxs("div",{className:"sm:flex-auto",children:[t.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Inventory"}),t.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the items in the inventory."})]}),t.jsxs("div",{className:" flex gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:[t.jsx("button",{onClick:r,className:"inline-flex items-center px-2 h-10 text-white bg-gray-600 rounded-md hover:bg-blue-700",children:t.jsx(p,{className:"h-5 w-5"})}),t.jsx(l,{})]})]}),t.jsx(n,{})]})})})}export{M as default};
