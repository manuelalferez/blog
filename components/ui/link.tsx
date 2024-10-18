import React from "react";
import Link from "next/link";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function CustomLink({
  href,
  children,
  className = "",
}: CustomLinkProps) {
  const defaultClasses = "underline";

  return (
    <Link href={href} className={`${defaultClasses} ${className}`}>
      {children}
    </Link>
  );
}
