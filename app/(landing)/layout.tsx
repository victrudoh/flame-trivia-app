import "@/app/globals.css";

export default async function MainLayout({ children }: never) {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-md mx-auto bg-brand-main">
      <div className="flex-grow w-full">{children}</div>
    </div>
  );
}
