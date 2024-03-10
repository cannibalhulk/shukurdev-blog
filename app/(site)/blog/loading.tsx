import {CircularProgress} from "@nextui-org/react";

export default function Loading(){
    return (
        <main className="min-h-screen w-full flex justify-center items-center">
            <CircularProgress classNames={{
                track:"bg-[#33e]"
            }} size="lg" aria-label="Loading..." />
        </main>
    )
}