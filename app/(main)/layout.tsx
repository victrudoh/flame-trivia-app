import "@/app/globals.css";
import MobileNav from "@/components/mobileNav/page";

export default async function MainLayout({ children }: never) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow w-full bg-brand-main pb-[40px]">{children}</div>
      <MobileNav />
    </div>
  );
}
