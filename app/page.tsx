

"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* Navbar */}
      <div className="flex flex-row gap-6 mt-3">
        <Link href="/dashboard">
          <p className="py-2 px-8 rounded-xl cursor-pointer hover:bg-pink-950 text-white">Dashboard</p>
        </Link>
        <Link href="/login">
          <p className="py-2 px-8 rounded-xl cursor-pointer hover:bg-pink-950 text-white">Login</p>
        </Link>
      </div>

      {/* متن وسط صفحه */}
      <div className="h-[80vh] flex items-center justify-center">
        <p className="text-2xl text-pink-400">Main Page</p>
      </div>
    </div>
  );
}
