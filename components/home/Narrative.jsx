"use client";
import { motion } from 'framer-motion';

const Narrative = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
  };

  return (
    <section className="py-20 md:py-32 bg-[#FAF9F6] overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1440px] mx-auto px-6"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Image - Artisan Hands */}
          <motion.div variants={itemVariants} className="w-full lg:col-span-4 order-2 lg:order-1">
            <div className="aspect-[4/5] md:aspect-[3/5] bg-gray-200 overflow-hidden rounded-t-full">
              <img 
                src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=800" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Artisan Craftsmanship"
              />
            </div>
          </motion.div>

          {/* Center Text Content */}
          <motion.div variants={itemVariants} className="w-full lg:col-span-4 text-center order-1 lg:order-2 py-10">
            <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-6 block font-bold">
              Heritage & Heart
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic leading-tight mb-8 text-black">
              Artistry <br /> in Every <br /> <span className="text-gray-300">Fiber.</span>
            </h2>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] leading-loose text-gray-500 max-w-xs mx-auto mb-10">
              Every alanKRit piece is a fusion of ancient textile wisdom and modern architectural utility.
            </p>
            <button className="px-10 py-4 border border-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black hover:text-white transition-all duration-500">
              The Atelier Story
            </button>
          </motion.div>

          {/* Right Image - Finished Product */}
          <motion.div variants={itemVariants} className="w-full lg:col-span-4 order-3">
            <div className="aspect-[1/1] lg:aspect-[4/5] bg-gray-100 overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                alt="Luxury Tote"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            </div>
            <p className="mt-4 text-[8px] uppercase tracking-[0.4em] text-gray-400 text-center lg:text-right">
              Archive No. 042 // The Ikkat Tote
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Narrative;