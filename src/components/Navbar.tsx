"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, Home, Info, Mail, X } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import logo from "../assets/logo.png";

const mobileListVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.09,
    },
  },
};

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, x: 16 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 420,
      damping: 32,
    },
  },
};

const navLinks = [
  { name: "Home", href: "/#home", icon: Home },
  { name: "Projects", href: "/#projects", icon: Briefcase },
  { name: "About Us", href: "/#about", icon: Info },
  { name: "Contact", href: "/#contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center group">
              <Image
                src={logo}
                alt="Protutech Logo"
                height={40}
                sizes="160px"
                placeholder="blur"
                className="h-10 w-auto transition-opacity group-hover:opacity-80"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="mailto:contact@protutech.com"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-600 hover:shadow-md hover:shadow-blue-500/20"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden relative z-60 h-10 w-10 p-2 text-foreground/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open menu</span>
              <span className="relative block h-6 w-6">
                <motion.span
                  className="absolute left-0 top-0.75 h-0.5 w-6 rounded bg-current"
                  animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 32 }}
                />
                <motion.span
                  className="absolute left-0 top-2.75 h-0.5 w-6 rounded bg-current"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.12 }}
                />
                <motion.span
                  className="absolute left-0 top-4.75 h-0.5 w-6 rounded bg-current"
                  animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 32 }}
                />
              </span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (fixed drawer rendered OUTSIDE nav to avoid backdrop-filter issues) */}
      <div className="md:hidden">
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-70 bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              />

              {/* Drawer */}
              <motion.aside
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                className="fixed right-0 top-0 z-80 h-dvh w-[min(300px,82vw)] bg-background border-l border-border shadow-2xl rounded-l-2xl"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 320, damping: 34 }}
              >
                <div className="flex h-full min-h-0 flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                    <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
                      <Image src={logo} alt="Protutech" height={28} sizes="120px" placeholder="blur" className="h-7 w-auto" />
                    </Link>
                    <motion.button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/5 transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                      aria-label="Close menu"
                      whileTap={{ scale: 0.95 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.button>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 min-h-0 overflow-y-auto p-4">
                    <motion.div
                      className="space-y-2"
                      variants={mobileListVariants}
                      initial="hidden"
                      animate="show"
                    >
                      {navLinks.map((link) => (
                        <motion.div key={link.name} variants={mobileItemVariants}>
                          <motion.div whileTap={{ scale: 0.98 }}>
                            <Link
                              href={link.href}
                              onClick={() => setIsOpen(false)}
                              className="group flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-foreground/80 bg-card border border-border transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                            >
                              <span className="flex items-center gap-3">
                                <link.icon className="h-5 w-5 text-foreground/40 transition-colors group-hover:text-primary" />
                                <span>{link.name}</span>
                              </span>
                              <motion.span className="text-foreground/30" initial={false} animate={{ x: 0 }}>
                                <span className="opacity-0 -translate-x-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0">→</span>
                              </motion.span>
                            </Link>
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <div className="p-4 border-t border-border bg-card">
                    <motion.a
                      href="mailto:contact@protutech.com"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-6 py-4 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 420, damping: 34, delay: 0.12 + navLinks.length * 0.09 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Get Started</span>
                      <span aria-hidden>→</span>
                    </motion.a>
                    <p className="mt-3 text-center text-xs text-muted">
                      Ready to build your next project?
                    </p>
                  </div>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}