import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import image1 from '@assets/image1.png';
import image2 from '@assets/image2.png';
import image3 from '@assets/image3.png';
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Paint product data array
const productData = [
  {
    id: 1,
    image: image1,
    bgColor: '#e9e5e1',
    title: "Premium Interior Collection",
    subtitle: "Perfect for living spaces",
    badges: [
      { color: "#D5AA9F", text: "Stain Resistant" },
      { color: "#987284", text: "Washable" },
      { color: "#E8D5B7", text: "Low VOC", darkText: true }
    ],
    description: "Exceptional coverage with a smooth, elegant finish that's built to last."
  },
  {
    id: 2,
    image: image2,
    bgColor: '#eee2e0',
    title: "Weather-Shield Exterior",
    subtitle: "Protection against elements",
    gradients: [
      { from: "#443737", to: "#987284" },
      { from: "#D5AA9F", to: "#987284" },
      { from: "#E8D5B7", to: "#F4E1D2" }
    ],
    badges: [
      { color: "#443737", text: "UV Resistant", darkText: true },
      { color: "#D5AA9F", text: "Waterproof" },
      { color: "#987284", text: "Mold Resistant" }
    ],
    description: "Withstands extreme weather while maintaining color integrity."
  },
  {
    id: 3,
    image: image3,
    bgColor: '#f9e9b9',
    title: "Specialty Textures",
    subtitle: "Creative finish options",
    gradients: [
      { from: "#443737", to: "#987284" },
      { from: "#D5AA9F", to: "#987284" },
      { from: "#E8D5B7", to: "#F4E1D2" }
    ],
    badges: [
      { color: "#E8D5B7", text: "Textured", darkText: true },
      { color: "#987284", text: "Customizable" },
      { color: "#D5AA9F", text: "Designer" }
    ],
    description: "Create unique textured and artistic effects for statement walls."
  },
  {
    id: 4,
    image: image1,
    bgColor: '#edf2f7',
    title: "Luxury Emulsion Series",
    subtitle: "Premium finishes",
    badges: [
      { color: "#987284", text: "High Durability" },
      { color: "#D5AA9F", text: "Scuff Resistant" },
      { color: "#443737", text: "Rich Pigment", darkText: true }
    ],
    description: "Our highest quality interior paint with superior coverage and durability."
  },
  {
    id: 5,
    image: image2,
    bgColor: '#f0e5e9',
    title: "Kids Room Special",
    subtitle: "Safe for children",
    gradients: [
      { from: "#D5AA9F", to: "#F4E1D2" },
      { from: "#E8D5B7", to: "#F4E1D2" },
      { from: "#987284", to: "#D5AA9F" }
    ],
    badges: [
      { color: "#D5AA9F", text: "Non-Toxic" },
      { color: "#E8D5B7", text: "Washable", darkText: true },
      { color: "#987284", text: "Easy Clean" }
    ],
    description: "Specially formulated for children's rooms with zero VOC and easy cleaning."
  },
  {
    id: 6,
    image: image3,
    bgColor: '#e0e4e5',
    title: "Commercial Strength",
    subtitle: "For high-traffic areas",
    gradients: [
      { from: "#443737", to: "#987284" },
      { from: "#987284", to: "#D5AA9F" },
      { from: "#D5AA9F", to: "#E8D5B7" }
    ],
    badges: [
      { color: "#443737", text: "Heavy Duty", darkText: true },
      { color: "#987284", text: "Anti-Microbial" },
      { color: "#D5AA9F", text: "Scrub Resistant" }
    ],
    description: "Designed for commercial spaces with exceptional durability and cleaning resistance."
  },
  {
    id: 7,
    image: image1,
    bgColor: '#f7f6f1',
    title: "Eco-Friendly Range",
    subtitle: "Sustainable solutions",
    badges: [
      { color: "#E8D5B7", text: "Plant-Based", darkText: true },
      { color: "#987284", text: "Low Carbon" },
      { color: "#D5AA9F", text: "Recyclable" }
    ],
    description: "Our environmentally conscious paint line made with sustainable ingredients."
  },
  {
    id: 8,
    image: image2,
    bgColor: '#f5eae5',
    title: "Designer Metallics",
    subtitle: "Luxury accent finishes",
    gradients: [
      { from: "#987284", to: "#D5AA9F" },
      { from: "#D5AA9F", to: "#E8D5B7" },
      { from: "#E8D5B7", to: "#F4E1D2" }
    ],
    badges: [
      { color: "#987284", text: "Metallic Sheen" },
      { color: "#D5AA9F", text: "Light Reflective" },
      { color: "#E8D5B7", text: "Premium Finish", darkText: true }
    ],
    description: "Add elegance with our premium metallic finishes for accent walls and features."
  }
];

export default function ProductShowcase() {
  // Optional state for active item (could be used for additional features)
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="products" className="py-16 md:py-24 bg-[#F4E1D2]/20">
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
        
        {/* Product Carousel */}
        <div className="mb-16 relative">
          <Carousel
            opts={{ 
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {productData.map((product, index) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    className="flex flex-col h-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 % 0.3 }}
                  >
                    <div 
                      className="relative overflow-hidden rounded-xl bg-white shadow-lg h-64 sm:h-72 md:h-80"
                      style={{ backgroundColor: product.bgColor }}
                    >
                      {/* Color gradient layers if present */}
                      {product.gradients && (
                        <div className="absolute inset-0 flex flex-col">
                          {product.gradients.map((gradient, i) => (
                            <div 
                              key={i}
                              className="h-1/3 w-full" 
                              style={{ background: `linear-gradient(to right, ${gradient.from}, ${gradient.to})` }}
                            />
                          ))}
                        </div>
                      )}
                      
                      {/* Product image */}
                      <img src={product.image} alt={product.title} className="w-full h-full object-contain relative z-10" />
                      
                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 z-20">
                        <h3 className="text-white text-lg sm:text-xl font-poppins font-semibold">{product.title}</h3>
                        <p className="text-white/80 text-sm sm:text-base">{product.subtitle}</p>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-6">
                      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                        {product.badges.map((badge, i) => (
                          <Badge 
                            key={i} 
                            className={`
                              ${badge.darkText ? 'text-[#443737]' : ''}
                              border
                            `}
                            style={{
                              backgroundColor: `${badge.color}20`,
                              color: badge.darkText ? '#443737' : badge.color,
                              borderColor: `${badge.color}80`
                            }}
                          >
                            {badge.text}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-[#443737] text-sm sm:text-base">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white/90 hover:bg-white" />
            <CarouselNext className="right-0 bg-white/90 hover:bg-white" />
          </Carousel>
        </div>
        
        {/* Additional product features section */}
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
