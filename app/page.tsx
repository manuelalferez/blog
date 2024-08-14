import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

const parseDate = (dateString: string | undefined): Date => {
  return dateString ? new Date(dateString) : new Date(0); // Fallback to epoch if undefined
};

export default function Home() {
  return (
    <div className="py-6 prose dark:prose-invert">
      {allPosts
        .sort(
          (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
        )
        .map((post, index) => (
          <article
            key={post._id}
            className={`border p-2 hover:bg-gray-100 hover:cursor-pointer border-collapse
        ${index === 0 ? "rounded-t-md border-b-0" : ""} 
        ${index === allPosts.length - 1 ? "rounded-b-md" : ""} 
        ${index !== 0 && index !== allPosts.length - 1 ? "border-b-0" : ""}`}
          >
            <Link href={post.slug} className="no-underline flex gap-12">
              <span className="tabular-nums font-mono whitespace-nowrap">
                {new Date(post.date as string).toISOString().split("T")[0]}
              </span>
              <span className="text-lg font-normal">{post.title}</span>
            </Link>
          </article>
        ))}
    </div>
  );
}
