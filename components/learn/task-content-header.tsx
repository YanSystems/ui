"use client"

import { useState } from "react"
import { Button } from "@nextui-org/button"

export default function TaskContentHeader() {
    const [taskComplete, setTaskComplete] = useState(false)
    return <div className="mb-6 grid grid-cols-2">
        <div>
            <Button className="mr-1">Modules</Button>
            <Button className="mr-1" variant="ghost">Previous</Button>
            <Button className="mr-1" variant="ghost">Next</Button>
        </div>
        <div className="justify-end text-right">
            <Button
                className="mr-1"
                variant={taskComplete ? "solid" : "bordered"}
                color={taskComplete ? "success" : "default"}
                onClick={() => setTaskComplete(!taskComplete)}
            >
                {taskComplete ? "Completed" : "Mark as Complete"}
            </Button>
        </div>
    </div>
}