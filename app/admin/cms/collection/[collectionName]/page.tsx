import React from "react";
import { Button, Divider } from "@nextui-org/react";
import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { CreateDocumentModal } from "@/components/admin/cms/create-document-modal";

type Params = {
  params: {
    collectionName: string;
  }
}

export default function CMSCollectionPage({ params }: Params) {
  const { collectionName } = params;

  return (
    <div className="p-16">
      <div className="grid grid-cols-2">
        <h1 className={title({ size: "sm" })}>Collection Name</h1>
        <div className="flex justify-end">
          <CreateDocumentModal collection={collectionName} />
        </div>
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
