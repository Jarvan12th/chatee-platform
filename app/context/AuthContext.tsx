"use client";

import { SessionProvider } from "next-auth/react";

interface AuthContextProps {
  children: React.ReactNode;
}

// Manage and access user authentication states throughout the application
export default function AuthContext({ children }: AuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
