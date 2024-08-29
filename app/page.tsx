import { allPosts } from "@/.contentlayer/generated";
import PostsByYear from "@/components/posts-by-year";

export default function Home() {
  return (
    <div className="py-6 prose dark:prose-invert">
      <p className="mt-0 text-slate-700 dark:text-slate-200">
        Hi! This is my tiny corner of the internet. You&#39;ll find anything
        that catches my interest, from tech to philosophy. Don&#39;t have big
        expectations; I&#39;m sharing what truly excites me
      </p>

      <PostsByYear posts={allPosts} />
    </div>
  );
}
