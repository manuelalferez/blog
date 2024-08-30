import React from "react";
import IconLink, {
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  UnsplashIcon,
} from "./icons";

interface SocialLinksProps {
  className?: string;
  tight?: boolean;
}

export function SocialLinks({ className, tight }: SocialLinksProps) {
  return (
    <div className={`${className} flex ${tight ? "gap-2" : "gap-4"} `}>
      <IconLink
        href="https://github.com/manuelalferez"
        title="GitHub"
        icon={GitHubIcon}
      />
      <IconLink
        href="https://twitter.com/manuelalferez"
        title="Twitter"
        icon={TwitterIcon}
      />
      <IconLink
        href="https://t.me/manuelalferez"
        title="Telegram"
        icon={TelegramIcon}
      />
      <IconLink
        href="https://www.linkedin.com/in/manuelalferez"
        title="Linkedin"
        icon={LinkedinIcon}
      />
      <IconLink
        href="https://unsplash.com/@manuelalferez"
        title="Unsplash"
        icon={UnsplashIcon}
      />
      <IconLink
        href="https://www.instagram.com/manuelalferez_/"
        title="Instagram"
        icon={InstagramIcon}
      />
    </div>
  );
}
