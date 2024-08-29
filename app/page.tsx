import { allPosts } from "@/.contentlayer/generated";
import PostsByYear from "@/components/posts-by-year";

export default function Home() {
  return (
    <div className="py-6 prose dark:prose-invert">
      <PostsByYear posts={allPosts} />
    </div>
  );
}
