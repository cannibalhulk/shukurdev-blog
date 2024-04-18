"use client";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
import { usePathname } from "next/navigation";

function LinkedinShare({ desc }: { desc: string }) {
  const path = usePathname();
  return (
    <LinkedinShareButton summary={desc} url={process.env.APP_URL! + path}>
      <LinkedinIcon round={true} size={40} />
    </LinkedinShareButton>
  );
}

export default LinkedinShare;
