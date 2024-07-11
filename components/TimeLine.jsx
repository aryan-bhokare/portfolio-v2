import React from "react";

const TimeLine = () => {
  const data = [
    {
      id: 0,
      title: "Google Summer of Code Mentee",
      duration: "May 2024",
      org: "IntelOwl (HoneyNet Project)",
      skills: ["Python", "Django", "Github Actions", "Swagger", "Markdown", "Github Pages"],
      class:
        "bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
    },
    {
      id: 1,
      title: "Linux Foundation Mentee",
      duration: "Mar 2024 - May 2024",
      org: "LitmusChaos",
      skills: ["Golang", "Docker", "Kubernetes", "JavaScript", "React.js", "MongoDB"],
      class:
        "bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
    },
    {
      id: 2,
      title: "Web Development Lead",
      duration: "Aug 2023 - Apr 2024",
      org: "Google Developer Student Clubs",
      skills: ["JavaScript", "React.js", "Node.js", "MongoDB"],
      class:
        "bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
    }
  ];
  return (
    <div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {data.map((item) => (
          <li className="mb-10 ms-6" key={item.id}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}{" "}
              {item.id === 0 && (
                <span className="bg-red-500 text-[#fff] text-sm font-medium me-2 px-2.5 py-0.5 border-sky-100 rounded ms-3">
                  Latest
                </span>
              )}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.duration}
            </time>
            <p>{item.org}</p>
            <div className="flex flex-wrap mt-8">
              {item.skills.map((i, idx) => (
                <span key={idx} className={`${item.class}`}>
                  {i}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimeLine;
