import "@/app/globals.css";

// import Header from "./Header";
// import Footer from "./Footer";

export default async function MainLayout({ children }: never) {
  return (
    <div className="flex flex-col">
      {/* <Header /> */}
      <div className="bg-brand-ash w-full min-h-screen">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
