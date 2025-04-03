import { motion } from "framer-motion";
import { 
  MdPalette, 
  MdOpacity, 
  MdSecurity, 
  MdBrush, 
  MdTimer, 
  MdSmartphone 
} from "react-icons/md";

const features = [
  {
    icon: <MdPalette className="h-8 w-8" />,
    title: "Smart Color Matching",
    description: "Our proprietary color-matching technology ensures perfect color consistency across all surfaces."
  },
  {
    icon: <MdOpacity className="h-8 w-8" />,
    title: "Eco-Friendly Formula",
    description: "Low VOC, environmentally responsible paints that don't compromise on quality or durability."
  },
  {
    icon: <MdSecurity className="h-8 w-8" />,
    title: "Extended Durability",
    description: "Advanced formulation provides superior resistance to fading, staining, and wear over time."
  },
  {
    icon: <MdBrush className="h-8 w-8" />,
    title: "One-Coat Coverage",
    description: "Save time and resources with our high-opacity formula that covers completely with a single application."
  },
  {
    icon: <MdTimer className="h-8 w-8" />,
    title: "Quick Drying",
    description: "Fast-drying technology allows multiple coats in a single day without compromising quality."
  },
  {
    icon: <MdSmartphone className="h-8 w-8" />,
    title: "Mobile App Integration",
    description: "Our companion app helps you visualize colors in your space before painting a single stroke."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mt-4 mb-6">
            Revolutionary Paint <span className="text-primary">Features</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tilak Paints combines technology and art to create the ultimate painting experience for professionals and homeowners alike.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-on-scroll"
              variants={item}
            >
              <div className="text-primary text-3xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
