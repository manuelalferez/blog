import { metaData, PhotoMetaData } from "@/content/photos/metadata";
import Image from "next/image";
import Link from "next/link";

async function getPhotos() {
  const fs = require("fs").promises;
  const path = require("path");

  const photoDir = path.join(process.cwd(), "public/photos");
  const files = await fs.readdir(photoDir);

  return files
    .filter((file: string) => file.toLowerCase().endsWith(".jpg"))
    .map((file: string) => `/photos/${file}`);
}

function sortPhotosByDate(
  photos: string[],
  metadata: { [key: string]: PhotoMetaData }
) {
  const filenames = photos.map((photo) => photo.split("/").pop() || "");

  filenames.sort((a, b) => {
    const dateA = new Date(metadata[a]?.date || "");
    const dateB = new Date(metadata[b]?.date || "");
    return dateB.getTime() - dateA.getTime();
  });

  return filenames.map((filename) => `/photos/${filename}`);
}

export default async function Page() {
  const photos = await getPhotos();
  const sortedPhotos = sortPhotosByDate(photos, metaData);

  return (
    <div className="grid grid-cols-3 gap-4">
      {sortedPhotos.map((photo: string, index: number) => (
        <Link key={index} href={`${photo.split(".")[0]}`}>
          <Image
            src={photo}
            alt={`Photo ${index + 1}`}
            width={500}
            height={500}
            className="object-cover w-full h-full rounded-md"
          />
        </Link>
      ))}
    </div>
  );
}
