import "@/app/globals.css";
import MobileNav from "@/components/mobileNav/page";

export default async function MainLayout({ children }: never) {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-brand-main">{children}</div>
      <MobileNav />
    </div>
  );
}
