"use client";

import React from "react";
import { useLockedBody } from "../hooks/use-body-lock";
import { SidebarWrapper } from "./sidebar";
import { SidebarContext } from "./docs-layout-context";
import { Navbar } from "../layout/navbar";

interface Props {
  children: React.ReactNode;
}

export const DocsLayout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}>
      <div className="flex">
        <SidebarWrapper />
        <div className="flex flex-col w-full">
          <div className="border-b border-zinc-900">
            <Navbar />
          </div>
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </div>
    </SidebarContext.Provider>
  );
};