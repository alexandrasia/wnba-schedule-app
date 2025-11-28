"use client";

import { useDevToolbar } from "@/contexts/DevToolbarContext";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DevToolbar() {
  // Only render in development
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return <DevToolbarContent />;
}

function DevToolbarContent() {
  const {
    dataSource,
    toggleDataSource,
    mockFile,
    setMockFile,
    isOpen,
    toggleOpen,
  } = useDevToolbar();

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: 9999,
      }}
    >
      {isOpen ? (
        <div
          style={{
            backgroundColor: "rgba(28, 28, 30, 0.95)",
            backdropFilter: "blur(12px)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.32), 0 0 0 0.5px rgba(255, 255, 255, 0.05)",
            padding: "12px",
            minWidth: "240px",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "rgba(255, 255, 255, 0.6)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Dev Tools
            </span>
            <button
              onClick={toggleOpen}
              style={{
                background: "transparent",
                border: "none",
                color: "rgba(255, 255, 255, 0.5)",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <X size={14} />
            </button>
          </div>

          {/* Data Source Toggle */}
          <div style={{ marginBottom: "8px" }}>
            <div
              style={{
                fontSize: "11px",
                color: "rgba(255, 255, 255, 0.5)",
                marginBottom: "6px",
                fontWeight: 500,
              }}
            >
              Data Source
            </div>
            <div
              style={{
                display: "inline-flex",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderRadius: "8px",
                padding: "2px",
              }}
            >
              <button
                onClick={toggleDataSource}
                style={{
                  padding: "5px 12px",
                  fontSize: "12px",
                  fontWeight: 500,
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  backgroundColor:
                    dataSource === "real"
                      ? "rgba(255, 255, 255, 0.15)"
                      : "transparent",
                  color:
                    dataSource === "real"
                      ? "rgba(255, 255, 255, 0.95)"
                      : "rgba(255, 255, 255, 0.6)",
                }}
              >
                Real API
              </button>
              <button
                onClick={toggleDataSource}
                style={{
                  padding: "5px 12px",
                  fontSize: "12px",
                  fontWeight: 500,
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  backgroundColor:
                    dataSource === "mock"
                      ? "rgba(138, 99, 210, 0.9)"
                      : "transparent",
                  color:
                    dataSource === "mock"
                      ? "rgba(255, 255, 255, 0.98)"
                      : "rgba(255, 255, 255, 0.6)",
                }}
              >
                Mock Data
              </button>
            </div>
          </div>

          {/* Mock File Selector */}
          {dataSource === "mock" && (
            <div style={{ marginTop: "12px" }}>
              <div
                style={{
                  fontSize: "11px",
                  color: "rgba(255, 255, 255, 0.5)",
                  marginBottom: "6px",
                  fontWeight: 500,
                }}
              >
                Period
              </div>
              <div
                style={{
                  display: "inline-flex",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderRadius: "8px",
                  padding: "2px",
                  width: "100%",
                }}
              >
                <button
                  onClick={() => setMockFile("past")}
                  style={{
                    flex: 1,
                    padding: "5px 12px",
                    fontSize: "12px",
                    fontWeight: 500,
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    backgroundColor:
                      mockFile === "past"
                        ? "rgba(255, 255, 255, 0.15)"
                        : "transparent",
                    color:
                      mockFile === "past"
                        ? "rgba(255, 255, 255, 0.95)"
                        : "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  Past
                </button>
                <button
                  onClick={() => setMockFile("future")}
                  style={{
                    flex: 1,
                    padding: "5px 12px",
                    fontSize: "12px",
                    fontWeight: 500,
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    backgroundColor:
                      mockFile === "future"
                        ? "rgba(255, 255, 255, 0.15)"
                        : "transparent",
                    color:
                      mockFile === "future"
                        ? "rgba(255, 255, 255, 0.95)"
                        : "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  Future
                </button>
              </div>
            </div>
          )}

          {/* Status */}
          <div
            style={{
              marginTop: "12px",
              padding: "6px 10px",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              borderRadius: "6px",
              fontSize: "11px",
              color: "rgba(255, 255, 255, 0.5)",
              textAlign: "center",
            }}
          >
            {dataSource === "mock"
              ? `${mockFile === "future" ? "Dec 2025" : "May 2025"} data`
              : "Live WNBA API"}
          </div>
        </div>
      ) : (
        <button
          onClick={toggleOpen}
          style={{
            backgroundColor: "rgba(28, 28, 30, 0.95)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            padding: "8px 14px",
            fontSize: "11px",
            fontWeight: 600,
            color: "rgba(255, 255, 255, 0.7)",
            cursor: "pointer",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.24)",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(28, 28, 30, 1)";
            e.currentTarget.style.color = "rgba(255, 255, 255, 0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(28, 28, 30, 0.95)";
            e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
          }}
        >
          Dev
        </button>
      )}
    </div>
  );
}
