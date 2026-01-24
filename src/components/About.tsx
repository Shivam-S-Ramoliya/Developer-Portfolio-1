"use client";

import { motion } from "framer-motion";
import GlareHover from "./GlareHover";

const stats = [
    { label: "Projects", value: "5+" },
    { label: "12th Percentile", value: "99.54" },
    { label: "JEE Mains Percentile", value: "99.14" },
];

const traits = ["Creative", "Problem Solver", "Team Player", "Fast Learner"];

export default function About() {
    return (
        <section
            id="about"
            className="relative z-20 bg-[#0a0a0a] min-h-screen py-8 px-4 md:px-12 overflow-hidden scroll-mt-0"
        >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        About{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
                            Me
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed text-justify">
                        A passionate developer with expertise in modern web technologies,
                        creating elegant solutions and scalable architectures.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Portrait */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <GlareHover
                            glareColor="#ffffff"
                            glareOpacity={0.3}
                            glareAngle={-30}
                            glareSize={300}
                            transitionDuration={800}
                            playOnce={false}
                            width="100%"
                            height="auto"
                            background="transparent"
                            borderRadius="24px"
                            borderColor="rgba(255,255,255,0.1)"
                            className="w-full h-full"
                        >
                            <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-white/5">
                                <img
                                    src="/Shivam-1.jpg"
                                    alt="Shivam S. Ramoliya portrait"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </GlareHover>
                    </motion.div>

                    {/* Bio & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <p className="text-gray-300 leading-relaxed text-lg text-justify">
                                I'm a passionate developer with deep expertise in modern web
                                technologies and a keen eye for creating elegant, user-friendly
                                applications. With a strong foundation in software engineering
                                principles, I excel at designing scalable architectures, writing
                                maintainable code, and implementing design patterns that stand
                                the test of time.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-lg text-justify">
                                I transform ideas into reality through clean, efficient code and
                                innovative solutions. My approach to problem-solving involves
                                breaking down complex challenges into manageable components,
                                analyzing edge cases, and applying algorithmic thinking to
                                deliver robust solutions.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-lg text-justify">
                                I love tackling intricate technical problems, optimizing
                                performance bottlenecks, and architecting systems that are both
                                powerful and intuitive. Continuously learning new technologies
                                and best practices allows me to stay at the forefront of web
                                development while maintaining a deep commitment to code quality
                                and software craftsmanship.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                        >
                            {stats.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{
                                        y: -8,
                                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                                    }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.1 }}
                                    className="bg-white/5 border border-blue-500/20 rounded-2xl px-6 py-5 text-center shadow-lg hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.1 }}
                                        className="text-3xl font-bold text-blue-400 mb-1"
                                    >
                                        {item.value}
                                    </motion.div>
                                    <div className="text-sm uppercase tracking-wide text-gray-400 font-semibold">
                                        {item.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-wrap gap-3"
                        >
                            {traits.map((trait, index) => (
                                <motion.span
                                    key={trait}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{
                                        scale: 1.08,
                                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                                        borderColor: "rgba(59, 130, 246, 0.5)",
                                    }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.1 }}
                                    className="px-4 py-2 rounded-full bg-white/5 border border-blue-500/20 text-sm text-white shadow-sm hover:text-blue-300 transition-all duration-300 cursor-pointer"
                                >
                                    {trait}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
