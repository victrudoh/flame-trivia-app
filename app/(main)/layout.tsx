import "@/app/globals.css";
import MobileNav from "@/components/mobileNav/page";

export default async function MainLayout({ children }: never) {
  return (
    <div className="flex flex-col">
      <div className="bg-brand-ash w-full">{children}</div>
      <MobileNav />
    </div>
  );
}
