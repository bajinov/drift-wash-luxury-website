import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, Sparkles, Leaf, Phone, Star } from "lucide-react";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Shield,
      title: "Professional Service",
      description: "Trained experts handle your vehicle with care and precision",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Clock,
      title: "Time Saving",
      description: "No travel, no waiting - we come to you at your convenience",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      description: "High-quality cleaning agents that protect your vehicle",
      color: "text-highlight",
      bgColor: "bg-highlight/10",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Water-efficient methods that care for the environment",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: Phone,
      title: "Easy Booking",
      description: "Simple WhatsApp booking - no app downloads needed",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Star,
      title: "Competitive Pricing",
      description: "Premium service at affordable rates with transparent pricing",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            The <span className="text-primary">Drift Wash</span> Difference
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience luxury car care with the convenience of doorstep service and the expertise of professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-luxury transition-smooth h-full">
                <div className={`w-16 h-16 ${reason.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                  <reason.icon className={`w-8 h-8 ${reason.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5000+</div>
              <div className="text-lg opacity-90">Vehicles Serviced</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.9★</div>
              <div className="text-lg opacity-90">Customer Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
