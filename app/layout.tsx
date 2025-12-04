import React from "react";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { DevToolbarProvider } from "@/contexts/DevToolbarContext";
import { SelectedGamesProvider } from "@/contexts/SelectedGamesContext";
import DevToolbar from "@/components/DevToolbar";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          backgroundColor: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
          minHeight: "100vh",
          transition: "background-color 200ms, color 200ms",
        }}
      >
        <ThemeProvider>
          <SelectedGamesProvider>
            <DevToolbarProvider>
              {children}
              <DevToolbar />
              <ThemeToggle />
            </DevToolbarProvider>
          </SelectedGamesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
