import { motion } from 'framer-motion';
import { Heart, Utensils, Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, ArrowUp } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#vision' },
    { name: 'Charity', href: '#charity' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                <Utensils className="h-8 w-8 text-primary" />
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-playfair font-bold text-primary">
                Muskurahat Food
              </div>
            </div>
            
            <p className="text-lg text-accent font-poppins font-semibold mb-4">
              Ghar ka Swad Har Roz
            </p>
            
            <p className="text-muted-foreground font-inter leading-relaxed mb-6 max-w-md">
              We deliver food that feels like home – pure, healthy, and filled with love. 
              Every meal supports our mission of spreading smiles and helping communities 
              through our 10% charity initiative.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-highlight/10 rounded-full flex items-center justify-center text-highlight hover:bg-highlight hover:text-highlight-foreground transition-all duration-200"
              >
                <MessageCircle className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-poppins font-semibold text-foreground mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-inter"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-poppins font-semibold text-foreground mb-6">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground font-inter">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">Mon-Sun, 8AM-10PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="text-muted-foreground font-inter">info@muskurahatfood.com</p>
                  <p className="text-sm text-muted-foreground">24/7 support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-highlight mt-1" />
                <div>
                  <p className="text-muted-foreground font-inter">Dehradun, Uttarakhand</p>
                  <p className="text-sm text-muted-foreground">Serving across the city</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-muted-foreground font-inter">
                © 2025 Muskurahat Food Services. All rights reserved.
              </p>
              <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-accent fill-current" />
                <span>for the community</span>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
          
          {/* Mobile Made with Love */}
          <div className="md:hidden flex items-center justify-center space-x-2 text-sm text-muted-foreground mt-4">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-accent fill-current" />
            <span>for the community</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;