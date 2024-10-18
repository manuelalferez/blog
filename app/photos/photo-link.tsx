"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function PhotoLink({
  photo,
  index,
}: {
  photo: string;
  index: number;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [photo]);

  return (
    <Link
      href={`${photo.split(".")[0]}`}
      className="rounded-md overflow-hidden"
    >
      {isLoading && <Skeleton className="w-[200px] h-[200px]" />}
      <Image
        src={photo}
        alt={`Photo ${index + 1}`}
        width={500}
        height={500}
        className={`object-cover w-full h-full p-2 bg-white hover:bg-slate-100 border border-slate-200 rounded-md shadow-md dark:bg-slate-800 dark:border-slate-700 flex ${
          isLoading ? "hidden" : "block"
        }`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </Link>
  );
}
