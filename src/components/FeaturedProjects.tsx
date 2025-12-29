"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { projectsData } from "../data/projects"; // Import the shared data

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-50/50" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-space">
              Featured Hardware Projects
            </h2>
            <p className="mt-4 text-lg text-muted">
              Hand-picked, verified projects for EEE & ECE students. Each kit includes the hardware, source code, and full documentation.
            </p>
          </div>
          {/*
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
          */}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-foreground flex items-center gap-1 shadow-sm">
                  <project.icon className="w-3 h-3" /> {project.category}
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-foreground font-space mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Dynamic Link to the specific project */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center justify-center w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                  >
                    View Project Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}