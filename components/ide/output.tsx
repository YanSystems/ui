import { Button } from "@nextui-org/button";
import { IoPlay } from "react-icons/io5";

type Props = {
    runCode: () => Promise<void>;
    isLoading: boolean;
}

export default function Output({ runCode, isLoading }: Props) {

    return (
        <Button
            isLoading={isLoading}
            variant="ghost"
            color="success"
            onClick={runCode}
        >
            <IoPlay /> Run
        </Button>
    )
}