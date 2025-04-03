import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  waitlistCount: number;
}

export default function HeroSection({ waitlistCount }: HeroSectionProps) {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            className="md:w-1/2 animate-on-scroll"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Reinvent Your Space With <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Revolutionary</span> Paint
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Tilak Paints combines cutting-edge color technology with premium quality paint to transform your vision into vibrant reality. Join our exclusive waitlist for early access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#waitlist">
                <Button className="bg-primary hover:bg-blue-600 text-white px-8 py-6 h-auto rounded-lg text-center font-semibold transition-all transform hover:scale-105 shadow-lg">
                  Join Waitlist
                </Button>
              </a>
              <a href="#features">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 h-auto rounded-lg text-center font-semibold transition-all transform hover:scale-105">
                  Explore Features
                </Button>
              </a>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs border-2 border-white">TP</div>
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs border-2 border-white">JD</div>
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs border-2 border-white">SK</div>
              </div>
              <div className="text-sm">
                <span className="text-gray-800 font-semibold">{waitlistCount}+ professionals</span>
                <span className="text-gray-500 block">already on the waitlist</span>
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
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1626863905133-27c972ad4c5c?w=800&h=600&fit=crop" 
                alt="Modern interior design with vibrant paint colors" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
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
