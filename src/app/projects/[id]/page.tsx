"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, FileText, Code, Settings } from "lucide-react";
import { StaticImageData } from "next/image";
import { projectsData } from "../../../data/projects"; // Import from our new database
import { LucideIcon } from "lucide-react";

interface Spec {
  label: string;
  value: string;
}

interface Project {
  id: string;
  title: string;
  image: StaticImageData;
  gallery?: StaticImageData[]; // Added gallery support
  category: string;
  icon: LucideIcon;
  tags: string[];
  fullDescription: string;
  specs: Spec[];
  features: string[];
}

// This function tells Next.js which project to show based on the URL
export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap the params using React's use() hook
  const { id } = use(params);
  
  // Find the project data
  const project = projectsData.find((p: Project) => p.id === id);

  // Initialize state with the first gallery image, or fallback to the main image
  const [activeImage, setActiveImage] = useState<StaticImageData | null>(
    project?.gallery && project.gallery.length > 0 ? project.gallery[0] : project?.image || null
  );

  const [toast, setToast] = useState<string | null>(null);

  if (!project) {
    return notFound();
  }

  const Icon = project.icon;

  const whatsappHref = `https://wa.me/9325213768?text=${encodeURIComponent(
    `Hi, I'm interested in "${project.title}". Please share price and availability.`
  )}`;

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2200);
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-8 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Images & Key Visuals */}
          <div className="space-y-4">
            
            {/* Main Large Image (Dynamic based on state) */}
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
               {activeImage && (
                <Image
                  src={activeImage}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  placeholder="blur"
                  className="object-cover transition-all duration-300"
                  priority
                />
               )}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold text-foreground shadow-sm flex items-center gap-2">
                <Icon className="w-4 h-4 text-primary" /> {project.category}
              </div>
            </div>

            {/* Thumbnail Gallery Strip */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {project.gallery.map((img: StaticImageData, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                      activeImage === img 
                        ? "border-primary ring-2 ring-primary/20" 
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`View ${idx + 1}`}
                      fill
                      sizes="80px"
                      placeholder="blur"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* "What's Included" Box */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Included in Project Kit</h3>
              <ul className="grid grid-cols-2 gap-3">
                <li className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" /> Working Hardware
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Code className="w-5 h-5 text-blue-500" /> Source Code
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <FileText className="w-5 h-5 text-orange-500" /> Project Report
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Settings className="w-5 h-5 text-purple-500" /> Circuit Diagram
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: Info & Specs */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-foreground font-space sm:text-4xl">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mt-3 mb-4">
              {project.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-base text-gray-600 leading-relaxed mb-6">
              {project.fullDescription}
            </p>

            {/* Technical Specs Table */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-gray-400" /> Technical Specifications
              </h3>
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    {project.specs.map((spec: Spec, idx: number) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}>
                        <td className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-500">{spec.label}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-sm font-bold text-gray-900">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Features List */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Additional Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact / CTA */}
            <div className="mt-auto pt-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl bg-primary px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:scale-[1.02]"
                >
                  Request Price & Availability
                </a>
                <button
                  type="button"
                  onClick={() => showToast("Abstract download is coming soon.")}
                  className="rounded-xl px-6 py-3 text-center text-sm font-semibold text-foreground border border-gray-200 bg-white hover:bg-gray-50"
                >
                  Download Abstract
                </button>
              </div>
              <p className="mt-2 text-center text-xs text-gray-400">
                * We provide full guidance on how to explain this project.
              </p>
            </div>

          </div>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
          <div
            role="status"
            aria-live="polite"
            className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-lg"
          >
            {toast}
          </div>
        </div>
      )}
    </main>
  );
}