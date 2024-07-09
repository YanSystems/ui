import React from "react";
import CodeEditor from "@/components/ide/code-editor";
import TaskContent from "@/components/learn/task-content";

export default async function TaskPage() {
    return (
        <div className="grid grid-cols-2 overflow-hidden gap-1 h-screen">
            <div className="bg-neutral-900 p-8 max-h-screen overflow-y-auto">
                <TaskContent />
            </div>
            <div className="bg-neutral-900 p-8">
                <CodeEditor />
            </div>
        </div>
    );
}