"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitStatus === "sending") return;
    setSubmitStatus("sending");

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      const params = new URLSearchParams();
      formData.forEach((value, key) => {
        params.append(key, typeof value === "string" ? value : value.name);
      });
      const body = params.toString();

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!response.ok) throw new Error("Submission failed");

      setSubmitStatus("success");
      form.reset();
      window.setTimeout(() => setSubmitStatus("idle"), 2500);
    } catch {
      setSubmitStatus("error");
      window.setTimeout(() => setSubmitStatus("idle"), 3500);
    }
  };

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden" id="contact">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT COLUMN: Info & Context */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-space">
              Ready to Start?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Whether you need a custom project built from scratch or want to buy one of our ready-made kits, we are here to guide you.
            </p>

            <div className="mt-10 space-y-8">
              {/* Email Card - The Most Important Part */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email Us Directly</h3>
                  <p className="text-gray-400 text-sm mb-2">Best for sending abstract files or detailed requirements.</p>
                  <a 
                    href="mailto:protutech.info@gmail.com" 
                    className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    protutech.info@gmail.com
                  </a>
                </div>
              </div>

              {/* Support Info */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <MessageSquare className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Student Support</h3>
                  <p className="text-gray-400 text-sm">
                    Monday - Saturday: 10:00 AM - 8:00 PM <br/>
                    <span className="text-xs text-gray-500">(We reply within 2-4 hours)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* "Quick FAQ" Box */}
            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h4 className="text-white font-semibold mb-4">Common Questions:</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Do you provide the full source code? <strong>Yes.</strong>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Can I customize the project name? <strong>Yes.</strong>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Is shipping available all over India? <strong>Yes.</strong>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space">Send an Enquiry</h3>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-5"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input type="text" id="name" name="name" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="+91 98765..." />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" id="email" name="email" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="you@college.edu" />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">Interested Project / Topic</label>
                <input type="text" id="project" name="project" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="e.g. IoT Smart Energy Meter" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea id="message" name="message" rows={4} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="I need this for my final year project. Can you also add..."></textarea>
              </div>

              <button
                type="submit"
                disabled={submitStatus === "sending"}
                className="w-full rounded-xl bg-blue-600 px-4 py-4 text-center text-sm font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {submitStatus === "sending" ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-center text-sm font-semibold text-green-600">
                  Message sent successfully.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-center text-sm font-semibold text-red-600">
                  Could not send right now. Please email us.
                </p>
              )}
              
              <p className="text-center text-xs text-gray-400 mt-4">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}