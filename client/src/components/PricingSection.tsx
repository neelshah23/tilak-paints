import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Essentials Line",
    description: "Perfect for standard residential projects",
    price: "₹420",
    unit: "/liter",
    note: "Starting price, varies by color",
    features: [
      "Low VOC formulation",
      "Washable finish",
      "5-year color guarantee",
      "Basic mobile app access"
    ],
    isPopular: false
  },
  {
    name: "Professional Series",
    description: "For designers and quality-conscious homeowners",
    price: "₹540",
    unit: "/liter",
    note: "Starting price, varies by color",
    features: [
      "Zero VOC premium formulation",
      "One-coat coverage guarantee",
      "10-year color and finish warranty",
      "Full mobile app features",
      "Advanced color-matching technology"
    ],
    isPopular: true
  },
  {
    name: "Commercial Grade",
    description: "For contractors and commercial projects",
    price: "₹840",
    unit: "/liter",
    note: "Starting price, bulk discounts available",
    features: [
      "Ultra-durable commercial formulation",
      "Enhanced stain and scrub resistance",
      "15-year commercial warranty",
      "Dedicated project consultant",
      "Custom color development"
    ],
    isPopular: false
  }
];

export default function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium uppercase tracking-wider">Transparent Pricing</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mt-4 mb-6">
            Value That <span className="text-primary">Exceeds Expectations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Premium quality doesn't have to break the bank. Our innovative approach keeps costs competitive.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`${
                plan.isPopular 
                  ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-primary' 
                  : 'bg-white border border-gray-200'
              } rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col relative animate-on-scroll`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-xl">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-poppins font-semibold text-xl mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-poppins font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.unit}</span>
                </div>
                <p className="text-sm text-gray-500">{plan.note}</p>
              </div>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start mb-3">
                    <Check className="text-green-500 h-5 w-5 mt-0.5 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#waitlist">
                <Button 
                  variant={plan.isPopular ? "default" : "outline"} 
                  className={`w-full ${!plan.isPopular ? 'text-primary border-primary hover:bg-primary hover:text-white' : ''}`}
                >
                  {plan.name === "Commercial Grade" ? "Request Quote" : "Join Waitlist"}
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 mb-4">Need a custom solution for your specific project?</p>
          <a href="#contact" className="inline-flex items-center text-primary font-medium hover:underline">
            <span>Contact our team for custom pricing</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
