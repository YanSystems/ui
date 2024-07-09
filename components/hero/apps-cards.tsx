import { HoverEffect } from "../ui/card-hover-effect";
import { apps } from "@/config/apps";

export default function AppsCards() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={apps} />
        </div>
    );
}
