"use client";
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-16 md:py-24 bg-white px-4 md:px-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden relative min-h-[550px] flex items-center shadow-2xl"
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200" 
            className="w-full h-full object-cover grayscale brightness-[0.25]"
            alt="Workshop Background"
          />
        </div>

        {/* Form Content */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 p-10 md:p-24 items-center gap-12">
          <div className="text-left">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-serif italic text-white mb-6 leading-[1.1]"
            >
              The Inner <br /> Circle
            </motion.h3>
            <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.3em] leading-relaxed max-w-sm">
              Be the first to access limited drops and seasonal archives. No noise, just beauty.
            </p>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8 bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <div className="relative">
              <input 
                type="email" 
                required
                placeholder="YOUR EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-white text-[10px] tracking-[0.2em] focus:border-white transition-all placeholder:text-gray-600"
              />
            </div>
            <button className="w-full bg-[#EAEAE8] text-black py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95 rounded-full">
              Request Invitation
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;