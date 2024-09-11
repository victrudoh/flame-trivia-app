import "@/app/globals.css";

export default async function MainLayout({ children }: never) {
  return (
    <div className="flex flex-col">
      <div className="bg-brand-ash w-full min-h-screen">{children}</div>
    </div>
  );
}
