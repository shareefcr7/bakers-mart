
"use client";

import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans">
      {!isLoginPage && (
        <>
          {/* Mobile Header */}
          <div className="md:hidden flex items-center p-4 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-30">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <span className="ml-2 font-bold text-lg text-zinc-900 dark:text-zinc-100">
              Bakery Admin
            </span>
          </div>

          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)} 
          />
        </>
      )}
      
      <main
        className={`transition-all duration-300 ${
          !isLoginPage ? "md:ml-64 ml-0 p-4 md:p-8" : "w-full h-screen flex items-center justify-center p-4"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}
