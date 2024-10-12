import "@/app/globals.css";
import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function MainLayout({ children }: never) {
  return (
    <div className="flex h-screen w-full overflow-x-hidden bg-gray-100 text-brand-dark">
      {/* Left */}
      <AdminSidebar />
      {/* Right */}
      <div className="w-full flex flex-col">
        <AdminNavbar />
        <div className="h-screen overflow-y-scroll w-full p-4">{children}</div>
      </div>
    </div>
  );
}
