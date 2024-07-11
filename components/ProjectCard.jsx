import Image from "next/image";
import Link from "next/link";

import discord from "@/public/work/discord.svg";
import codecraft from "@/public/work/codecraft.jpg";
import twitter from "@/public/twitter.svg";
import portfolio from "@/public/work/portfolio.jpg";
import resume from "@/public/work/resume.svg";
import redeye from "@/public/work/red-eye.jpg";
import recruitapp from "@/public/work/recruitapp.svg";
import notion from "@/public/work/notion.jpg";
import airplane from "@/public/work/airplane.svg";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: discord,
      title: "SyncSpot",
      description: "Communication app with features like chatting, video streaming and audio streaming through channels",
      link: "https://aizen.netlify.app/",
      target: "_self",
    },
    {
      id: 2,
      image: codecraft,
      title: "CodeCraft",
      description: "A Online Platform for running your code just as you do in local environment",
      link: "https://kamui-kanban.netlify.app/",
      target: "_self",
    },
    {
      id: 3,
      image: twitter,
      title: "Jitter",
      description: "Twitter clone with all twitter funcionalities",
      link: "https://pokedex-polly.netlify.app/",
      target: "_self",
    },
    {
      id: 4,
      image: resume,
      title: "YourResume",
      description: "Resume maker application with dynamic configuration",
      link: "https://evogymm.netlify.app/",
      target: "_blank",
    },
    {
      id: 5,
      image: airplane,
      title: "Airline Management",
      description: "Airline Management Backend with Microservices",
      link: "https://nikestore-polly.netlify.app/",
      target: "_blank",
    },
    {
      id: 6,
      image: recruitapp,
      title: "RecuitApp",
      description: "Employee Recruitment App prototype",
      link: "https://potion-write.vercel.app/",
      target: "_blank",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                    ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                    : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-lg drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;