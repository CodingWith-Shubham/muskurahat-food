import { motion } from 'framer-motion';
import { Camera, Heart, Utensils, Users, Truck, Gift } from 'lucide-react';

const GallerySection = () => {
  // Placeholder gallery items with categories
  const galleryItems = [
    {
      id: 1,
      category: 'meals',
      title: 'Traditional Veg Thali',
      description: 'Complete home-style meal with dal, rice, roti, and sabzi',
      icon: <Utensils className="h-6 w-6" />
    },
    {
      id: 2,
      category: 'delivery',
      title: 'Fresh Delivery',
      description: 'Hot meals delivered fresh to your doorstep',
      icon: <Truck className="h-6 w-6" />
    },
    {
      id: 3,
      category: 'customers',
      title: 'Happy Customers',
      description: 'Smiling faces enjoying our homely meals',
      icon: <Heart className="h-6 w-6" />
    },
    {
      id: 4,
      category: 'meals',
      title: 'Special Seasonal Menu',
      description: 'Authentic recipes with traditional flavors',
      icon: <Utensils className="h-6 w-6" />
    },
    {
      id: 5,
      category: 'charity',
      title: 'NGO Work',
      description: 'Supporting communities through our charity initiatives',
      icon: <Gift className="h-6 w-6" />
    },
    {
      id: 6,
      category: 'customers',
      title: 'Family Meals',
      description: 'Bringing families together with delicious food',
      icon: <Users className="h-6 w-6" />
    },
    {
      id: 7,
      category: 'meals',
      title: 'Fresh Ingredients',
      description: 'Quality ingredients sourced with care',
      icon: <Utensils className="h-6 w-6" />
    },
    {
      id: 8,
      category: 'delivery',
      title: 'On-time Service',
      description: 'Reliable delivery you can count on',
      icon: <Truck className="h-6 w-6" />
    }
  ];

  const categories = [
    { id: 'all', name: 'All', color: 'primary' },
    { id: 'meals', name: 'Our Meals', color: 'accent' },
    { id: 'delivery', name: 'Delivery', color: 'highlight' },
    { id: 'customers', name: 'Happy Customers', color: 'primary' },
    { id: 'charity', name: 'Charity Work', color: 'accent' }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20',
          hover: 'hover:bg-primary hover:text-primary-foreground'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          border: 'border-accent/20',
          hover: 'hover:bg-accent hover:text-accent-foreground'
        };
      case 'highlight':
        return {
          bg: 'bg-highlight/10',
          text: 'text-highlight',
          border: 'border-highlight/20',
          hover: 'hover:bg-highlight hover:text-highlight-foreground'
        };
      default:
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20',
          hover: 'hover:bg-primary hover:text-primary-foreground'
        };
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Our Gallery
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            A glimpse into our journey of serving homely meals, happy customers, and meaningful charity work
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full border-2 ${colorClasses.bg} ${colorClasses.text} ${colorClasses.border} ${colorClasses.hover} font-poppins font-medium transition-all duration-200`}
              >
                {category.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => {
            const categoryColor = categories.find(cat => cat.id === item.category)?.color || 'primary';
            const colorClasses = getColorClasses(categoryColor);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
                  {/* Image Placeholder with Gradient */}
                  <div className={`h-48 ${colorClasses.bg} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                    <div className={`w-16 h-16 ${colorClasses.text} relative z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-200`}>
                      {item.icon}
                    </div>
                    
                    {/* Camera Icon Overlay */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-card/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Camera className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-poppins font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Category Badge */}
                    <div className={`inline-flex items-center space-x-1 mt-3 px-3 py-1 ${colorClasses.bg} ${colorClasses.text} rounded-full text-xs font-poppins font-medium`}>
                      <span className={`w-2 h-2 ${colorClasses.text === 'text-primary' ? 'bg-primary' : colorClasses.text === 'text-accent' ? 'bg-accent' : 'bg-highlight'} rounded-full`}></span>
                      <span>{categories.find(cat => cat.id === item.category)?.name}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Gallery Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-primary mb-2">50+</h3>
            <p className="text-muted-foreground font-inter">Delicious Dishes</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-accent mb-2">5000+</h3>
            <p className="text-muted-foreground font-inter">Happy Moments</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-highlight/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-highlight" />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-highlight mb-2">15000+</h3>
            <p className="text-muted-foreground font-inter">Successful Deliveries</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-primary mb-2">50+</h3>
            <p className="text-muted-foreground font-inter">Charity Projects</p>
          </div>
        </motion.div>

        {/* Note about Real Photos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-card border border-border rounded-2xl p-6 max-w-2xl mx-auto">
            <Camera className="h-8 w-8 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground font-inter">
              <span className="font-semibold text-foreground">Gallery Coming Soon!</span><br />
              We're currently capturing beautiful moments of our meals, deliveries, and charity work. 
              Real photos of our delicious food and happy customers will be added here soon.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;