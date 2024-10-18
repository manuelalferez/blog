// components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between gap-12">
        <Link href="/" className="flex items-center hover:cursor-pointer">
          <Image
            src={"https://i.imgur.com/hJieCmM.jpeg"}
            alt="Manuel profile picture"
            width={40}
            height={40}
            className="rounded-full m-2 ml-0"
          />
          <span className="text-base font-medium">Manuel</span>
        </Link>
        <nav className="ml-auto text-sm font-medium space-x-6 flex items-center">
          <ModeToggle />
          <Link href="/about" className="no-underline hover:underline">
            About
          </Link>
          <Link href="/portfolio" className="no-underline hover:underline">
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
