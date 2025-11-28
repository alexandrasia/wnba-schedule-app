import React from "react";
import "./globals.css";
import { DevToolbarProvider } from "@/contexts/DevToolbarContext";
import { SelectedGamesProvider } from "@/contexts/SelectedGamesContext";
import DevToolbar from "@/components/DevToolbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SelectedGamesProvider>
          <DevToolbarProvider>
            {children}
            <DevToolbar />
          </DevToolbarProvider>
        </SelectedGamesProvider>
      </body>
    </html>
  );
}
