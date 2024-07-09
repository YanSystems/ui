import { Avatar } from "@nextui-org/react"
import { Link } from "@nextui-org/link"

type Props = {
    creator: string,
    creatorProfileUrl: string,
}

export default function CourseMetrics({ creator, creatorProfileUrl }: Props) {
    return <>
        <div className="flex items-center gap-4">
            <Avatar isBordered color="primary" src="/abyan-150x150.png" />
            <div className="flex flex-col justify-start text-left">
                <div className="text-neutral-300">
                    Created by <Link href={creatorProfileUrl} className="text-primary">{creator}</Link>
                </div>
                <div className="text-neutral-300">Last updated: 06/07/24</div>
            </div>
        </div>
        <div className="justify-end text-right">
            <div className="text-neutral-300">26 modules</div>
            <div className="text-neutral-300">17 students</div>
        </div>
    </>
}