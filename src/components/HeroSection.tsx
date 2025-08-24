import { motion } from 'framer-motion';
import { Heart, Leaf, Clock, Shield, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-6xl font-playfair font-bold text-primary leading-tight"
              >
                Muskurahat Food Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl lg:text-3xl text-accent font-poppins font-semibold mt-4"
              >
                Ghar ka Swad Har Roz
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-muted-foreground font-inter leading-relaxed"
            >
              We deliver food that feels like home – pure, healthy, and filled with love.
              Every meal supports our mission of spreading smiles and helping communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-poppins font-semibold px-8 py-6 text-lg"
              >
                Order Now
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-poppins font-semibold px-8 py-6 text-lg"
              >
                Explore Menu
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-2 gap-6 pt-8"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground">Fresh & Healthy</h3>
                  <p className="text-sm text-muted-foreground">Pure ingredients</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent/10 rounded-full">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground">On-time Delivery</h3>
                  <p className="text-sm text-muted-foreground">Always fresh</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-highlight/10 rounded-full">
                  <Heart className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground">Made with Love</h3>
                  <p className="text-sm text-muted-foreground">Home-style cooking</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground">10% for Charity</h3>
                  <p className="text-sm text-muted-foreground">Social impact</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-card rounded-2xl p-6 shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Utensils className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-poppins font-semibold text-foreground mb-2">Fresh Meals</h3>
                  <p className="text-sm text-muted-foreground">Daily prepared with love</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-card rounded-2xl p-6 shadow-lg"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold text-foreground mb-2">With Love</h3>
                  <p className="text-sm text-muted-foreground">Home-style cooking</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-card rounded-2xl p-6 shadow-lg col-span-2"
                >
                  <div className="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-highlight" />
                  </div>
                  <h3 className="font-poppins font-semibold text-foreground mb-2">Profit with Purpose</h3>
                  <p className="text-sm text-muted-foreground">10% of profits support NGO work</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;