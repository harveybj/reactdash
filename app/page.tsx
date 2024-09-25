"use client";
import Dashboard from "./dashboard/page";
import Header from "./components/Header/page";
import SideMenu from "./components/SideMenu/page";
import { useSession } from "next-auth/react";
import Login from "./components/Login/page";
export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <main>
        <Header />
        {session && (
          <>
            <SideMenu />
            <Dashboard />
          </>
        )}
        {!session && <Login />}
      </main>
    </div>
  );
}
