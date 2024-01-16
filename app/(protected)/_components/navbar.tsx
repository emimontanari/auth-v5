"use client";
import { usePathname } from "next/navigation";
import { UserButton } from "@/components/auth/user-button";
import { MobileSidebar } from "@/components/mobile-sidebar";

export const Navbar = () => {
  
  const pathname = usePathname();

  return (
    <div className="flex items-center p-4 bg-red-500">
    <MobileSidebar />
    <div className="flex w-full justify-end">
      <UserButton />
    </div>
  </div>
  );
};
