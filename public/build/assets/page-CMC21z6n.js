import{r,s,j as t}from"./app-utBB1GtL.js";import n from"./layout-mY2UaXGl.js";import m from"./inventory-table-section-alf61SK8.js";import l from"./add-item-section-BCZSGnpC.js";import{g as p}from"./item-thunk-DFvUxyYZ.js";import{F as a}from"./PrinterIcon-BY0cU5_p.js";import"./sidebar-section-MrUJxosT.js";import"./XMarkIcon-DYGs2u3o.js";import"./HomeIcon-AW1RbNuA.js";import"./UserGroupIcon-1JWjwIyY.js";import"./UsersIcon-ClPZ_NFQ.js";import"./FolderIcon-CnRb_4vS.js";import"./ClipboardDocumentListIcon-BVNKe1xW.js";import"./dialog-DBz6cMdf.js";import"./portal-D7yQIyBC.js";import"./topbar-section-D_D2hX-u.js";import"./app-thunk-DwADBwOE.js";import"./MagnifyingGlassIcon-BjytByx2.js";import"./item-detail-section-VJzSAX8m.js";import"./inputfield-Dsc1D13K.js";import"./modal-D2aLDRJx.js";import"./moment-C5S46NFB.js";import"./restock-section-DLAZOzlL.js";import"./serial-number-item-thunk-BXIt_Dby.js";import"./serial-number-item-service-eOvrmgoW.js";import"./PlusIcon-B5jKOGTz.js";import"./CheckBadgeIcon-BPfb-qHl.js";import"./button-CdgepwQq.js";function S(){r.useEffect(()=>{s.dispatch(p())},[]);const i=()=>{const o=document.getElementById("report-table");if(!o){console.error("Table content not found.");return}const e=window.open("","","height=600,width=800");e.document.write(`
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
              ${o.outerHTML} <!-- Copy the table content -->
            </body>
          </html>
        `),e.document.close(),e.print()};return t.jsx("div",{children:t.jsx(n,{children:t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[t.jsxs("div",{className:"sm:flex sm:items-center",children:[t.jsxs("div",{className:"sm:flex-auto",children:[t.jsx("h1",{className:"text-base font-semibold text-gray-900",children:"Inventory"}),t.jsx("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the items in the inventory."})]}),t.jsxs("div",{className:" flex gap-4 mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:[t.jsx("button",{onClick:i,className:"inline-flex items-center px-2 h-10 text-white bg-gray-600 rounded-md hover:bg-blue-700",children:t.jsx(a,{className:"h-5 w-5"})}),t.jsx(l,{})]})]}),t.jsx(m,{})]})})})}export{S as default};
