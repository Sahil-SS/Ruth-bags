"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, delay, ease: [0.215, 0.61, 0.355, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-28 bg-white px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto relative overflow-hidden"
        style={{ borderRadius: "2rem" }}
      >

        {/* ── Background ── */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400"
            className="w-full h-full object-cover"
            alt="Workshop Background"
          />
          {/* Multi-stop gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          {/* Subtle grain texture overlay */}
          <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
        </div>

        {/* ── Corner accents ── */}
        <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-white/20 pointer-events-none z-10" />
        <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-white/20 pointer-events-none z-10" />
        <div className="absolute bottom-6 left-6 w-10 h-10 border-b border-l border-white/20 pointer-events-none z-10" />
        <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-white/20 pointer-events-none z-10" />

        {/* ── Content ── */}
        <div className="relative z-10 px-6 py-16 sm:px-10 sm:py-20 md:p-20 lg:p-28">

          {/* Mobile: full-width stacked. Desktop: 2-col grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT — Headline */}
            <div>
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-4 mb-7">
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="h-[1px] bg-white/30 block"
                  />
                  <span className="text-[10px] uppercase tracking-[0.35em] text-white/50 font-sans font-medium">
                    Private Access
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-[clamp(2.8rem,11vw,5.5rem)] font-serif font-light italic leading-[0.9] text-white mb-6">
                  The<br />
                  Inner<br />
                  <span className="text-white/30">Circle.</span>
                </h3>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.25em] leading-loose text-white/40 max-w-[260px]">
                  Be the first to access limited drops and seasonal archives. No noise, just beauty.
                </p>
              </FadeIn>

              {/* Social proof — subtle */}
              <FadeIn delay={0.4}>
                <div className="flex items-center gap-3 mt-8">
                  {/* Avatar stack */}
                  <div className="flex -space-x-2">
                    {[
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        className="w-7 h-7 rounded-full border border-white/20 object-cover"
                      />
                    ))}
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-sans">
                    2,400+ members
                  </span>
                </div>
              </FadeIn>
            </div>

            {/* RIGHT — Form */}
            <FadeIn delay={0.35}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-7 sm:p-10" style={{ borderRadius: "1.5rem" }}>
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <p className="font-serif italic text-white/60 text-sm mb-8 leading-relaxed">
                        "Reserved for those who appreciate the details others overlook."
                      </p>

                      {/* Email field */}
                      <div className="relative mb-6">
                        <label className={`absolute top-0 left-0 text-[9px] uppercase tracking-[0.3em] font-sans transition-all duration-300 ${focused || email ? 'text-white/50 -translate-y-0' : 'text-transparent'}`}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          placeholder={focused ? "" : "YOUR EMAIL ADDRESS"}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setFocused(true)}
                          onBlur={() => setFocused(false)}
                          className="w-full bg-transparent border-b border-white/20 pt-6 pb-3 outline-none text-white text-[10px] tracking-[0.2em] font-sans focus:border-white transition-colors duration-300 placeholder:text-white/20"
                        />
                        {/* Animated underline */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-[1px] bg-white"
                          animate={{ width: focused ? "100%" : "0%" }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>

                      {/* Name field */}
                      <div className="relative mb-10">
                        <input
                          type="text"
                          placeholder="FIRST NAME (OPTIONAL)"
                          className="w-full bg-transparent border-b border-white/10 py-3 outline-none text-white text-[10px] tracking-[0.2em] font-sans focus:border-white/40 transition-colors duration-300 placeholder:text-white/15"
                        />
                      </div>

                      <button
                        onClick={handleSubmit}
                        className="group relative w-full bg-white text-black py-5 text-[10px] font-bold uppercase tracking-[0.4em] font-sans overflow-hidden active:scale-95 transition-transform"
                        style={{ borderRadius: "100px" }}
                      >
                        <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                          Request Invitation
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-black origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.45 }}
                        />
                      </button>

                      <p className="text-center text-[8px] uppercase tracking-[0.25em] text-white/20 font-sans mt-5">
                        No spam. Unsubscribe anytime.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="py-10 text-center"
                    >
                      {/* Checkmark */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                        className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-8"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <motion.path
                            d="M4 10L8 14L16 6"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                          />
                        </svg>
                      </motion.div>

                      <h4 className="font-serif italic text-white text-2xl mb-3">
                        Welcome.
                      </h4>
                      <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40 leading-loose max-w-[200px] mx-auto">
                        You're on the list. We'll be in touch with something beautiful.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* ── Bottom progress bar (decorative) ── */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5 z-10" />
      </motion.div>
    </section>
  );
};

export default Newsletter;