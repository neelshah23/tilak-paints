import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// Color swatch data with new color palette
const colorSwatches = [
  // Main brand colors
  { name: "Rich Earth", hex: "#443737", category: ["all", "brand", "neutrals", "bold"] },
  { name: "Mauve Rose", hex: "#987284", category: ["all", "brand", "warm"] },
  { name: "Terra Blush", hex: "#D5AA9F", category: ["all", "brand", "warm"] },
  { name: "Wheat Gold", hex: "#E8D5B7", category: ["all", "brand", "neutrals"] },
  { name: "Soft Peach", hex: "#F4E1D2", category: ["all", "brand", "neutrals", "trending"] },
  
  // Additional variations and complementary colors
  { name: "Deep Plum", hex: "#5D4954", category: ["all", "warm", "bold"] },
  { name: "Sandy Rose", hex: "#C69C95", category: ["all", "warm"] },
  { name: "Almond Cream", hex: "#EFE6DC", category: ["all", "neutrals"] },
  { name: "Olive Stone", hex: "#74685A", category: ["all", "neutrals", "cool"] },
  { name: "Rosewood", hex: "#A86B5F", category: ["all", "warm", "trending"] },
  { name: "Misty Sage", hex: "#C5C8B8", category: ["all", "cool", "neutrals"] },
  { name: "Rustic Terracotta", hex: "#B56B4D", category: ["all", "warm", "bold", "trending"] },
];

const colorCategories = [
  { id: "all", name: "All Colors" },
  { id: "brand", name: "Brand Colors" },
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4E1D2] rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8D5B7] rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium uppercase tracking-wider">Discover Your Palette</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mt-4 mb-6 text-[#443737]">
            Explore <span className="text-primary">Curated Color Collections</span>
          </h2>
          <p className="text-lg text-[#443737] max-w-3xl mx-auto">
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
                    : "bg-[#F4E1D2]/30 text-[#443737] hover:bg-[#F4E1D2]/50 border-none"
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
                <h4 className="font-medium text-sm text-[#443737]">{swatch.name}</h4>
                <span className="text-xs text-[#443737]/70">{swatch.hex}</span>
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
          <a href="#contact">
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
