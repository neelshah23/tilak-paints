import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "The color consistency is remarkable. For the first time, I was able to match a client's existing decor perfectly without endless sampling. The app integration made visualization so much easier.",
    name: "Sarah Johnson",
    role: "Interior Designer",
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
  },
  {
    rating: 5,
    text: "As a contractor, I need paint that performs. One-coat coverage is a game-changer for my business, saving time and labor costs while delivering exceptional results for my clients.",
    name: "Michael Rodriguez",
    role: "Painting Contractor",
    avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
  },
  {
    rating: 4.5,
    text: "After trying multiple eco-friendly paints that didn't perform, Tilak Paints delivered both the environmental standards I wanted and the durability my family needs. Worth every penny.",
    name: "Emily Chen",
    role: "Homeowner",
    avatarSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium uppercase tracking-wider">Customer Stories</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mt-4 mb-6">
            What <span className="text-primary">Professionals Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from designers, contractors, and homeowners who've experienced the Tilak Paints difference.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-on-scroll"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="text-yellow-400 flex">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} className="fill-current" />
                  ))}
                  {testimonial.rating % 1 > 0 && (
                    <div className="relative">
                      <Star className="text-gray-300" />
                      <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '50%' }}>
                        <Star className="fill-current text-yellow-400" />
                      </div>
                    </div>
                  )}
                </div>
                <span className="ml-2 text-gray-500">{testimonial.rating.toFixed(1)}</span>
              </div>
              <p className="text-gray-600 mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img src={testimonial.avatarSrc} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
