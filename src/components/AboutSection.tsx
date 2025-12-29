"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Users, Zap, Lightbulb, Award, HeartHandshake } from "lucide-react";

const features = [
  {
    name: 'Built by Engineers, For Engineers',
    description: 'We are not just sellers; we are makers. Every project is tested on our own workbenches before it reaches yours.',
    icon: Users,
  },
  {
    name: 'The Startup Advantage',
    description: 'Being a dedicated startup means you are not just an order number. We provide the personal guidance big companies can’t afford to give.',
    icon: HeartHandshake,
  },
  {
    name: 'Industrial Grade Quality',
    description: 'We hate loose wires and messy breadboards. We build robust, neat, and presentation-ready prototypes.',
    icon: Award,
  },
];

const stats = [
  { id: 1, name: 'Success Rate', value: '100%' },
  { id: 2, name: 'Project Categories', value: '15+' },
  { id: 3, name: 'Support Availability', value: '24/7' },
  { id: 4, name: 'Student Satisfaction', value: '5★' },
];

export default function AboutSection() {
  return (
    <div className="bg-white py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* HERO TEXT */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary">Our Story</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-space">
              We Don&apos;t Just Build Projects. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                We Build Engineers.
              </span>
            </p>
            <p className="mt-6 text-lg leading-8 text-muted">
              Protutech started with a simple observation: Engineering students have brilliant ideas but often lack the time or resources to build industrial-quality prototypes. We bridge that gap.
            </p>
          </motion.div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name} 
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground font-space">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-50">
                    <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* MISSION STATEMENT BOX */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl bg-slate-900 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:justify-between"
        >
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl font-space">
              Small Team, Big Impact.
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              We are a boutique startup, which means we treat every project like our masterpiece. No automated responses, no generic kits—just pure engineering passion tailored for your success.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
             <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
              >
                Start Your Project
              </Link>
          </div>
        </motion.div>

        {/* STATS SECTION */}
        <div className="mt-20 border-t border-gray-200 pt-10">
           <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-foreground sm:text-5xl font-space">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </div>
  );
}