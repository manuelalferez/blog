import { allPosts } from "@/.contentlayer/generated";
import PostsByYear from "@/components/posts-by-year";
import CustomLink from "@/components/ui/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <p className="mt-0 text-slate-700 dark:text-slate-200">
        Hi, this is my little corner on the Internet. I'm Manuel, Front-End
        Engineer based in Spain, passionate about event organization, previously
        Lead Organizer{" "}
        <CustomLink href="https://www.meetup.com/es-ES/gdg-jaen/">
          @GDGJaen
        </CustomLink>
        . I love hiking. Open source contributor.
      </p>

      <h2>Blog</h2>
      <PostsByYear posts={allPosts} />
    </div>
  );
}
