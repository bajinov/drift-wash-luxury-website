import { Button } from "@/components/ui/button";
import { Sparkles, Phone } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-car-wash.jpg";

const Hero = () => {
  const whatsappNumber = "919962021310";
  const whatsappMessage = encodeURIComponent(
    "Hi Drift Wash! I'd like to book a car/bike wash service."
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium car wash service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-highlight" />
              <span className="text-sm font-medium">Premium Doorstep Service</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We Wash,
              <br />
              <span className="text-highlight">You Relax</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-white/90 font-medium">
              Luxury Car & Bike Wash at Your Doorstep
            </p>
            
            <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Traffic + waiting at a detailing center = lost time. <br className="hidden md:block" />
              We save both.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-luxury transition-smooth hover:scale-105"
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Now on WhatsApp
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full transition-smooth"
                asChild
              >
                <a href="#services">View Services</a>
              </Button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-success rounded-full"></span>
                <span>Free service on OMR Road</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-success rounded-full"></span>
                <span>All over Chennai available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
