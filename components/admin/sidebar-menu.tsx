import React from "react";
import { Divider, Link } from "@nextui-org/react";

interface Props {
    title: string;
    children?: React.ReactNode;
}

export const SidebarMenu = ({ title, children }: Props) => {
    return (
        <div className="flex gap-2 flex-col">
            <Link href="#">
                <span className="text-secondary text-lg font-bold ">{title}</span>
            </Link>
            <Divider className="mb-2" />
            {children}
        </div>
    );
};