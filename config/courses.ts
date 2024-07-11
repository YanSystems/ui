import { randomUUID } from "crypto";

type CourseMap = {
    [key: string]: string;
};

export const availableCourses = [
    "introduction-to-programming"
]

export const CourseURLMapper: CourseMap = {
    "introduction-to-programming": "Introduction to Programming",
}

export const Courses = [
    {
        courseUrl: "introduction-to-programming",
        title: "Introduction to Programming",
        description: "Learn fundamental programming constructs, problem-solving, and object-oriented design in Python.",
        creator: "Abyan Majid",
        creatorProfileUrl: "https://github.com/abyanmajid",
        modules: [
            {
                uuid: "",
                title: "The Interpreter, Variables, and Data Types",
                tasks: [
                    {
                        uuid: "",
                        task: "Task 1",
                        markdownId: "",
                    }
                ]
            },
            {
                uuid: "",
                title: "Title name",
                tasks: [
                    {
                        uuid: "",
                        task: "Task 1",
                        markdownId: "",
                    }
                ]
            },
        ]
    }
]