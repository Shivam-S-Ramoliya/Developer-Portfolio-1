"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      "C",
      "C++",
      "Python",
      "SQL",
      "Matlab",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      "Git",
      "Github",
      "VS Code",
      "Linux Shell",
      "Figma",
      "pgAdmin",
      "Jupyter Notebook",
      "Cursor",
    ],
  },
  {
    title: "Frameworks",
    skills: ["React.js", "Vite", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    title: "Cloud/Databases",
    skills: [
      "MongoDB",
      "Mongoose ODM",
      "PostgreSQL",
      "SupaBase",
      "Firebase",
      "Redis",
    ],
  },
  {
    title: "Libraries",
    skills: ["Mongoose", "React-Router-Dom", "React Hook Form", "Bootstrap", "Framer Motion"],
  },
  {
    title: "Coursework",
    skills: [
      "Data Structures & Algorithms",
      "Database Management System",
      "Design & Analysis of Algorithm",
      "Object Oriented Programming",
      "Computer Networks",
      "Human-Computer Interaction",
    ],
  },
  {
    title: "Other Technologies",
    skills: [
      "REST API",
      "Agile",
      "Jest",
      "Vercel",
      "Render",
      "Railway",
      "Netlify",
      "Lovable",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Team Collaboration",
      "Leadership",
      "Problem Solving",
      "Communication",
      "Time Management",
    ],
  },
];

export default function Skills() {
  return (
    <section
      className="relative z-20 bg-[#0a0a0a] min-h-screen py-8 px-4 md:px-12 overflow-hidden"
      id="skills"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
              Arsenal
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A comprehensive technology stack spanning languages, frameworks,
            databases, and development tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                backgroundColor: "rgba(59, 130, 246, 0.1)",
              }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-5">
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      borderColor: "rgba(59, 130, 246, 0.5)",
                    }}
                    transition={{ duration: 0.1 }}
                    className="px-3 py-1.5 bg-black/40 rounded-full text-xs text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
