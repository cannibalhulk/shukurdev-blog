"use client";
import { TwitterShareButton, XIcon } from "react-share";
import { usePathname } from "next/navigation";

function TwitterShare() {
  const path = usePathname();
  return (
    <TwitterShareButton hashtags={['nextjs', "react", "trend", "blog"]} url={process.env.APP_URL! + path}><XIcon size={40} round={true}/></TwitterShareButton>
  );
}

export default TwitterShare;
