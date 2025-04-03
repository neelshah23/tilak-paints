import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// Color swatch data
const colorSwatches = [
  { name: "Sky Blue", hex: "#E6F2FF", category: ["all", "cool"] },
  { name: "Blush Pink", hex: "#F9E8E8", category: ["all", "warm"] },
  { name: "Fresh Mint", hex: "#EFF8E2", category: ["all", "cool", "trending"] },
  { name: "Soft Cream", hex: "#FFF8E1", category: ["all", "neutrals"] },
  { name: "Lavender Mist", hex: "#F2E8F7", category: ["all", "cool"] },
  { name: "Aqua Breeze", hex: "#E6FFFA", category: ["all", "cool"] },
  { name: "Navy Depth", hex: "#2B4570", category: ["all", "cool", "bold"] },
  { name: "Warm Walnut", hex: "#7E6551", category: ["all", "warm", "neutrals"] },
  { name: "Forest Sage", hex: "#4A6C6F", category: ["all", "cool"] },
  { name: "Coral Splash", hex: "#F2545B", category: ["all", "warm", "bold", "trending"] },
  { name: "Misty Green", hex: "#A3BCB6", category: ["all", "neutrals", "cool"] },
  { name: "Sunlight", hex: "#FFEAA7", category: ["all", "warm", "trending"] },
];

const colorCategories = [
  { id: "all", name: "All Colors" },
  { id: "neutrals", name: "Neutrals" },
  { id: "warm", name: "Warm Tones" },
  { id: "cool", name: "Cool Tones" },
  { id: "bold", name: "Bold Accents" },
  { id: "trending", name: "Trending Now" },
];

export default function ColorPalette() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredColors = colorSwatches.filter(swatch => 
    swatch.category.includes(activeCategory)
  );
  
  return (
    <section id="colors" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium uppercase tracking-wider">Discover Your Palette</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mt-4 mb-6">
            Explore <span className="text-primary">Curated Color Collections</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From timeless neutrals to bold statement hues, find the perfect colors for your next project.
          </p>
        </motion.div>
        
        <motion.div 
          className="mb-12 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {colorCategories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`rounded-full text-sm font-medium ${
                  activeCategory === category.id 
                    ? "" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-none"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, staggerChildren: 0.05 }}
        >
          {filteredColors.map((swatch, index) => (
            <motion.div 
              key={index}
              className="color-swatch relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="h-32" style={{ backgroundColor: swatch.hex }}></div>
              <div className="p-3 bg-white">
                <h4 className="font-medium text-sm">{swatch.name}</h4>
                <span className="text-xs text-gray-500">{swatch.hex}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <a href="#waitlist">
            <Button className="inline-flex items-center justify-center gap-2">
              <span>Get Custom Color Recommendations</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
