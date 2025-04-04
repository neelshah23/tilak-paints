import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  waitlistCount: number;
}

export default function HeroSection({ waitlistCount }: HeroSectionProps) {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4E1D2] to-white z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            className="md:w-1/2 animate-on-scroll"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 text-[#443737]">
              Protect Your Home With <span className="bg-gradient-to-r from-[#987284] to-[#D5AA9F] bg-clip-text text-transparent">Revolutionary</span> Paint
            </h1>
            <p className="text-lg text-[#443737] mb-8">
              Tilak Paints combines cutting-edge protective technology with premium quality paint to shield your home from weather, dust, and environmental damage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#features">
                <Button className="bg-primary hover:bg-[#D5AA9F] text-white px-8 py-6 h-auto rounded-lg text-center font-semibold transition-all transform hover:scale-105 shadow-lg">
                  Explore Features
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 h-auto rounded-lg text-center font-semibold transition-all transform hover:scale-105">
                  Contact Us
                </Button>
              </a>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#987284] flex items-center justify-center text-white text-xs border-2 border-white">TP</div>
                <div className="w-10 h-10 rounded-full bg-[#D5AA9F] flex items-center justify-center text-white text-xs border-2 border-white">JD</div>
                <div className="w-10 h-10 rounded-full bg-[#E8D5B7] flex items-center justify-center text-[#443737] text-xs border-2 border-white">SK</div>
              </div>
              <div className="text-sm">
                <span className="text-[#443737] font-semibold">1000+ satisfied</span>
                <span className="text-[#443737] block">customers worldwide</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 animate-on-scroll"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-[#E8D5B7] rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#D5AA9F] rounded-full opacity-30"></div>
              
              {/* Color Swatch Display instead of image */}
              <div className="w-full h-96 bg-white rounded-xl shadow-xl overflow-hidden relative">
                <div className="absolute inset-0 flex">
                  <div className="w-1/5 h-full bg-[#443737]"></div>
                  <div className="w-1/5 h-full bg-[#987284]"></div>
                  <div className="w-1/5 h-full bg-[#D5AA9F]"></div>
                  <div className="w-1/5 h-full bg-[#E8D5B7]"></div>
                  <div className="w-1/5 h-full bg-[#F4E1D2]"></div>
                </div>
                
                {/* Overlay with paint drip effect */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="text-white text-4xl font-bold p-4 bg-black/20 backdrop-blur-sm rounded-lg">
                    Premium Colors
                  </div>
                </div>
                
                {/* Paint drip effect */}
                <div className="absolute top-0 w-full flex justify-around">
                  <div className="w-8 h-32 bg-[#987284] rounded-b-full transform -translate-y-2"></div>
                  <div className="w-8 h-40 bg-[#D5AA9F] rounded-b-full transform -translate-y-5"></div>
                  <div className="w-8 h-24 bg-[#E8D5B7] rounded-b-full transform -translate-y-1"></div>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-primary font-semibold">Premium Quality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
