"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { CssBaseline } from "@mui/material";

export default function ClientProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <SessionProvider session={session}>
      <CssBaseline />
      {children}
    </SessionProvider>
  );
}
