import CustodianSidebarSection from "../_section/custodian-sidebar-section copy";
import SidebarSection from "../_section/sidebar-section";
import TopbarSection from "../_section/topbar-section";

export default function InventoryCustodianLayout({ children }) {

    return (
        <>
            <div className="bg-slate-200 h-screen">
                <div>
                    <CustodianSidebarSection />
                </div>
                <div className="lg:pl-72">
                    <TopbarSection />

                    <main className="py-10">
                        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                    </main>
                </div>
            </div>
        </>
    );
}
