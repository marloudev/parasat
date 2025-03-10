import SidebarSection from "../_section/sidebar-section";
import TechTeamSidebarSection from "../_section/tech-team-sidebar-section";
import TopbarSection from "../_section/topbar-section";

export default function TechTeamLayout({ children }) {

  return (
    <>
      <div className="bg-slate-200 h-screen">
        <div>
          <TechTeamSidebarSection />
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
