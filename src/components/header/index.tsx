"use client"
import Link from "next/link";
import { FiLoader, FiLock, FiLogOut, FiUser } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

export function Header() {
  const { status, data } = useSession();


  async function handleLogin() {
    await signIn('google');
  }

  async function handleLogout() {
    await signOut();
  }

  return (
    <header className="w-full flex items-center px-2 py-4 bg-zinc-900 h-20 shadow-sm">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
          <h1 className="font-bold text-white text-2xl pl-1 hover:tracking-widest duration-300">
            <span className="text-blue-500">G3</span> Controle</h1>
        </Link>

        {status === "loading" && (
          <button className="animate-spin">
            <FiLoader size={26} color="#ECEBEC" />
          </button>
        )}
        {status === "unauthenticated" && (
          <button onClick={handleLogin}>
            <FiLock size={26} color="#ECEBEC" />
          </button>
        )}

        {status === "authenticated" && (
          <div className="flex items-baseline gap-4">
            <Link href="/dashboard">
              <FiUser size={26} color="#ECEBEC" />
            </Link>

            <button onClick={handleLogout}>
              <FiLogOut size={26} color="#ff2313" />
            </button>
          </div>
        )}

      </div>
    </header>
  )
}