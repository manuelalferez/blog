import { metaData } from "@/content/photos/metadata";
import Image from "next/image";

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
      <Image
        src={photo}
        alt={photoId}
        width={500}
        height={500}
        className="object-cover w-full"
      />
      <div className="mt-4">
        <p className="text-base font-medium text-gray-800">
          {metaData[photoId + extension].description}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {formatDate(metaData[photoId + extension].date)}
        </p>
      </div>
    </div>
  );
}
