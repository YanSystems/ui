import React from "react";
import { Button, Divider } from "@nextui-org/react";
import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";

export default function CMSCollectionPage() {
  return (
    <div className="p-16">
      <div className="flex justify-center">
        <h1 className={title({ size: "sm" })}>Collection Name</h1>
      </div>
      <Divider className="my-4" />
      <div className="space-y-2">
        <Link href="#" className="w-full">
          <Button variant="ghost" className="w-full">Document 1</Button>
        </Link>
        <Link href="#" className="w-full">
          <Button variant="ghost" className="w-full">Document 1</Button>
        </Link>
      </div>
    </div>
  );
}
