import React from "react";
import { notFound } from "next/navigation";

import Module from "@/components/learn/module";
import { CourseURLMapper } from "@/config/courses";

type Params = {
    params: {
        courseName: string
    }
}
export default async function ModulePage({ params }: Params) {
    const { courseName } = params;

    if (!(courseName in CourseURLMapper)) {
        notFound();
    }

    const courseDetails = {
        title: CourseURLMapper[courseName],
        description: "desc",
        creator: "Abyan Majid",
        creatorProfileUrl: "t",
        courseUrl: "/learn/introduction-to-programming",
        likes: 147,
    }

    return (
        <div className="mt-16 div mx-auto max-w-full px-6 flex-grow">
            <div className="flex items-start justify-center gap-4 max-w-8xl">
                <div className="col-span-2">
                    <Module courseDetails={courseDetails} />
                </div>
            </div>
        </div>
    );
}