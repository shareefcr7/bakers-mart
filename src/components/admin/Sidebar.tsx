
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  Layers, 
  LogOut,
  Store
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh(); // Refresh to clear any cached state
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const navItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Products', href: '/admin/products', icon: Package },
    { name: 'Categories', href: '/admin/categories', icon: Layers },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 h-screen fixed left-0 top-0 flex flex-col z-50">
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
        <Store className="w-6 h-6 text-red-600" />
        <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
          Bakery Admin
        </span>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 font-medium' 
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              <item.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                isActive ? 'text-red-600 dark:text-red-400' : 'text-zinc-400 dark:text-zinc-500'
              }`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
         <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-red-50 dark:hover:bg-red-900/10 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
      </div>
    </aside>
  );
}
