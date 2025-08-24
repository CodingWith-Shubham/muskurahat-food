import { motion } from 'framer-motion';
import { Heart, Users, Gift, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CharitySection = () => {
  return (
    <section id="charity" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Profit with Purpose
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            We donate 10% of every profit to NGO work, spreading smiles beyond the plate
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">
                    Food with Purpose
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    Every meal you order contributes to our social impact mission. We believe in 
                    creating positive change in our community while serving delicious food.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">
                    Community Support
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    Through our NGO partnerships, we support education, healthcare, and food 
                    security initiatives for underprivileged communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-highlight/10 rounded-full">
                  <Gift className="h-6 w-6 text-highlight" />
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">
                    Transparent Impact
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    We share regular updates about our charitable activities and how your 
                    orders are making a difference in people's lives.
                  </p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-poppins font-semibold px-8"
            >
              Learn More About Our NGO Work
            </Button>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-2xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-foreground mb-2">10%</h3>
                <p className="text-sm text-muted-foreground">of profits donated</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-2xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-poppins font-semibold text-foreground mb-2">500+</h3>
                <p className="text-sm text-muted-foreground">families supported</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-2xl p-6 shadow-lg col-span-2"
              >
                <div className="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center mb-4">
                  <Smile className="h-6 w-6 text-highlight" />
                </div>
                <h3 className="font-poppins font-semibold text-foreground mb-2">Spreading Smiles</h3>
                <p className="text-sm text-muted-foreground">
                  Every order helps us support education, healthcare, and food security for those in need
                </p>
              </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/5 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/5 rounded-full -z-10"></div>
          </motion.div>
        </div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-card rounded-3xl p-8 shadow-lg"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-playfair font-bold text-primary mb-2">₹2,50,000</h3>
              <p className="text-muted-foreground font-inter">Total donated</p>
            </div>
            <div>
              <h3 className="text-3xl font-playfair font-bold text-accent mb-2">15,000+</h3>
              <p className="text-muted-foreground font-inter">Meals served</p>
            </div>
            <div>
              <h3 className="text-3xl font-playfair font-bold text-highlight mb-2">50+</h3>
              <p className="text-muted-foreground font-inter">NGO projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-playfair font-bold text-primary mb-2">3</h3>
              <p className="text-muted-foreground font-inter">Years of impact</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CharitySection;