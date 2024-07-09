import { Button } from "@nextui-org/button";
import { useState } from "react";
import { HeartIcon } from "../ui/icons";

export default function SideButtons() {
    const [userLiked, setUserLiked] = useState(false);
    const [likes, setLikes] = useState(147);
    return <div className="justify-end text-right">
        <Button
            onClick={() => {
                setUserLiked(!userLiked)
                setLikes(userLiked ? likes - 1 : likes + 1)
            }}
            color={userLiked ? "danger" : "default"}
            variant={userLiked ? "solid" : "ghost"}
            aria-label="Like"
        >
            <span className="text-lg">{likes}</span><HeartIcon size={20} />
        </Button>
        <Button className="text-lg ml-2" color="primary">
            Enroll
        </Button>
    </div>
}