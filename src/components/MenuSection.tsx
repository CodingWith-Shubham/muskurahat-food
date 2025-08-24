import { motion } from 'framer-motion';
import { Leaf, Clock, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const MenuSection = () => {
  const menuItems = [
    {
      name: 'Traditional Veg Thali',
      description: 'Complete home-style meal with dal, rice, roti, sabzi, and pickle',
      price: '₹120-150',
      features: ['100% Vegetarian', 'Fresh Daily', 'Complete Nutrition'],
      icon: <Leaf className="h-6 w-6" />,
    },
    {
      name: 'Special Meals',
      description: 'Seasonal specials with traditional recipes and authentic flavors',
      price: '₹180-220',
      features: ['Seasonal Menu', 'Traditional Recipes', 'Premium Quality'],
      icon: <Star className="h-6 w-6" />,
    },
    {
      name: 'Quick Lunch Box',
      description: 'Perfect for office goers with balanced nutrition and taste',
      price: '₹90-120',
      features: ['Quick Delivery', 'Office Friendly', 'Balanced Nutrition'],
      icon: <Clock className="h-6 w-6" />,
    },
    {
      name: 'Family Pack',
      description: 'Generous portions for families, served with love and care',
      price: '₹300-400',
      features: ['Family Size', 'Value for Money', 'Made with Love'],
      icon: <Heart className="h-6 w-6" />,
    },
  ];

  return (
    <section id="menu" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Our Menu & Services
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Every meal is prepared with fresh ingredients and served with the warmth of home cooking
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">
                      {item.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-poppins font-semibold text-foreground">
                    {item.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground font-inter">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <span className="text-2xl font-poppins font-bold text-accent">
                      {item.price}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground font-inter">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className="w-full bg-highlight text-highlight-foreground hover:bg-highlight/90 font-poppins font-semibold"
                  >
                    Order Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Service Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-poppins font-semibold text-foreground">100% Healthy</h3>
            <p className="text-muted-foreground font-inter">
              Fresh ingredients, no preservatives, cooked with pure ghee and love
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <Clock className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-poppins font-semibold text-foreground">On-time Delivery</h3>
            <p className="text-muted-foreground font-inter">
              Hot meals delivered fresh to your doorstep, exactly when you need them
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="w-16 h-16 bg-highlight/10 rounded-full flex items-center justify-center mx-auto">
              <Heart className="h-8 w-8 text-highlight" />
            </div>
            <h3 className="text-xl font-poppins font-semibold text-foreground">Made with Love</h3>
            <p className="text-muted-foreground font-inter">
              Every dish prepared with the same care as we cook for our own family
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;