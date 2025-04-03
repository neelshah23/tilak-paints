import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertWaitlistSchema } from "@shared/schema";
import { Check, ArrowRight, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

// Extend the insertWaitlistSchema with validation rules
const formSchema = insertWaitlistSchema.extend({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  interest: z.string().min(1, { message: "Please select your interest" }),
  marketing: z.boolean().refine(val => val === true, {
    message: "You must agree to receive communications",
  }),
});

export default function WaitlistSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      marketing: false,
    },
  });
  
  // Define waitlist mutation
  const waitlistMutation = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      // Remove marketing field before sending to API
      const { marketing, ...submitData } = data;
      
      const res = await apiRequest('POST', '/api/waitlist', submitData);
      return await res.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll be in touch soon!",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to join the waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  // Form submit handler
  function onSubmit(data: z.infer<typeof formSchema>) {
    waitlistMutation.mutate(data);
  }
  
  return (
    <section id="waitlist" className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-indigo-500/10 relative">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <motion.div 
                className="p-8 md:p-12 animate-on-scroll"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-medium uppercase tracking-wider">Limited Availability</span>
                <h2 className="text-3xl font-poppins font-bold mt-4 mb-6">
                  Join Our Exclusive Waitlist
                </h2>
                <p className="text-gray-600 mb-8">
                  Be among the first to experience Tilak Paints. Early waitlist members receive:
                </p>
                <ul className="mb-8">
                  {[
                    "25% discount on your first order",
                    "Free color consultation session",
                    "Premium app subscription (1 year)",
                    "Early access to new products"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start mb-4">
                      <div className="bg-green-100 rounded-full p-1 text-green-500 mr-3 flex items-center justify-center h-6 w-6">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center mb-6">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">JD</div>
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">MT</div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">KL</div>
                  </div>
                  <span className="text-sm text-gray-500">500+ professionals already joined</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="p-8 md:p-12 bg-gray-50 animate-on-scroll"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-poppins font-semibold text-xl mb-6">Sign Up for Early Access</h3>
                
                {isSubmitted ? (
                  <div className="p-6 bg-green-50 text-green-700 rounded-lg border border-green-200">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 rounded-full p-1 mr-3">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="text-lg font-semibold">Thank You!</h4>
                    </div>
                    <p className="mb-4">
                      You've been successfully added to our waitlist. We appreciate your interest in Tilak Paints!
                    </p>
                    <p>
                      We'll be in touch soon with exclusive updates and early access information.
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="(123) 456-7890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="interest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>I'm interested in</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your interest" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="interior">Interior Paint</SelectItem>
                                <SelectItem value="exterior">Exterior Paint</SelectItem>
                                <SelectItem value="both">Both Interior & Exterior</SelectItem>
                                <SelectItem value="professional">Professional Use</SelectItem>
                                <SelectItem value="commercial">Commercial Applications</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="marketing"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I agree to receive product updates and marketing communications. 
                                You can unsubscribe at any time.
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full flex items-center justify-center gap-2"
                        disabled={waitlistMutation.isPending}
                      >
                        {waitlistMutation.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <span>Join the Waitlist</span>
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
