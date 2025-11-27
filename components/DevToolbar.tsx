"use client";

import { useDevToolbar } from "@/contexts/DevToolbarContext";

export default function DevToolbar() {
  // Only render in development
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return <DevToolbarContent />;
}

function DevToolbarContent() {
  const { dataSource, toggleDataSource, mockFile, setMockFile, isOpen, toggleOpen } =
    useDevToolbar();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden min-w-[280px]">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
            <span className="text-xs font-medium text-gray-600">
              Dev Tools
            </span>
            <button
              onClick={toggleOpen}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Minimize"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
              >
                <path d="M4 8h8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Data Source Toggle */}
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-gray-700">Data Source</span>
              <button
                onClick={toggleDataSource}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  dataSource === "mock"
                    ? "bg-green-100 text-green-700 hover:bg-green-200"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                {dataSource === "mock" ? "Mock Data" : "Real API"}
              </button>
            </div>

            {/* Mock File Selector - only show when using mock data */}
            {dataSource === "mock" && (
              <div className="flex items-center justify-between gap-3 pt-2 border-t border-gray-100">
                <span className="text-sm text-gray-700">Mock File</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setMockFile("past")}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                      mockFile === "past"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Past
                  </button>
                  <button
                    onClick={() => setMockFile("future")}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                      mockFile === "future"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Future
                  </button>
                </div>
              </div>
            )}

            {/* Status text */}
            <div className="text-xs text-gray-500">
              {dataSource === "mock"
                ? `Using ${mockFile === "future" ? "future (Dec 2025)" : "past (May 2025)"} mock data`
                : "Fetching from WNBA API"}
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleOpen}
          className="bg-white rounded-full shadow-lg border border-gray-200 p-3 hover:shadow-xl transition-shadow"
          aria-label="Open dev tools"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            className="text-gray-600"
          >
            <path
              d="M6 9l4 4 4-4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
