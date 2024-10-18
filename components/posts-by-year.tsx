import React from "react";
import Link from "next/link";
import { Post } from "@/.contentlayer/generated";

export interface PostsByYearProps {
  posts: Post[];
}

export const groupPostsByYear = (posts: Post[]): Record<string, Post[]> => {
  return posts.reduce((groups: Record<string, Post[]>, post: Post) => {
    const year = new Date(post.date!).getFullYear().toString();
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(post);
    return groups;
  }, {});
};
const PostsByYear: React.FC<PostsByYearProps> = ({ posts }) => {
  const groupedPosts = groupPostsByYear(posts);

  return (
    <div>
      {Object.keys(groupedPosts)
        .sort()
        .reverse()
        .map((year) => (
          <div key={year} className="mb-6 mt-10">
            {groupedPosts[year].map((post, index) => (
              <article
                key={post._id}
                className={`p-1 border-t hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer ${
                  index === 0 ? "" : "pl-20"
                }`}
              >
                <Link
                  href={post.slug}
                  className="no-underline flex items-center dark:text-slate-200"
                >
                  {index === 0 && (
                    <div className="flex-shrink-0 w-14 mr-5">
                      <span className="block text-slate-500 text-sm font-mono dark:text-slate-200">
                        {year}
                      </span>
                    </div>
                  )}
                  <div className="flex-grow">
                    <span className="block text-slate-800 font-normal dark:text-slate-200">
                      {post.title}
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ))}
    </div>
  );
};

export default PostsByYear;
