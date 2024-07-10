"use client";

import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

type Props = {
  initialValue: string;
};

export default function MarkdownEditor({ initialValue }: Props) {
  const [value, setValue] = useState(initialValue);
  return (
    <>
      <div className="container">
        <MDEditor value={value} onChange={(val) => setValue(val as string)} />
      </div>
    </>
  );
}
