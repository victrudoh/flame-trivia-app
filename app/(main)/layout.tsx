import "@/app/globals.css";
import MobileNav from "@/components/mobileNav/page";

export default async function MainLayout({ children }: never) {
  return (
    <div className="gradient-fx flex flex-col min-h-screen max-w-screen-md mx-auto">
      <div className="flex-grow w-full pb-[40px]">{children}</div>
      <MobileNav />
    </div>
  );
}
