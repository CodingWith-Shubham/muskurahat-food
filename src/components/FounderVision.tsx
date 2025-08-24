import { motion } from 'framer-motion';
import { Quote, Heart, Target, Users } from 'lucide-react';

const FounderVision = () => {
  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-secondary/50 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Founder's Vision
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            A message from our founder about our mission of compassion and purpose
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Founder Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-card rounded-full flex items-center justify-center shadow-xl">
                  <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-24 w-24 text-primary" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-highlight/20 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-highlight" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-playfair font-bold text-primary">
                Pankaj Dhondiyal
              </h3>
              <p className="text-lg text-accent font-poppins font-semibold">
                MBA, Founder
              </p>
              <p className="text-muted-foreground font-inter">
                Muskurahat Food Services
              </p>
            </div>
          </motion.div>

          {/* Right Content - Vision Statement */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative bg-card rounded-3xl p-8 shadow-xl">
              <Quote className="h-12 w-12 text-primary/20 absolute top-4 left-4" />
              
              <blockquote className="text-lg text-foreground font-inter leading-relaxed pt-8">
                "I run a self-funded NGO and carry a powerful vision for prosperity built on compassion. 
                In today's world, people are surrounded by unhealthy food habits. Through Muskurahat Food, 
                my mission is to supply clean, pure, and healthy meals that not only nourish the body but 
                also support society.
                <br /><br />
                With every meal we serve, we deliver purity on the plate and smiles in the heart. 
                Our vision is simple – <span className="text-primary font-semibold">Food with Purpose, Profit with Charity.</span>"
              </blockquote>
              
              <div className="flex items-center justify-end mt-6">
                <div className="text-right">
                  <p className="font-poppins font-semibold text-primary">– Pankaj Dhondiyal</p>
                  <p className="text-sm text-muted-foreground">MBA, Founder</p>
                </div>
              </div>
            </div>

            {/* Vision Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-poppins font-semibold text-foreground mb-2">Compassion</h4>
                <p className="text-sm text-muted-foreground">Built on care and empathy</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-poppins font-semibold text-foreground mb-2">Purpose</h4>
                <p className="text-sm text-muted-foreground">Every meal has meaning</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-highlight" />
                </div>
                <h4 className="font-poppins font-semibold text-foreground mb-2">Community</h4>
                <p className="text-sm text-muted-foreground">Supporting society together</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderVision;