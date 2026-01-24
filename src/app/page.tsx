"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Dock from "@/components/Dock";
import Contact from "@/components/Contact";
import { useScrollSpy } from "@/lib/useScrollSpy";

export default function Home() {
  useScrollSpy();

  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Dock />
      <Contact />
    </main>
  );
}
