"use client";
const Newsletter = () => {
  return (
    <section className="py-12 md:py-24 bg-white px-4 md:px-6">
      <div className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden relative min-h-[500px] flex items-center shadow-2xl">
        
        {/* Background Image - Absolute for all views */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200" 
            className="w-full h-full object-cover grayscale brightness-[0.3]"
            alt="Atelier"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 p-8 md:p-20 items-center gap-10">
          <div className="text-left">
            <h3 className="text-4xl md:text-6xl font-serif italic text-white mb-4 leading-tight">
              The Inner <br className="hidden md:block" /> Circle
            </h3>
            <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.2em] leading-relaxed max-w-xs">
              Limited drops. Private archives. No noise, just beauty.
            </p>
          </div>

          <form className="space-y-6 bg-white/5 backdrop-blur-md p-6 md:p-0 rounded-2xl md:bg-transparent">
            <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-white/30 py-4 outline-none text-white text-xs tracking-widest focus:border-white transition-all"
              />
            </div>
            <button className="w-full bg-[#EAEAE8] text-black py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white transition-all rounded-full md:rounded-none">
              Request Access
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;