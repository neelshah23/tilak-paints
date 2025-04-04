import { motion } from "framer-motion";
import { Building2, Home, PaintBucket, Layers, CheckCircle, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#F4E1D2]/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium uppercase tracking-wider">Our Professional Services</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mt-4 mb-6 text-[#443737]">
            Complete <span className="text-primary">Painting Solutions</span>
          </h2>
          <p className="text-lg text-[#443737] max-w-3xl mx-auto">
            From interior decoration to multi-building projects across India, we deliver exceptional quality at reasonable prices.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Interior Decoration */}
          <motion.div 
            className="bg-white rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-4 bg-gradient-to-r from-[#987284] to-[#D5AA9F]"></div>
            <div className="p-6 md:p-8">
              <div className="w-14 h-14 bg-[#987284]/10 rounded-full flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-[#987284]" />
              </div>
              
              <h3 className="text-2xl font-poppins font-bold mb-4 text-[#443737]">Interior Decoration Services</h3>
              
              <p className="text-[#443737] mb-6">
                Transform your living spaces with our expert interior decoration services. We provide complete solutions from color consultation to final application with precision and care.
              </p>
              
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#987284] mt-0.5 flex-shrink-0" />
                  <p className="text-[#443737]">Professional color consultation and theme planning</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#987284] mt-0.5 flex-shrink-0" />
                  <p className="text-[#443737]">Texture and specialty finishes for unique wall designs</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#987284] mt-0.5 flex-shrink-0" />
                  <p className="text-[#443737]">Kid-safe, low VOC options for bedrooms and living areas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#987284] mt-0.5 flex-shrink-0" />
                  <p className="text-[#443737]">Moisture-resistant solutions for kitchens and bathrooms</p>
                </div>
              </div>
              
              <div className="p-4 bg-[#F4E1D2]/30 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-[#443737]">Starting price</h4>
                  <div className="flex items-center text-[#443737] font-bold">
                    <IndianRupee className="w-4 h-4 mr-1" />
                    <span>20</span> /sq.ft
                  </div>
                </div>
                <p className="text-sm text-[#443737]/70">
                  *Prices vary based on paint quality, wall condition, and design complexity
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Multi-Building Projects */}
          <motion.div 
            className="bg-white rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-4 bg-gradient-to-r from-[#D5AA9F] to-[#E8D5B7]"></div>
            <div className="p-6 md:p-8">
              <div className="w-14 h-14 bg-[#D5AA9F]/10 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-[#D5AA9F]" />
              </div>
              
              <h3 className="text-2xl font-poppins font-bold mb-4 text-[#443737]">Multi-Building Solutions</h3>
              
              <p className="text-[#443737] mb-6">
                We specialize in large-scale painting projects for residential complexes, commercial buildings, and institutions across India with competitive pricing and professional execution.
              </p>
              
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D5AA9F] mt-0.5 flex-shrink-0" />
                  <p className="text-[#443737]">Specialized equipment for high-rise and multi-story buildings</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D5AA9F] mt-0.5 flex-shrink-0" />
                  <p className="text-[#443737]">Weather-resistant exterior paints with 5+ years warranty</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D5AA9F] mt-0.5 flex-shrink-0" />
                  <p className="text-[#443737]">Bulk project discounts and flexible payment terms</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D5AA9F] mt-0.5 flex-shrink-0" />
                  <p className="text-[#443737]">Experienced teams that work efficiently with minimal disruption</p>
                </div>
              </div>
              
              <div className="p-4 bg-[#F4E1D2]/30 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-[#443737]">Commercial rates</h4>
                  <div className="flex items-center text-[#443737] font-bold">
                    <IndianRupee className="w-4 h-4 mr-1" />
                    <span>15-18</span> /sq.ft
                  </div>
                </div>
                <p className="text-sm text-[#443737]/70">
                  *Special pricing for projects over 10,000 sq.ft - contact for custom quote
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-12 h-12 bg-[#987284]/10 rounded-full flex items-center justify-center mb-4">
              <PaintBucket className="w-6 h-6 text-[#987284]" />
            </div>
            <h4 className="font-poppins font-semibold text-lg mb-2 text-[#443737]">Weatherproofing</h4>
            <p className="text-[#443737] mb-4">Advanced solutions to protect your exteriors from India's extreme monsoon conditions and summer heat.</p>
            <div className="flex items-center text-[#443737] font-medium">
              <IndianRupee className="w-3.5 h-3.5 mr-1" />
              <span>22-30</span> <span className="text-sm ml-1">/sq.ft</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-[#D5AA9F]/10 rounded-full flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-[#D5AA9F]" />
            </div>
            <h4 className="font-poppins font-semibold text-lg mb-2 text-[#443737]">Textured Finishes</h4>
            <p className="text-[#443737] mb-4">Decorative textures including stucco, distressed, and geometric patterns for unique interior designs.</p>
            <div className="flex items-center text-[#443737] font-medium">
              <IndianRupee className="w-3.5 h-3.5 mr-1" />
              <span>35-60</span> <span className="text-sm ml-1">/sq.ft</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-[#E8D5B7]/10 rounded-full flex items-center justify-center mb-4">
              <Home className="w-6 h-6 text-[#E8D5B7]" />
            </div>
            <h4 className="font-poppins font-semibold text-lg mb-2 text-[#443737]">Renovation Packages</h4>
            <p className="text-[#443737] mb-4">Complete home renovation services including painting, woodwork polishing and minor repairs.</p>
            <div className="flex items-center text-[#443737] font-medium">
              <span className="text-sm">Customized quotes</span>
            </div>
          </motion.div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Button className="bg-[#987284] hover:bg-[#D5AA9F] text-white px-8 py-6 h-auto rounded-lg text-lg font-semibold shadow-lg">
            Get a Free Estimate
          </Button>
          <p className="mt-4 text-[#443737]">No obligation quotes • Free color consultation • Serving all major cities in India</p>
        </motion.div>
      </div>
    </section>
  );
}