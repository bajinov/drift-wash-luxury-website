import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, Bike, Sparkles, Plus } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const carServices = [
    {
      name: "Basic Wash",
      hatchback: "₹499",
      suv: "₹599",
      features: ["Exterior wash", "Tire cleaning", "Interior vacuum", "Dashboard wipe"],
    },
    {
      name: "Premium Wash",
      hatchback: "₹799",
      suv: "₹849",
      features: ["Everything in Basic", "Deep interior cleaning", "Polish exterior", "Engine bay cleaning"],
      popular: true,
    },
    {
      name: "Luxury Wash",
      hatchback: "₹1,599",
      suv: "₹1,799",
      features: ["Everything in Premium", "Ceramic coating", "Leather conditioning", "Complete detailing"],
    },
  ];

  const bikeServices = [
    {
      name: "Bike Wash",
      price: "₹249",
      features: ["Complete exterior wash", "Chain lubrication option", "Polish & shine", "Tire dressing"],
    },
    {
      name: "Bike Wash + Chain Cleaning",
      price: "₹348",
      features: ["Everything in Basic", "Deep chain cleaning", "Chain lubrication", "Rust prevention"],
      popular: true,
    },
  ];

  const addons = [
    { name: "Windshield Polishing", price: "₹499", type: "All Cars" },
    { name: "Teflon Coating", price: "Varies", type: "All Cars" },
    { name: "Headlight Restoration", price: "₹499", type: "Cars" },
    { name: "Headlight Restoration", price: "₹199", type: "Bikes" },
  ];

  const whatsappNumber = "919962021310";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to book a service. Can you help me with the details?");

  return (
    <section id="services" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Premium <span className="text-primary">Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of professional car and bike wash packages, designed to meet every need.
          </p>
        </motion.div>

        {/* Car Services */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
              <Car className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Car Wash Services</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {carServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`p-6 h-full gradient-card shadow-card hover:shadow-luxury transition-smooth relative ${service.popular ? 'border-2 border-primary' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold mb-3">{service.name}</h4>
                    <div className="flex justify-center items-center space-x-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Hatchback & Sedan</p>
                        <p className="text-3xl font-bold text-primary">{service.hatchback}</p>
                      </div>
                      <div className="w-px h-12 bg-border"></div>
                      <div>
                        <p className="text-sm text-muted-foreground">SUV</p>
                        <p className="text-3xl font-bold text-primary">{service.suv}</p>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <Sparkles className="w-4 h-4 text-success flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    asChild
                  >
                    <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bike Services */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
              <Bike className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Bike Wash Services</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {bikeServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className={`p-6 h-full gradient-card shadow-card hover:shadow-luxury transition-smooth relative ${service.popular ? 'border-2 border-primary' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                      Recommended
                    </Badge>
                  )}
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold mb-2">{service.name}</h4>
                    <p className="text-4xl font-bold text-primary">{service.price}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <Sparkles className="w-4 h-4 text-success flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    asChild
                  >
                    <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-secondary/50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Plus className="w-5 h-5 text-primary" />
              <span className="font-semibold">Add-ons</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">Enhance Your Service</h3>
            <p className="text-muted-foreground">Premium add-ons to give your vehicle extra care</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {addons.map((addon, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-card text-center">
                <Badge variant="outline" className="mb-3">{addon.type}</Badge>
                <h4 className="font-semibold mb-2">{addon.name}</h4>
                <p className="text-2xl font-bold text-primary">{addon.price}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
