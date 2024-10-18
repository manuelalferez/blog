"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { experiences, Project, projects } from "@/content/portfolio/portfolio";

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
      <h1 className="mb-2 flex items-center justify-between gap-2">
        Experience{" "}
        <a
          href="https://mozilla.github.io/pdf.js/web/viewer.html?file=https%3A%2F%2Fraw.githubusercontent.com%2Fmanuelalferez%2Fresume%2Fmaster%2Fresume.pdf"
          className="hover:cursor-pointer inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-black bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
            className="w-5 h-5"
          >
            <path
              fill="currentColor"
              d="m210.43 41.22l-130.25-23A14 14 0 0 0 64 29.58l-29.75 169a14 14 0 0 0 11.36 16.22l130.25 23a13.6 13.6 0 0 0 2.46.22a14 14 0 0 0 13.68-11.6l29.75-169a14 14 0 0 0-11.32-16.2M210 55.36l-29.75 169a2 2 0 0 1-.82 1.3a2 2 0 0 1-1.49.33L47.65 203a2 2 0 0 1-1.65-2.36l29.75-169a2 2 0 0 1 .82-1.3A2.06 2.06 0 0 1 78.1 30l130.25 23a2 2 0 0 1 1.65 2.36m-23.89 20.15a6 6 0 0 1-5.9 5a6 6 0 0 1-1.05-.09l-83-14.66a6 6 0 1 1 2.09-11.81l83 14.65a6 6 0 0 1 4.86 6.91M180.56 107a6 6 0 0 1-5.9 5a5.5 5.5 0 0 1-1-.1l-83-14.65a6 6 0 0 1 2.09-11.82l83 14.66a6 6 0 0 1 4.81 6.91m-47 24.19a6 6 0 0 1-5.91 4.95a6.4 6.4 0 0 1-1.05-.09l-41.49-7.33a6 6 0 1 1 2.09-11.81l41.49 7.32a6 6 0 0 1 4.84 6.99Z"
            />
          </svg>{" "}
        </a>
      </h1>
      <hr className="my-4" />
      <div className="prose">
        {experiences.map((experience, index) => {
          return (
            <div key={index} className="my-8">
              <div className="flex items-center gap-1">
                <h4 className="m-0 dark:text-slate-200">
                  {experience.company},
                </h4>
                <span className="text-sm dark:text-slate-200">
                  {experience.position}
                </span>
              </div>
              <p className="my-2 dark:text-slate-200">
                {experience.description}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <h2 className="mb-4">Projects</h2>
        <p className="dark:text-slate-200 prose">
          A mix of the most outstanding projects I have worked on
        </p>
        <div className="grid gap-2">
          {projectData.map((project, index) => (
            <Card key={index} className="dark:bg-slate-950">
              <CardHeader>
                <CardTitle className="m-0">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="m-0 text-slate-700 dark:text-slate-200">
                  {project.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  Built with: {project.technologies.join(", ")}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between text-slate-700">
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
                  {project.stars !== undefined &&
                    project.forks !== undefined && (
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
                              strokeWidth="2"
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
    </div>
  );
}
