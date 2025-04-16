import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import image1 from '@assets/image1.png';
import image2 from '@assets/image2.png';
import image3 from '@assets/image3.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function ProductShowcase() {
  return (
    <section className="py-16 md:py-24 bg-[#F4E1D2]/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 animate-on-scroll"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-primary font-medium uppercase tracking-wider">Product Showcase</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mt-4 mb-6 text-[#443737]">
            Professional <span className="text-primary">Paint Solutions</span>
          </h2>
          <p className="text-lg text-[#443737] max-w-3xl mx-auto">
            Our premium paint products are designed to exceed expectations for both professionals and DIY enthusiasts.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <motion.div 
            className="flex flex-col animate-on-scroll"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="relative overflow-hidden rounded-xl bg-white shadow-lg h-64 sm:h-72 md:h-80" style={{ backgroundColor: '#e9e5e1' }}>
              {/* Color palette swatches instead of image */}
              <img src={image1} alt="Paint Palette" className="w-full h-full object-contain" />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold">Premium Interior Collection</h3>
                <p className="text-white/80 text-sm sm:text-base">Perfect for living spaces</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-6">
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                <Badge className="bg-[#D5AA9F]/20 text-[#D5AA9F] hover:bg-[#D5AA9F]/30 border border-[#D5AA9F]/50">Stain Resistant</Badge>
                <Badge className="bg-[#987284]/20 text-[#987284] hover:bg-[#987284]/30 border border-[#987284]/50">Washable</Badge>
                <Badge className="bg-[#E8D5B7]/20 text-[#443737] hover:bg-[#E8D5B7]/30 border border-[#E8D5B7]/50">Low VOC</Badge>
              </div>
              <p className="text-[#443737] text-sm sm:text-base">
                Exceptional coverage with a smooth, elegant finish that's built to last.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col animate-on-scroll"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <div className="relative overflow-hidden rounded-xl bg-white shadow-lg h-64 sm:h-72 md:h-80" style={{ backgroundColor: '#eee2e0' }}>
              {/* Color gradient display for exterior paint */}
              <div className="absolute inset-0 flex flex-col">
                <div className="h-1/3 w-full bg-gradient-to-r from-[#443737] to-[#987284]"></div>
                <div className="h-1/3 w-full bg-gradient-to-r from-[#D5AA9F] to-[#987284]"></div>
                <div className="h-1/3 w-full bg-gradient-to-r from-[#E8D5B7] to-[#F4E1D2]"></div>
                <img src={image2} alt="Paint Palette" className="w-full h-full object-contain" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold">Weather-Shield Exterior</h3>
                <p className="text-white/80 text-sm sm:text-base">Protection against elements</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-6">
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                <Badge className="bg-[#443737]/20 text-[#443737] hover:bg-[#443737]/30 border border-[#443737]/50">UV Resistant</Badge>
                <Badge className="bg-[#D5AA9F]/20 text-[#D5AA9F] hover:bg-[#D5AA9F]/30 border border-[#D5AA9F]/50">Waterproof</Badge>
                <Badge className="bg-[#987284]/20 text-[#987284] hover:bg-[#987284]/30 border border-[#987284]/50">Mold Resistant</Badge>
              </div>
              <p className="text-[#443737] text-sm sm:text-base">
                Withstands extreme weather while maintaining color integrity.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col animate-on-scroll"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-xl bg-white shadow-lg h-64 sm:h-72 md:h-80" style={{ backgroundColor: '#f9e9b9' }}>
              {/* Color gradient display for specialty paint */}
              <div className="absolute inset-0 flex flex-col">
                <div className="h-1/3 w-full bg-gradient-to-r from-[#443737] to-[#987284]"></div>
                <div className="h-1/3 w-full bg-gradient-to-r from-[#D5AA9F] to-[#987284]"></div>
                <div className="h-1/3 w-full bg-gradient-to-r from-[#E8D5B7] to-[#F4E1D2]"></div>
                <img src={image3} alt="Paint Palette" className="w-full h-full object-contain" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold">Specialty Textures</h3>
                <p className="text-white/80 text-sm sm:text-base">Creative finish options</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-6">
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                <Badge className="bg-[#E8D5B7]/20 text-[#443737] hover:bg-[#E8D5B7]/30 border border-[#E8D5B7]/50">Textured</Badge>
                <Badge className="bg-[#987284]/20 text-[#987284] hover:bg-[#987284]/30 border border-[#987284]/50">Customizable</Badge>
                <Badge className="bg-[#D5AA9F]/20 text-[#D5AA9F] hover:bg-[#D5AA9F]/30 border border-[#D5AA9F]/50">Designer</Badge>
              </div>
              <p className="text-[#443737] text-sm sm:text-base">
                Create unique textured and artistic effects for statement walls.
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-[#F4E1D2] to-[#E8D5B7]">
              <div className="text-5xl">🖌️</div>
            </div>
            <h4 className="font-poppins font-semibold text-lg mb-2 text-[#443737]">Professional Applicators</h4>
            <p className="text-[#443737]">Engineered for smooth, even application and reduced splatter</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-[#D5AA9F] to-[#987284]">
              <div className="text-5xl">🎨</div>
            </div>
            <h4 className="font-poppins font-semibold text-lg mb-2 text-[#443737]">Custom Color Matching</h4>
            <p className="text-[#443737]">Get precisely the color you envision with our advanced matching technology</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-[#443737] via-[#987284] to-[#D5AA9F]">
              <div className="text-5xl">✨</div>
            </div>
            <h4 className="font-poppins font-semibold text-lg mb-2 text-[#443737]">Specialty Finishes</h4>
            <p className="text-[#443737]">Create unique textured and designer effects for statement walls and features</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
