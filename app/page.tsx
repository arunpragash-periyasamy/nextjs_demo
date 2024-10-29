import Image from "next/image";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header/>
      <div className="w-full flex">
        <div className="w-44 fixed mt-12 h-full z-10">
          <Sidebar />
        </div>
        <div className="ml-44 w-[calc(100%-11rem)]">
          <main className="m-2 mt-16 p-2 rounded bg-slate-50 h-[calc(100vh-85px)] overflow-y-auto no-scrollbar">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}



