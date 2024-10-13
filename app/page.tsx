import { allPosts } from "@/.contentlayer/generated";
import PostsByYear from "@/components/posts-by-year";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <p className="mt-0 text-slate-700 dark:text-slate-200">
        Hi, this is my little corner on the Internet. I write about whatever
        interests me, be it coding, hobbies or thoughts about life. Do not have
        high expectations.
      </p>

      <PostsByYear posts={allPosts} />
    </div>
  );
}
