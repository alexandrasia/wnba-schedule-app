import React from "react";
import "./globals.css";
import { DevToolbarProvider } from "@/contexts/DevToolbarContext";
import DevToolbar from "@/components/DevToolbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DevToolbarProvider>
          {children}
          <DevToolbar />
        </DevToolbarProvider>
      </body>
    </html>
  );
}
