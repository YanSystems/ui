import React from "react";
import { Divider } from "@nextui-org/react";

interface Props {
    title: string;
    children?: React.ReactNode;
}

export const SidebarMenu = ({ title, children }: Props) => {
    return (
        <div className="flex gap-2 flex-col">
            <span className="text-lg font-bold ">{title}</span>
            <Divider className="mb-2" />
            {children}
        </div>
    );
};