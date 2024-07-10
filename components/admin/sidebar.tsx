import React from "react";
import { Sidebar } from "./sidebar.styles";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "./admin-layout-context";
import { usePathname } from "next/navigation";
import { Divider } from "@nextui-org/react";
import { siteConfig } from "@/config/site";

export const SidebarWrapper = () => {
    const pathname = usePathname();
    const { collapsed, setCollapsed } = useSidebarContext();

    return (
        <aside className="h-screen z-[20] sticky top-0">
            {collapsed ? (
                <div className={Sidebar.Overlay()} onClick={setCollapsed} />
            ) : null}
            <div
                className={Sidebar({
                    collapsed: collapsed,
                })}
            >
                <div className={Sidebar.Header()}>
                    Admin Panel
                </div>
                <p className="px-2 text-zinc-400">Yan Systems v{siteConfig.version}</p>
                <div className="flex flex-col justify-between h-full">
                    <div className={Sidebar.Body()}>
                        <SidebarMenu title="Content Management">
                            <SidebarItem
                                title="Collection One"
                                href="#"
                            />
                            <SidebarItem
                                title="Collection Two"
                                href="#"
                            />
                        </SidebarMenu>
                        <SidebarMenu title="Course Management">
                            <SidebarItem
                                title="Course 1"
                                href="#"
                            />
                            <SidebarItem
                                title="Course 2"
                                href="#"
                            />
                        </SidebarMenu>
                    </div>
                </div>
            </div>
        </aside >
    );
};