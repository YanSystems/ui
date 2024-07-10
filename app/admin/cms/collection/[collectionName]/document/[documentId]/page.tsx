import React from "react";
import MarkdownEditor from "@/components/admin/cms/md-editor";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/react";
import { IoIosSave } from "react-icons/io";

export default function CMSDocumentPage() {
  return (
    <div className="p-16">
      <div className="grid grid-cols-2">
        <div>
          <h1 className={title({ size: "sm" })}>Document Name</h1>
          <h2 className={subtitle({ class: "mb-8 text-zinc-400" })}>
            Collection Name
          </h2>
        </div>
        <div className="flex justify-end">
          <Button color="primary" className="flex items-center">
            <IoIosSave size="16" />
            Save
          </Button>
        </div>
      </div>
      <MarkdownEditor initialValue="" />
    </div>
  );
}

