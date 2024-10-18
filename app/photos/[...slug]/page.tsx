import { metaData } from "@/content/photos/metadata";
import Image from "next/image";
import Link from "next/link";

const extension = ".jpg";

function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}

async function getPhoto(photoId: string) {
  const fs = require("fs").promises;
  const path = require("path");

  const photoDir = path.join(process.cwd(), "public/photos");
  const files = await fs.readdir(photoDir);

  return files
    .filter((file: string) => file.toLowerCase().endsWith(extension))
    .filter((file: string) => file.includes(photoId))
    .map((file: string) => `/photos/${file}`)[0];
}

interface PhotoProps {
  params: {
    slug: string[];
  };
}

export default async function Page({ params }: PhotoProps) {
  const photoId = params.slug[0];
  const photo = await getPhoto(photoId);
  console.log(photoId + extension);
  return (
    <div>
      <Link
        href="../photos"
        className="no-underline hover:underline inline-block text-sm font-medium"
      >
        <span className="flex gap-1 py-4 items-center">
          <svg
            className="w-5 h-5 text-slate-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
          View All Gallery
        </span>
      </Link>

      <Image
        src={photo}
        alt={photoId}
        width={500}
        height={500}
        className="object-cover w-full rounded-md"
      />
      <div className="mt-4">
        <p className="text-base font-medium text-slate-700 dark:text-slate-200">
          {metaData[photoId + extension].description}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
          {formatDate(metaData[photoId + extension].date)}
        </p>
      </div>
    </div>
  );
}
