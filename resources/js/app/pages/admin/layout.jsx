import SidebarSection from "../_section/sidebar-section";
import TopbarSection from "../_section/topbar-section";

export default function AdminLayout({children}) {


    return (
        <>
            <div>
                <SidebarSection  />
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
