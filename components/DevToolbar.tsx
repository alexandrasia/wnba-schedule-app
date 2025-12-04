"use client";

import { useDevToolbar } from "@/contexts/DevToolbarContext";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DevToolbar() {
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
        bottom: "16px",
        right: "16px",
        zIndex: 99999,
      }}
    >
      {isOpen ? (
        <Card className="min-w-[240px] border-2 shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between p-3 pb-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Dev Tools
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleOpen}
              className="h-6 w-6"
            >
              <X className="h-3.5 w-3.5" />
            </Button>
          </CardHeader>

          <CardContent className="space-y-3 p-3 pt-0">
            {/* Data Source Toggle */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">
                Data Source
              </label>
              <div className="inline-flex w-full rounded-lg border border-border bg-muted/50 p-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDataSource}
                  className={cn(
                    "flex-1 h-8 text-xs rounded-md",
                    dataSource === "real" &&
                      "bg-primary text-primary-foreground hover:bg-primary/90",
                  )}
                >
                  Real API
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDataSource}
                  className={cn(
                    "flex-1 h-8 text-xs rounded-md",
                    dataSource === "mock" &&
                      "bg-primary text-primary-foreground hover:bg-primary/90",
                  )}
                >
                  Mock Data
                </Button>
              </div>
            </div>

            {/* Mock File Selector */}
            {dataSource === "mock" && (
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">
                  Period
                </label>
                <div className="inline-flex w-full rounded-lg border border-border bg-muted/50 p-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setMockFile("past")}
                    className={cn(
                      "flex-1 h-8 text-xs rounded-md",
                      mockFile === "past" &&
                        "bg-primary text-primary-foreground hover:bg-primary/90",
                    )}
                  >
                    Past
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setMockFile("future")}
                    className={cn(
                      "flex-1 h-8 text-xs rounded-md",
                      mockFile === "future" &&
                        "bg-primary text-primary-foreground hover:bg-primary/90",
                    )}
                  >
                    Future
                  </Button>
                </div>
              </div>
            )}

            {/* Status Badge */}
            <div className="flex justify-center pt-1">
              <Badge variant="secondary" className="text-xs font-normal">
                {dataSource === "mock"
                  ? `${mockFile === "future" ? "Dec 2025" : "May 2025"} data`
                  : "Live WNBA API"}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={toggleOpen}
          size="sm"
          variant="default"
          className="rounded-full shadow-lg"
        >
          Dev
        </Button>
      )}
    </div>
  );
}
