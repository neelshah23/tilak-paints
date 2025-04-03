import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import imageBucket1 from "@assets/WhatsApp Image 2025-04-02 at 15.32.19.jpeg";
import imageBucket2 from "@assets/WhatsApp Image 2025-04-02 at 15.32.19 (1).jpeg";

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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 animate-on-scroll"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-primary font-medium uppercase tracking-wider">Product Showcase</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mt-4 mb-6">
            Professional <span className="text-primary">Paint Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our premium paint products are designed to exceed expectations for both professionals and DIY enthusiasts.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="flex flex-col animate-on-scroll"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={imageBucket1} 
                alt="Professional paint buckets and supplies" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-poppins font-semibold">Premium Interior Collection</h3>
                <p className="text-white/80">Perfect for living spaces and high-traffic areas</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-red-100 text-red-600 hover:bg-red-200">Stain Resistant</Badge>
                <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200">Washable</Badge>
                <Badge className="bg-green-100 text-green-600 hover:bg-green-200">Low VOC</Badge>
              </div>
              <p className="text-gray-600">
                Our interior collection offers exceptional coverage with a smooth, elegant finish that's built to last.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col animate-on-scroll"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={imageBucket2} 
                alt="Professional painting tools and equipment" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-poppins font-semibold">Weather-Shield Exterior Line</h3>
                <p className="text-white/80">Advanced protection against the elements</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-yellow-100 text-yellow-600 hover:bg-yellow-200">UV Resistant</Badge>
                <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200">Waterproof</Badge>
                <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-200">Mold Resistant</Badge>
              </div>
              <p className="text-gray-600">
                Designed to withstand extreme weather conditions while maintaining color integrity and surface protection.
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
            <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100">
              <div className="text-5xl text-primary">🖌️</div>
            </div>
            <h4 className="font-poppins font-semibold text-lg mb-2">Professional Applicators</h4>
            <p className="text-gray-600">Engineered for smooth, even application and reduced splatter</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100">
              <div className="text-5xl text-primary">🎨</div>
            </div>
            <h4 className="font-poppins font-semibold text-lg mb-2">Custom Color Matching</h4>
            <p className="text-gray-600">Get precisely the color you envision with our advanced matching technology</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-green-100 to-teal-100">
              <div className="text-5xl text-primary">✨</div>
            </div>
            <h4 className="font-poppins font-semibold text-lg mb-2">Specialty Finishes</h4>
            <p className="text-gray-600">Create unique textured and designer effects for statement walls and features</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
