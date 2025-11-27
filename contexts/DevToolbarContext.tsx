"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type DataSource = "mock" | "real";
type MockFile = "past" | "future";

interface DevToolbarContextType {
  dataSource: DataSource;
  toggleDataSource: () => void;
  mockFile: MockFile;
  setMockFile: (file: MockFile) => void;
  isOpen: boolean;
  toggleOpen: () => void;
}

const DevToolbarContext = createContext<DevToolbarContextType | undefined>(
  undefined,
);

export function DevToolbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [dataSource, setDataSource] = useState<DataSource>("real");
  const [mockFile, setMockFileState] = useState<MockFile>("future");
  const [isOpen, setIsOpen] = useState(true);

  // Read cookies on mount
  useEffect(() => {
    const cookies = document.cookie.split(";");

    // Read data source cookie
    const dataSourceCookie = cookies.find((c) =>
      c.trim().startsWith("wnba-dev-data-source="),
    );
    if (dataSourceCookie) {
      const value = dataSourceCookie.split("=")[1] as DataSource;
      setDataSource(value);
    }

    // Read mock file cookie
    const mockFileCookie = cookies.find((c) =>
      c.trim().startsWith("wnba-dev-mock-file="),
    );
    if (mockFileCookie) {
      const value = mockFileCookie.split("=")[1] as MockFile;
      setMockFileState(value);
    }
  }, []);

  const toggleDataSource = () => {
    const newSource: DataSource = dataSource === "mock" ? "real" : "mock";
    setDataSource(newSource);

    // Set cookie
    document.cookie = `wnba-dev-data-source=${newSource}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;

    // Refresh the page to re-fetch data
    router.refresh();
  };

  const setMockFile = (file: MockFile) => {
    setMockFileState(file);

    // Set cookie
    document.cookie = `wnba-dev-mock-file=${file}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;

    // Refresh the page to re-fetch data
    router.refresh();
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DevToolbarContext.Provider
      value={{
        dataSource,
        toggleDataSource,
        mockFile,
        setMockFile,
        isOpen,
        toggleOpen,
      }}
    >
      {children}
    </DevToolbarContext.Provider>
  );
}

export function useDevToolbar() {
  const context = useContext(DevToolbarContext);
  if (context === undefined) {
    throw new Error("useDevToolbar must be used within a DevToolbarProvider");
  }
  return context;
}
