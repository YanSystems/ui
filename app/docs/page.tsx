import { MDXRemote } from "next-mdx-remote/rsc";

export default async function DocsPage() {
  const docsContent = "# Test";
  const mdxContent = await MDXRemote({ source: docsContent });
  return <div className="p-16 prose dark:prose-invert">{mdxContent}</div>;
}

