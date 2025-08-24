import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu/Services', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Charity', href: '#charity' },
    { name: "Founder's Vision", href: '#vision' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="flex items-center space-x-1">
              <Utensils className="h-8 w-8 text-primary" />
              <Heart className="h-6 w-6 text-accent" />
            </div>
            <div className="text-xl font-playfair font-bold text-primary">
              Muskurahat Food
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-foreground hover:text-primary transition-colors duration-200 font-inter font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <Button 
              className="bg-highlight text-highlight-foreground hover:bg-highlight/90 font-poppins font-semibold px-6"
              asChild
            >
              <a href="#contact">Order Now</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-inter font-medium"
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="bg-highlight text-highlight-foreground hover:bg-highlight/90 font-poppins font-semibold w-fit"
                asChild
              >
                <a href="#contact" onClick={() => setIsOpen(false)}>Order Now</a>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default NavBar;