import "@/app/globals.css";

export default async function MainLayout({ children }: never) {
  return (
    <div className="gradient-fx flex flex-col min-h-screen max-w-screen-md mx-auto">
      <div className="flex-grow w-full">{children}</div>
    </div>
  );
}
