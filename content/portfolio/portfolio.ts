export interface Project {
  title: string;
  description: string;
  technologies: string[];
  website: string;
  code: string;
  stars?: number;
  forks?: number;
}

export interface Experience {
  company: string;
  position: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Flowinance",
    description:
      "Flowinance simplifies financial management by providing an intuitive platform to visualize and track your budget. It enables transaction categorization through AI (ChatGPT). Users can manage multiple currencies with a single click, export their data and soon receive a weekly summary of their transactions in Telegram. Built on Supabase for data management and logins, and Resend for sending emails to users. All transactions are end-to-end encrypted. It is an Open Source project in which +20 developers have participated.",
    technologies: ["Next.js", "Supabase", "Resend", "TailwindCSS"],
    website: "https://flowinance.com/",
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

export const experiences: Experience[] = [
  {
    company: "Hubtype",
    position: "Solution Engineer",
    description:
      "At Hubtype, I developed the initial version of an internal plugin for Flow Builder, which has since become a key product for the company. I led several projects, including the appointment confirmation system for a leading provider of monitored security solutions, positively impacting +3 million users by managing the logic to notify them of appointments, allow them to modify appointments and more, all via WhatsApp. My proactive communication and timely deliverables earned me the client's trust and secured future collaborations. In addition, I improved the customer experience of a luxury fashion brand with +1 million customers by integrating order tracking functionalities into their bot, reducing interactions with customer service by over 47%.",
  },
  {
    company: "Ujalearn",
    position: "Full Stack Developer",
    description:
      "At Ujalearn, I managed the integration of +200 Moodle courses into a new application for +900 teachers. I successfully connected the application to the Moodle API, creating a robust backend system that could handle +1,000 data transactions per day, while providing clear documentation for future developments. I also set up the environments needed to deploy the application and configured Prisma for database management, which streamlined our workflows and minimized errors. In addition, I developed a personalized course dashboard that enhanced the user experience by providing intelligent recommendations based on previous completions, thus improving the users' learning journey.",
  },
  {
    company: "Khadra Management Ltd",
    position: "Digital Transformation Consultant",
    description:
      "At Khadra Management Ltd, I transformed the company's workflow by designing and implementing a new database and task management system that improved email processing from 40 to over 160 messages per day. I integrated Outlook with Notion to streamline email management, categorizing tasks and setting alerts for important communications. This integration not only improved productivity, but also reduced errors from 1-2 per week to only 1-2 per month. In addition, I migrated the company's bank transactions and receipts from inefficient spreadsheets to a Notion database, resulting in a substantial reduction in report generation time from 15 minutes to less than 1.5 minutes, improving the company's efficiency.",
  },
  {
    company: "Google Developer Groups",
    position: "Lead Organiser",
    description:
      "I helped the community organize events for over 300 people, managing a budget of +6,000 euros. This involved coordinating relevant speakers, arranging hotel accommodation, hiring catering for all attendees and advertising the events in local newspapers. In addition, I was a speaker at three events focused on Google Cloud, React.js and Open Source with Git and GitHub. Along with this, I managed a team of 8 volunteers to build a community of +1,200 members.",
  },
];
