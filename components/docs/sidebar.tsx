import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "./docs-layout-context";
import { usePathname } from "next/navigation";

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
                    abyan.dev/docs
                </div>
                <div className="flex flex-col justify-between h-full">
                    <div className={Sidebar.Body()}>
                        <SidebarMenu title="Main Menu">
                            <SidebarItem
                                isActive={pathname === "/accounts"}
                                title="Accounts"
                                href="accounts"
                            />
                            <SidebarItem
                                isActive={pathname === "/payments"}
                                title="Payments"
                            />
                            <SidebarItem
                                isActive={pathname === "/customers"}
                                title="Customers"
                            />
                            <SidebarItem
                                isActive={pathname === "/products"}
                                title="Products"
                            />
                            <SidebarItem
                                isActive={pathname === "/reports"}
                                title="Reports"
                            />
                        </SidebarMenu>

                        <SidebarMenu title="General">
                            <SidebarItem
                                isActive={pathname === "/developers"}
                                title="Developers"
                            />
                            <SidebarItem
                                isActive={pathname === "/view"}
                                title="View Test Data"
                            />
                            <SidebarItem
                                isActive={pathname === "/settings"}
                                title="Settings"
                            />
                        </SidebarMenu>

                        <SidebarMenu title="Updates">
                            <SidebarItem
                                isActive={pathname === "/changelog"}
                                title="Changelog"
                            />
                        </SidebarMenu>
                    </div>
                </div>
            </div>
        </aside>
    );
};