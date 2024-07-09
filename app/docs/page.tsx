import { MDXRemote } from "next-mdx-remote/rsc"

export default function DocsPage() {
    const docsContent = "# Test"
    return <div className="p-16 prose dark:prose-invert">
        <MDXRemote source={docsContent} />
    </div>
}