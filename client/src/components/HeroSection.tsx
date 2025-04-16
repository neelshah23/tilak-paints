import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  waitlistCount: number;
}

export default function HeroSection({ waitlistCount }: HeroSectionProps) {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-10 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4E1D2] to-white z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content */}
          <motion.div 
            className="w-full md:w-1/2 animate-on-scroll"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4 md:mb-6 text-[#443737] leading-tight">
              Protect Your Home With <span className="bg-gradient-to-r from-[#987284] to-[#D5AA9F] bg-clip-text text-transparent">Revolutionary</span> Paint
            </h1>
            <p className="text-base md:text-lg text-[#443737] mb-6 md:mb-8">
              Tilak Paints combines cutting-edge protective technology with premium quality paint to shield your home from weather, dust, and environmental damage.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
              <a href="#features" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-primary hover:bg-[#D5AA9F] text-white px-6 sm:px-8 py-5 md:py-6 h-auto rounded-lg text-center font-semibold transition-all transform hover:scale-105 shadow-lg">
                  Explore Features
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-5 md:py-6 h-auto rounded-lg text-center font-semibold transition-all transform hover:scale-105">
                  Contact Us
                </Button>
              </a>
            </div>
            
            {/* Customer Stats */}
            <div className="mt-6 md:mt-8 flex items-center space-x-3 md:space-x-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#987284] flex items-center justify-center text-white text-xs border-2 border-white">TP</div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#D5AA9F] flex items-center justify-center text-white text-xs border-2 border-white">JD</div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#E8D5B7] flex items-center justify-center text-[#443737] text-xs border-2 border-white">SK</div>
              </div>
              <div className="text-xs sm:text-sm">
                <span className="text-[#443737] font-semibold">1000+ satisfied</span>
                <span className="text-[#443737] block">customers across India</span>
              </div>
            </div>
          </motion.div>
          
          {/* Color Swatch Display */}
          <motion.div 
            className="w-full md:w-1/2 animate-on-scroll mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-[500px]">
              {/* Decorative circles */}
              <div className="hidden sm:block absolute -top-8 -left-8 w-16 md:w-20 h-16 md:h-20 bg-[#E8D5B7] rounded-full opacity-30"></div>
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-12 md:w-16 h-12 md:h-16 bg-[#D5AA9F] rounded-full opacity-30"></div>
              
              {/* Color Swatch Display */}
              <div className="w-full h-56 sm:h-72 md:h-96 bg-white rounded-xl shadow-xl overflow-hidden relative">
                {/* Color strips */}
                <div className="absolute inset-0 flex">
                  <div className="w-1/5 h-full bg-[#443737]"></div>
                  <div className="w-1/5 h-full bg-[#987284]"></div>
                  <div className="w-1/5 h-full bg-[#D5AA9F]"></div>
                  <div className="w-1/5 h-full bg-[#E8D5B7]"></div>
                  <div className="w-1/5 h-full bg-[#F4E1D2]"></div>
                </div>
                
                {/* Center text overlay */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold p-3 md:p-4 bg-black/20 backdrop-blur-sm rounded-lg">
                    Premium Colors
                  </div>
                </div>
                
                {/* Paint drip effect */}
                <div className="absolute top-0 w-full flex justify-around">
                  <div className="w-5 sm:w-6 md:w-8 h-24 sm:h-28 md:h-32 bg-[#987284] rounded-b-full transform -translate-y-1 sm:-translate-y-2"></div>
                  <div className="w-5 sm:w-6 md:w-8 h-32 sm:h-36 md:h-40 bg-[#D5AA9F] rounded-b-full transform -translate-y-3 sm:-translate-y-4 md:-translate-y-5"></div>
                  <div className="w-5 sm:w-6 md:w-8 h-20 sm:h-22 md:h-24 bg-[#E8D5B7] rounded-b-full transform -translate-y-0 md:-translate-y-1"></div>
                </div>
              </div>
              
              {/* Premium badge */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white px-3 py-1 md:px-4 md:py-2 rounded-full shadow-lg">
                <span className="text-primary text-xs md:text-base font-semibold">Premium Quality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
