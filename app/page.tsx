import { allPosts } from "@/.contentlayer/generated";
import PostsByYear from "@/components/posts-by-year";

export default function Home() {
  return (
    <div className="py-6 prose dark:prose-invert">
      <h1 className="mb-2">Blog</h1>

      <p className="mt-0 text-slate-700 dark:text-slate-200">
        Here, I write about anything that catches my interest&mdash;from tech to
        philosophy. Don&#39;t have big expectations; I&#39;m sharing what truly
        excites me
      </p>

      <PostsByYear posts={allPosts} />
    </div>
  );
}
