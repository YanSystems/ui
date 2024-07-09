import NextLink from "next/link";
import React from "react";
import { useSidebarContext } from "./admin-layout-context";
import clsx from "clsx";

interface Props {
    title: string;
    href?: string;
}

export const SidebarItem = ({ title, href = "" }: Props) => {
    const { collapsed, setCollapsed } = useSidebarContext();
    return (
        <NextLink
            href={href}
            className="text-sm hover:text-default-600 text-default-900 active:bg-none max-w-full"
        >
            {title}
        </NextLink>
    );
};