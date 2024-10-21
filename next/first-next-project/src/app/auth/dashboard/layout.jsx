import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="h-screen grid grid-cols-[30vh,1fr]">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
