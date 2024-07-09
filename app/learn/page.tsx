import { title, subtitle } from "@/components/primitives";
import CourseCard from "@/components/learn/course-card";

export default function LearnPage() {
    return <div className="container mx-auto max-w-full px-6 flex-grow">
        <div className="flex flex-col justify-center items-center space-y-4">
            <h1 className={title({ size: "sm" })}>Available Courses</h1>
            <h2 className={subtitle({ class: "mt-4 text-center" })}>Dive in, get hands-on, and experience rapid growth.</h2>
            <div>
                <CourseCard
                    title="Introduction to Programming"
                    description="Learn fundamental programming constructs, problem-solving, and object-oriented design in python."
                    modules={26}
                    courseUrl="/learn/introduction-to-programming"
                />
            </div>
        </div>
    </div >
}