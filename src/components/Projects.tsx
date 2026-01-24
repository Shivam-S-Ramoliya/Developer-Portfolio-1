"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Project Data with Media & Layout Configuration
const projects = [
    {
        id: "newsxpress",
        title: "NewsXpress",
        category: "Web / Mobile",
        description:
            "An AI-powered, personalized news aggregation platform featuring intelligent article summarization via Groq SDK.",
        longDescription:
            "An AI-powered, personalized news aggregation platform featuring intelligent article summarization via Groq SDK, multi-language translation support, text-to-speech capabilities, and a hybrid ML recommendation engine combining content-based and collaborative filtering. Built with React and Tailwind CSS frontend, Node.js/Express backend with PostgreSQL database, and Python ML models achieving 100% test coverage with Jest and Vitest.",
        techStack: [
            "React",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Python",
            "Tailwind CSS",
            "Groq API",
            "Google Cloud APIs",
            "Firebase Auth",
        ],
        repo: "https://github.com/Shivam-Ramoliya/NewsXpress",
        demo: "https://newsxpress-7bjk.onrender.com/",
        color: "from-blue-600/20 to-cyan-500/20",
        hoverColor: "group-hover:from-blue-600/40 group-hover:to-cyan-500/40",
        span: "md:col-span-2 md:row-span-2",
        mediaType: "image",
        mediaUrl: "/NewsXpress.png",
        demoVideoUrl: "",
    },
    {
        id: "twintrails",
        title: "TwinTrails",
        category: "Web / Mobile",
        description:
            "An advanced spatial navigation laboratory enabling real-time comparison between Dead Reckoning and Visual SLAM technologies.",
        longDescription:
            "An advanced spatial navigation laboratory enabling real-time comparison between Dead Reckoning (IMU-based inertial navigation) and Visual SLAM (camera-first simultaneous localization and mapping) technologies. Features dual path visualization with grid/map views, obstacle detection with depth-based clustering, GPS integration, sensor fusion algorithms, and glassmorphic UI with OpenStreetMap integration. Supports touch gestures, live camera overlays with FAST corner detection, and real-time performance metrics.",
        techStack: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Leaflet.js",
            "Device APIs",
            "MediaDevices API",
            "Geolocation API",
            "WebGL",
        ],
        repo: "https://github.com/Shivam-Ramoliya/TwinTrails",
        demo: "https://twintrails.vercel.app/",
        color: "from-purple-600/20 to-pink-500/20",
        hoverColor: "group-hover:from-purple-600/40 group-hover:to-pink-500/40",
        span: "md:col-span-1 md:row-span-2",
        mediaType: "image",
        mediaUrl: "/TwinTrails.png",
        demoVideoUrl: "",
    },
    {
        id: "textutils",
        title: "TextUtils",
        category: "Web / Mobile",
        description:
            "A powerful React-based text manipulation utility application offering 12+ text transformation features.",
        longDescription:
            "A powerful React-based text manipulation utility application offering 12+ text transformation features including case conversions (uppercase, lowercase, sentence, capitalized, alternating, inverse), space removal, character filtering (numbers/punctuation removal), text reversal, Base64 encoding/decoding, and text-to-speech synthesis. Includes advanced analytics like vowel/consonant counting, character frequency analysis, word/character summaries, dark/light mode toggle, and seamless copy/clear functionality with a responsive Bootstrap interface.",
        techStack: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap 5"],
        repo: "https://github.com/Shivam-Ramoliya/TextUtils",
        demo: "https://textutils-by-shivam.vercel.app/",
        color: "from-orange-500/20 to-red-500/20",
        hoverColor: "group-hover:from-orange-500/40 group-hover:to-red-500/40",
        span: "md:col-span-1 md:row-span-1",
        mediaType: "image",
        mediaUrl: "/TextUtils.png",
        demoVideoUrl: "",
    },
    {
        id: "dls-system",
        title: "DLS-System",
        category: "Web / Mobile",
        description:
            "An academic project dashboard demonstrating the Duckworth-Lewis-Stern method for cricket matches.",
        longDescription:
            "An academic project dashboard for the Project DLS-System under the course SC107: Calculus, demonstrating the Duckworth-Lewis-Stern method used for determining target scores in limited-overs cricket matches interrupted by weather or other circumstances, with calculations made using calculus-based resources.",
        techStack: ["HTML", "CSS", "JavaScript", "Calculus/Matlab Concepts"],
        repo: "https://github.com/Shivam-Ramoliya/DLS-System-SC107-Project",
        demo: "https://shivam-ramoliya.github.io/DLS-System-SC107-Project/",
        color: "from-cyan-600/20 to-purple-500/20",
        hoverColor: "group-hover:from-cyan-600/40 group-hover:to-purple-500/40",
        span: "md:col-span-1 md:row-span-1",
        mediaType: "image",
        mediaUrl: "/DLS-System.png",
        demoVideoUrl: "",
    },
    {
        id: "nocapcoderz",
        title: "No-Capcoders: Club Management System",
        category: "DSA/Terminal",
        description:
            "A comprehensive DSA capstone project implementing an efficient club management system using optimal data structures.",
        longDescription:
            "A comprehensive DSA capstone project implementing an efficient club management system using optimal data structures. Designed to manage DA-IICT clubs with O(1) search by ID and O(n) by name/category using hash table-based architecture. Features member management (add/delete/view/search), club administration, role-based access control with password protection, CSV-based persistent storage, and category-based filtering. Demonstrates practical application of hash tables over traditional maps for superior search complexity without unnecessary lexicographical sorting.",
        techStack: ["C++", "Data Structures", "Hash Tables", "CSV File Handling"],
        repo: "https://github.com/Shivam-Ramoliya/noCapCoderz",
        demo: "https://github.com/Shivam-Ramoliya/noCapCoderz",
        color: "from-indigo-600/20 to-purple-500/20",
        hoverColor: "group-hover:from-indigo-600/40 group-hover:to-purple-500/40",
        span: "md:col-span-1 md:row-span-1",
        mediaType: "image",
        mediaUrl: "/noCapCoderz.png",
        demoVideoUrl: "",
    },
];

const INITIAL_VISIBLE_COUNT = 5;

export default function Projects() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        const dockElement = document.querySelector("[data-dock]") as HTMLElement;

        if (selectedId) {
            document.body.style.overflow = "hidden";
            if (dockElement) {
                dockElement.style.opacity = "0";
                dockElement.style.pointerEvents = "none";
                dockElement.style.transform = "translateY(100%)";
            }
        } else {
            document.body.style.overflow = originalOverflow;
            if (dockElement) {
                dockElement.style.opacity = "1";
                dockElement.style.pointerEvents = "auto";
                dockElement.style.transform = "translateY(0)";
            }
        }

        return () => {
            document.body.style.overflow = originalOverflow;
            if (dockElement) {
                dockElement.style.opacity = "1";
                dockElement.style.pointerEvents = "auto";
                dockElement.style.transform = "translateY(0)";
            }
        };
    }, [selectedId]);

    const selectedProject = projects.find((p) => p.id === selectedId);
    const visibleProjects = projects.slice(0, visibleCount);
    const hasMore = visibleCount < projects.length;

    return (
        <section
            className="relative z-20 bg-[#0a0a0a] min-h-screen py-8 px-4 md:px-12 overflow-hidden"
            id="projects"
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
                        Selected{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
                            Works
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        A curated selection of projects showcasing AI/ML integration,
                        spatial algorithms, data structures optimization, and full-stack web
                        development.
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]"
                >
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layoutId={project.id}
                                onClick={() => setSelectedId(project.id)}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 2 }}
                                viewport={{ once: false }}
                                transition={{
                                    duration: 0.3,
                                    layout: { duration: 0.2 },
                                }}
                                whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
                                className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 backdrop-blur-md ${project.span}`}
                            >
                                {/* Media Background - Always 'mediaUrl' for Grid */}
                                {project.mediaType === "video" ? (
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                                    >
                                        <source src={project.mediaUrl} type="video/mp4" />
                                    </video>
                                ) : (
                                    <div
                                        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                                        style={{ backgroundImage: `url(${project.mediaUrl})` }}
                                    />
                                )}

                                {/* Gradient Overlay */}
                                <div
                                    className={`absolute inset-0 bg-linear-to-br ${project.color} ${project.hoverColor} transition-all duration-500 opacity-60 group-hover:opacity-80 mix-blend-overlay`}
                                />

                                {/* Darkener */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                                {/* Noise */}
                                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                    <div className="flex justify-between items-start">
                                        <span className="inline-block px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-mono text-blue-300 backdrop-blur-md">
                                            {project.category}
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:translate-x-1 transition-transform drop-shadow-lg">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-200 text-sm line-clamp-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                            {project.techStack.slice(0, 3).map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-[10px] uppercase tracking-wider text-white/80 bg-black/40 px-2 py-1 rounded backdrop-blur-sm border border-white/5"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Pagination Buttons */}
                <motion.div layout className="flex justify-center mt-12">
                    {hasMore ? (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setVisibleCount((prev) => prev + 6)}
                            className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md flex items-center gap-2 group"
                        >
                            View More Projects
                            <svg
                                className="w-4 h-4 group-hover:translate-y-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </motion.button>
                    ) : (
                        projects.length > INITIAL_VISIBLE_COUNT && (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    const projectsSection = document.getElementById("projects");
                                    if (projectsSection) {
                                        projectsSection.scrollIntoView({ behavior: "smooth" });
                                    }
                                    setVisibleCount(INITIAL_VISIBLE_COUNT);
                                }}
                                className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md flex items-center gap-2 group"
                            >
                                Show Less
                                <svg
                                    className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 15l7-7 7 7"
                                    />
                                </svg>
                            </motion.button>
                        )
                    )}
                </motion.div>

                {/* Enhanced Modal */}
                <AnimatePresence>
                    {selectedId && selectedProject && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                            />
                            <div className="fixed inset-0 flex items-center justify-center z-[70] pointer-events-none p-4 md:p-8">
                                <motion.div
                                    layoutId={selectedId}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        willChange: "transform",
                                        transform: "translateZ(0)",
                                    }}
                                    className="bg-[#0f0f0f] w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-3xl border border-white/10 shadow-2xl relative pointer-events-auto"
                                >
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="absolute top-6 right-6 z-30 p-2.5 bg-black/70 hover:bg-black/90 rounded-full text-white/80 hover:text-white transition-all border border-white/20 hover:scale-110"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>

                                    <div
                                        className="flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                                        style={{
                                            scrollBehavior: "smooth",
                                            WebkitOverflowScrolling: "touch",
                                            overscrollBehavior: "contain",
                                        }}
                                    >
                                        {/* Full Width Image/Video Section */}
                                        <div className="w-full h-64 md:h-80 lg:h-96 relative overflow-hidden flex-shrink-0">
                                            {selectedProject.mediaType === "video" &&
                                                selectedProject.demoVideoUrl ? (
                                                <video
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                    key={selectedProject.demoVideoUrl}
                                                >
                                                    <source
                                                        src={selectedProject.demoVideoUrl}
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            ) : (
                                                <img
                                                    src={selectedProject.mediaUrl}
                                                    alt={selectedProject.title}
                                                    loading="lazy"
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />
                                            )}
                                            <div
                                                className={`absolute inset-0 bg-linear-to-b ${selectedProject.color} mix-blend-overlay opacity-40`}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />

                                            {/* Title Overlay on Image */}
                                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                                <motion.span
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="inline-block px-3 py-1 rounded-full bg-black/60 text-xs font-mono text-white mb-3 border border-white/20 backdrop-blur-md"
                                                >
                                                    {selectedProject.category}
                                                </motion.span>
                                                <motion.h3
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3 }}
                                                    className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight drop-shadow-2xl"
                                                >
                                                    {selectedProject.title}
                                                </motion.h3>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="w-full p-8 md:p-10 lg:p-12 bg-[#0f0f0f]">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                                                    About the project
                                                </h4>
                                                <p className="text-gray-300 leading-relaxed mb-8 text-base">
                                                    {selectedProject.longDescription}
                                                </p>

                                                <div className="mb-8">
                                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                                                        Core Technologies
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2.5">
                                                        {selectedProject.techStack.map((tech, i) => (
                                                            <motion.span
                                                                key={tech}
                                                                initial={{ opacity: 0, scale: 0.9 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                whileHover={{
                                                                    scale: 1.05,
                                                                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                                                                }}
                                                                transition={{
                                                                    delay: 0.5 + i * 0.05,
                                                                    duration: 0.1,
                                                                }}
                                                                className="px-4 py-2 rounded-lg bg-white/5 text-sm text-gray-200 border border-white/10 transition-colors cursor-default"
                                                            >
                                                                {tech}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex gap-3 pt-6 border-t border-white/10">
                                                    <a
                                                        href={selectedProject.repo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 py-4 rounded-xl bg-white text-black font-bold text-center hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                                                    >
                                                        <svg
                                                            className="w-5 h-5"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                        </svg>
                                                        View Code
                                                    </a>
                                                    <a
                                                        href={selectedProject.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 py-4 rounded-xl bg-white/5 text-white font-bold text-center hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center gap-2"
                                                    >
                                                        Live Demo
                                                        <svg
                                                            className="w-4 h-4"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
