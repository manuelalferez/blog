import Link from "next/link";
import { SocialLinks } from "./social-links";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col mt-36">
      <hr className="my-4" />
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-500 flex gap-1 items-center">
          © {currentYear} Made with{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          by Manuel Alférez
        </p>
        <p className="text-sm text-gray-500 pb-4">
          Still here? Go enjoy your day! Oh, btw, check out some of my{" "}
          <Link href="/photos" className="underline">
            photos
          </Link>
        </p>
        <SocialLinks />
      </div>
    </div>
  );
}
