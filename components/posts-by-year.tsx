// PostsByYear.tsx
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
          <div key={year} className="mb-6">
            {/* Posts for the Year */}
            {groupedPosts[year].map((post, index) => (
              <article
                key={post._id}
                className={`p-1 border-t hover:bg-gray-50 cursor-pointer ${
                  index === 0 ? "" : "pl-20"
                }`}
              >
                <Link
                  href={post.slug}
                  className="no-underline flex items-center"
                >
                  {index === 0 && (
                    <div className="flex-shrink-0 w-14 mr-5">
                      <span className="block text-gray-500 text-sm font-mono">
                        {year}
                      </span>
                    </div>
                  )}
                  <div className="flex-grow">
                    <span className="block text-gray-800 font-normal">
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
