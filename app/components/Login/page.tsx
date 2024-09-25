'use client';
import { Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div>
        <p>Signed in as {session?.user?.email}</p>
        <Button variant="contained" color="error" onClick={() => signOut()}>Sign Out</Button>
      </div>
    );
  }
  return (
    <div>
      <p>Please login to continue</p>
      <Button variant="contained" color="success" onClick={() => signIn()}>Sign in</Button>
    </div>
  );
}
