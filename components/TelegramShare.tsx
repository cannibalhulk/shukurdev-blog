"use client";
import { TelegramShareButton, TelegramIcon } from "react-share";
import { usePathname } from "next/navigation";

function TelegramShare({ title }: { title: string }) {
  const path = usePathname();
  return (
    <TelegramShareButton url={process.env.APP_URL! + path} title={title}>
      <TelegramIcon size={40} round={true} />
    </TelegramShareButton>
  );
}

export default TelegramShare;
