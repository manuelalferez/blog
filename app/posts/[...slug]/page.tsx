import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

import { formatDistanceToNow } from "date-fns";

function getRelativeTime(date: Date | string): string {
  const timeDifference: string = formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });

  const [number, unit] = timeDifference.split(" ") as [string, string];

  const num = parseInt(number, 10);

  if (unit.startsWith("second")) {
    return "just now";
  } else if (unit.startsWith("minute")) {
    return `${num} minute${num > 1 ? "s" : ""} ago`;
  } else if (unit.startsWith("hour")) {
    return `${num} hour${num > 1 ? "s" : ""} ago`;
  } else if (unit.startsWith("day")) {
    return `${num} day${num > 1 ? "s" : ""} ago`;
  } else if (unit.startsWith("month")) {
    return `${num} month${num > 1 ? "s" : ""} ago`;
  } else if (unit.startsWith("year")) {
    return `${num} year${num > 1 ? "s" : ""} ago`;
  }

  return timeDifference;
}

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {getRelativeTime(post.date!)}
      </p>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  );
}
