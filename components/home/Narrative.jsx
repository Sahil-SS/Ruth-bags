"use client";
import { motion } from 'framer-motion';

const Narrative = () => {
  return (
    <section className="py-20 md:py-32 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Mobile: Simple Stack | Desktop: 3 Columns */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-16 items-center">
          
          {/* Top Image (Desktop Left) */}
          <div className="w-full lg:col-span-4 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="aspect-[4/5] md:aspect-[3/5] bg-gray-200 overflow-hidden rounded-t-full lg:rounded-t-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=800" 
                className="w-full h-full object-cover grayscale"
                alt="Artisan"
              />
            </motion.div>
          </div>

          {/* Central Text (Always Center) */}
          <div className="w-full lg:col-span-4 text-center order-1 lg:order-2 z-10 py-10 md:py-0">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-6 block font-bold">
              The Archive
            </span>
            <h2 className="text-4xl md:text-7xl font-serif italic leading-tight mb-8 text-black">
              Artistry <br /> in Every <br /> <span className="text-gray-300">Fiber.</span>
            </h2>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] leading-loose text-gray-500 max-w-xs mx-auto mb-10">
              We don’t just make bags; we archive stories. Crafted in Chennai, designed for the nomad.
            </p>
            <button className="px-8 py-4 border border-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black hover:text-white transition-all">
              Discover More
            </button>
          </div>

          {/* Bottom Image (Desktop Right) */}
          <div className="w-full lg:col-span-4 order-3">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="aspect-[1/1] lg:aspect-[4/5] bg-gray-100 overflow-hidden relative shadow-xl lg:shadow-none"
            >
              <img 
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800" 
                className="w-full h-full object-cover"
                alt="Product"
              />
            </motion.div>
            <p className="mt-4 text-[8px] uppercase tracking-[0.4em] text-gray-400 text-center lg:text-right italic">
              01 // The Pattern Process
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Narrative;