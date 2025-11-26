import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Clock, MapPin, Shield } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Professional-grade products and techniques",
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "No traffic, no waiting, just convenience",
    },
    {
      icon: MapPin,
      title: "Doorstep Service",
      description: "We come to you, wherever you are",
    },
    {
      icon: Shield,
      title: "Trusted Service",
      description: "Experienced professionals you can rely on",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Luxury Care, <span className="text-primary">Delivered</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Drift Wash brings premium car and bike washing services directly to your doorstep in Chennai. 
            We combine professional expertise with luxury service standards to give your vehicle the care it deserves.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-card hover:shadow-luxury transition-smooth text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quotes Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-bold mb-4 italic">
            "We wash, you relax"
          </blockquote>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Why waste hours in traffic and waiting at detailing centers? 
            Let us bring professional car care to your doorstep while you focus on what matters most.
          </p>
        </motion.div>

        {/* Service Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-card p-8 rounded-2xl shadow-card text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Service Coverage</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5 text-success" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">OMR Road</h4>
                <p className="text-muted-foreground">Free doorstep service throughout OMR corridor</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">All Chennai</h4>
                <p className="text-muted-foreground">₹5 per km charge for areas outside OMR</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
