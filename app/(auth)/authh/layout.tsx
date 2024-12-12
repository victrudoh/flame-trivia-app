import "@/app/globals.css";

// export default async function AuthLayout({ children }: any) {
export default async function MainLayout({ children }: any) {
  return (
    <div className="gradient-fx flex flex-col min-h-screen max-w-screen-sm mx-auto">
      <div className="flex-grow w-full">{children}</div>
    </div>
  );
}
