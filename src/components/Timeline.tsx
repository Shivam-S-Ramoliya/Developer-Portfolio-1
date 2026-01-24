"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const EXPERIENCE_DATA = [
  {
    period: "Dec 2024 - Jan 2025",
    position: "Social Work Intern",
    company: "Shri Bolbala Charitable Trust",
    location: "Rajkot, Gujarat, India",
    locationUrl: "https://maps.app.goo.gl/eHyLwyV6PGAd51Si8",
    description:
      "Participated in a humanitarian project in collaboration with an NGO, helping to organize and distribute essential items such as food, clothing, and blankets to families in need across neededs, reaching and supporting over 200+ individuals.",
    technologies: ["Social Work", "Team Collaboration", "Humanitarian Aid"],
    image: "/Bolbala_Trust.jpeg",
  },
];

const EDUCATION_DATA = [
  {
    period: "2023 - Present",
    degree: "B.Tech - Information and Communication Technology",
    institution: "Dhirubhai Ambani University (Formerly DA-IICT)",
    location: "Gandhinagar, Gujarat, India",
    locationUrl: "https://maps.app.goo.gl/wVcUaGkWX3d9eH1r6",
    description:
      "Current coursework includes Data Structures and Algorithms, DBMS, Design and Analysis of Algorithm, OOPs, and Introduction to ICT.",
    gpa: "6.55 CPI",
    image: "/DAU.png",
  },
  {
    period: "2022-2023",
    degree: "12TH (Science, GHSEB)",
    institution: "Purohit Science School",
    location: "Jamnagar, Gujarat, India",
    locationUrl: "https://maps.app.goo.gl/MyoYBGxDRTw9cmC37",
    description:
      "Secured 83.53% and achieved a 99.54 percentile rank in the GHSEB 12th Examination.",
    gpa: "83.53%",
    image: "/Purohit_School.jpeg",
  },
  {
    period: "2020-2021",
    degree: "10TH (GSEB)",
    institution: "Krishna Science School",
    location: "Jamnagar, Gujarat, India",
    locationUrl: "https://maps.app.goo.gl/MFhUZkHQi5GRCAgA9",
    description: "Secured 95.33% in the GSEB 10th Examination.",
    gpa: "95.33%",
    image: "/Krishna_School.jpeg",
  },
];

const RESPONSIBILITY_DATA = [
  {
    period: "Sept 2025 - Nov 2025",
    position: "Core",
    organization: "Concours 2025",
    description:
      "Core member of Team Concours'25, organized the eSports event E-Verse with around 1000 eSports enthusiasts participating.",
    responsibilities: [
      "Led planning and coordination for E-Verse eSports event",
      "Managed participant experience for 1000+ gamers",
    ],
    image: "/Concours.png",
  },
  {
    period: "Nov 2024",
    position: "Coordinator",
    organization: "i.Fest 2024",
    description:
      "Leading Coordinator of e-Sports event named i.Clash in i.Fest 2024 in which about 500 gaming enthusiasts took part.",
    responsibilities: [
      "Oversaw end-to-end operations for i.Clash eSports tournament",
      "Coordinated logistics and engagement for 500+ participants",
    ],
    image: "/ifest.jpeg",
  },
];

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<
    "experience" | "education" | "responsibility"
  >("experience");

  return (
    <section
      className="relative z-20 bg-[#0a0a0a] min-h-screen pt-8 pb-32 px-4 md:px-12 overflow-hidden"
      id="journey"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            From academic excellence to hands-on experience and leadership
            roles. Here's a glimpse into my professional evolution.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-4 flex-wrap mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ duration: 0.1 }}
            onClick={() => setActiveTab("experience")}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === "experience"
                ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50"
                : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
            }`}
          >
            Experience
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ duration: 0.1 }}
            onClick={() => setActiveTab("education")}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === "education"
                ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50"
                : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
            }`}
          >
            Education
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ duration: 0.1 }}
            onClick={() => setActiveTab("responsibility")}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === "responsibility"
                ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50"
                : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
            }`}
          >
            Responsibility
          </motion.button>
        </motion.div>

        <div className="relative max-w-5xl mx-auto mt-16">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/20 via-purple-500/50 to-cyan-500/20" />

          <div className="space-y-8">
            {activeTab === "experience" &&
              EXPERIENCE_DATA.map((item, index) => (
                <ExperienceItem key={index} item={item} index={index} />
              ))}
            {activeTab === "education" &&
              EDUCATION_DATA.map((item, index) => (
                <EducationItem key={index} item={item} index={index} />
              ))}
            {activeTab === "responsibility" &&
              RESPONSIBILITY_DATA.map((item, index) => (
                <ResponsibilityItem key={index} item={item} index={index} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ item, index }: { item: any; index: number }) {
  const clickable = Boolean(item.locationUrl);
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ x: 8, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.2)" }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-12 md:pl-16 cursor-pointer"
      onClick={
        clickable
          ? () => window.open(item.locationUrl, "_blank", "noopener,noreferrer")
          : undefined
      }
      role={clickable ? "link" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                window.open(item.locationUrl, "_blank", "noopener,noreferrer");
              }
            }
          : undefined
      }
    >
      {/* Point on Line */}
      <div className="absolute left-[11px] md:left-[-9px] top-6 w-5 h-5 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full border-4 border-[#0a0a0a] z-10 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />

      {/* Content Card */}
      <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          {item.image && (
            <div className="w-full md:w-48 aspect-square flex-shrink-0">
              <img
                src={item.image}
                alt={item.company}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6 flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {item.position}
                </h3>
                <p className="text-cyan-400 font-medium flex items-center gap-2">
                  <span>🏢</span> {item.company}
                </p>
              </div>
              <span className="text-xs text-cyan-400 font-mono border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/10 whitespace-nowrap">
                {item.period}
              </span>
            </div>

            {item.location && (
              <p className="text-sm text-cyan-400 mb-3 flex items-center gap-2">
                <span>📍</span>{" "}
                <span className="text-cyan-300">{item.location}</span>
              </p>
            )}

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            {item.technologies && (
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function EducationItem({ item, index }: { item: any; index: number }) {
  const clickable = Boolean(item.locationUrl);
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ x: 8, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.2)" }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-12 md:pl-16 cursor-pointer"
      onClick={
        clickable
          ? () => window.open(item.locationUrl, "_blank", "noopener,noreferrer")
          : undefined
      }
      role={clickable ? "link" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                window.open(item.locationUrl, "_blank", "noopener,noreferrer");
              }
            }
          : undefined
      }
    >
      {/* Point on Line */}
      <div className="absolute left-[11px] md:left-[-9px] top-6 w-5 h-5 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full border-4 border-[#0a0a0a] z-10 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />

      {/* Content Card */}
      <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          {item.image && (
            <div className="w-full md:w-48 aspect-square flex-shrink-0">
              <img
                src={item.image}
                alt={item.institution}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6 flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {item.degree}
                </h3>
                <p className="text-cyan-400 font-medium flex items-center gap-2">
                  <span>🎓</span> {item.institution}
                </p>
              </div>
              <span className="text-xs text-cyan-400 font-mono border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/10 whitespace-nowrap">
                {item.period}
              </span>
            </div>

            {item.location && (
              <p className="text-sm text-cyan-400 mb-3 flex items-center gap-2">
                <span>📍</span>{" "}
                <span className="text-cyan-300">{item.location}</span>
              </p>
            )}

            {item.gpa && (
              <p className="text-sm text-purple-300 mb-3 font-semibold">
                {item.gpa}
              </p>
            )}

            <p className="text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ResponsibilityItem({ item, index }: { item: any; index: number }) {
  const clickable = Boolean(item.locationUrl);
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ x: 8, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.2)" }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-12 md:pl-16 cursor-pointer"
      onClick={
        clickable
          ? () => window.open(item.locationUrl, "_blank", "noopener,noreferrer")
          : undefined
      }
      role={clickable ? "link" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                window.open(item.locationUrl, "_blank", "noopener,noreferrer");
              }
            }
          : undefined
      }
    >
      {/* Point on Line */}
      <div className="absolute left-[11px] md:left-[-9px] top-6 w-5 h-5 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full border-4 border-[#0a0a0a] z-10 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />

      {/* Content Card */}
      <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          {item.image && (
            <div className="w-full md:w-48 aspect-square flex-shrink-0">
              <img
                src={item.image}
                alt={item.organization}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6 flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {item.position}
                </h3>
                <p className="text-cyan-400 font-medium flex items-center gap-2">
                  <span>🎯</span> {item.organization}
                </p>
              </div>
              <span className="text-xs text-cyan-400 font-mono border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/10 whitespace-nowrap">
                {item.period}
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            {item.responsibilities && item.responsibilities.length > 0 && (
              <ul className="space-y-2">
                {item.responsibilities.map((resp: string, i: number) => (
                  <li
                    key={i}
                    className="text-sm text-gray-300 flex items-start gap-2"
                  >
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
