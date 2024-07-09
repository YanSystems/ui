import React from "react";
import { notFound } from "next/navigation";

import Course from "@/components/learn/course";
import { CourseURLMapper } from "@/config/courses";

type Params = {
    params: {
        courseName: string;
    };
};
export default async function CoursePage({ params }: Params) {
    const { courseName } = params;

    if (!(courseName in CourseURLMapper)) {
        notFound();
    }

    const spacedCourseName = CourseURLMapper[courseName];

    const courseDetails = {
        title: spacedCourseName,
        description: "desc",
        creator: "Abyan Majid",
        creatorProfileUrl: "/abyan-150x150.png",
        modulesURL: `/courses/${courseName}`,
        likes: 13,
    };

    return (
        <div className="container mx-auto max-w-full px-6 flex-grow">
            <div className="flex items-start justify-center gap-4 max-w-8xl">
                <div className="col-span-2">
                    <Course courseDetails={courseDetails} />
                </div>
            </div>
        </div>
    );
}