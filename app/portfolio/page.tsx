"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  website: string;
  code: string;
  stars?: number;
  forks?: number;
}

const projects: Project[] = [
  {
    title: "Flowinance",
    description:
      "Flowinance simplifies financial management by providing an intuitive platform to visualize and track your budget. It enables transaction categorization through AI (ChatGPT). Users can manage multiple currencies with a single click, export their data and soon receive a weekly summary of their transactions in Telegram. Built on Supabase for data management and logins, and Resend for sending emails to users. All transactions are end-to-end encrypted. It is an Open Source project in which +20 developers have participated.",
    technologies: ["Next.js", "Supabase", "Resend", "TailwindCSS"],
    website: "https://flowinance.vercel.app/",
    code: "https://github.com/manuelalferez/flowinance",
  },
  {
    title: "Chatcus",
    description:
      "A real-time chat application where users can create rooms and chat with each other. This project participated in Hacktoberfest with a team of +6 developers.",
    technologies: ["React.js", "Socket.IO", "Google Cloud"],
    website: "https://chatcus.vercel.app/#/",
    code: "https://github.com/manuelalferez/chatcus",
  },
  {
    title: "Stuja",
    description:
      "Stuja is a collaborative platform for Computer Engineering students at the University of Jaén to share notes and code. My mission with the project is to make academic content available to all students and to foster a supportive community. The project is organized in a simple way, with clear directories for documentation, templates and resources. It is currently inactive (after finishing university no one has taken it over). Anyway, the project serves as proof of documentation taken to the extreme (I'm proud of how organized everything was).",
    technologies: ["GitHub", "Markdown"],
    website: "https://stuja.vercel.app/",
    code: "https://github.com/Stuja/stuja",
  },
];

const fetchRepoData = async (owner: string, repo: string) => {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return {
    stars: data.stargazers_count,
    forks: data.forks_count,
  };
};

function getUsernameAndProjectName(
  url: string
): { username: string; projectName: string } | null {
  const urlPattern = /https:\/\/github\.com\/([^\/]+)\/([^\/]+)/;
  const match = url.match(urlPattern);

  if (match) {
    return {
      username: match[1],
      projectName: match[2],
    };
  }

  return null;
}

export default function Page() {
  const [projectData, setProjectData] = useState<Project[]>(projects);

  useEffect(() => {
    const fetchData = async () => {
      const updatedProjects = await Promise.all(
        projectData.map(async (project) => {
          const { username, projectName } =
            getUsernameAndProjectName(project.code) || {};

          if (!username || !projectName) {
            return project;
          }

          const { stars, forks } = await fetchRepoData(username, projectName);
          return { ...project, stars, forks };
        })
      );
      setProjectData(updatedProjects);
    };

    fetchData();
  }, []);

  return (
    <div className="prose dark:prose-invert">
      <h1 className="mb-2">Portfolio</h1>
      <hr className="my-4" />
      <p className="text-slate-700 dark:text-slate-200 prose">
        A mix of the most outstanding projects I have worked on
      </p>
      <div className="grid gap-2">
        {projectData.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="m-0">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="m-0">{project.description}</p>
              <p className="text-sm text-muted-foreground">
                Built with: {project.technologies.join(", ")}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex space-x-2">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:cursor-pointer no-underline inline-flex items-center justify-center px-2 py-2 text-sm font-semibold text-black bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Website
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:cursor-pointer gap-1 no-underline inline-flex items-center justify-center px-2 py-2 text-sm font-semibold text-black bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    />
                  </svg>
                  Code
                </a>
              </div>
              <div>
                {project.stars !== undefined && project.forks !== undefined && (
                  <div className="text-sm text-muted-foreground flex gap-2 md:gap-4 flex-col md:flex-row">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path
                          fill="currentColor"
                          d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm3.15.45l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15zm0-5.025"
                        />
                      </svg>
                      Stars: {project.stars}
                    </span>
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 12v4m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4M8 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 0v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8m0 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
                        />
                      </svg>
                      Forks: {project.forks}
                    </span>
                  </div>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
