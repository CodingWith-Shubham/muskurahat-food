import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '+91 98765 43210',
      description: 'Mon-Sun, 8AM-10PM',
      color: 'primary'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'info@muskurahatfood.com',
      description: '24/7 support',
      color: 'accent'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: 'Dehradun, Uttarakhand',
      description: 'Serving across the city',
      color: 'highlight'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'WhatsApp',
      details: '+91 98765 43210',
      description: 'Quick orders & support',
      color: 'primary'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          hover: 'hover:bg-primary/20'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          hover: 'hover:bg-accent/20'
        };
      case 'highlight':
        return {
          bg: 'bg-highlight/10',
          text: 'text-highlight',
          hover: 'hover:bg-highlight/20'
        };
      default:
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          hover: 'hover:bg-primary/20'
        };
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Ready to order? Have questions? We're here to help you experience the joy of homely meals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-playfair font-bold text-primary mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground font-inter mb-8">
                Reach out to us through any of these channels. We're always happy to help!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const colorClasses = getColorClasses(info.color);
                
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-start space-x-4 p-4 rounded-2xl ${colorClasses.bg} ${colorClasses.hover} transition-all duration-200 cursor-pointer`}
                  >
                    <div className={`p-2 bg-card rounded-full ${colorClasses.text}`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground">
                        {info.title}
                      </h4>
                      <p className={`font-inter font-medium ${colorClasses.text}`}>
                        {info.details}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Order Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-8"
            >
              <Button 
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-poppins font-semibold py-6"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Quick Order via WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-card border-border shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair font-bold text-primary">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-muted-foreground font-inter">
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-poppins font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="font-inter"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-poppins font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="font-inter"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-poppins font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="font-inter"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-poppins font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell us about your requirements, questions, or feedback..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="min-h-[120px] font-inter"
                    />
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-poppins font-semibold py-6"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-border">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-playfair font-bold text-primary">
                  Business Hours
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="font-poppins font-semibold text-foreground mb-2">
                    Delivery Hours
                  </h4>
                  <p className="text-muted-foreground font-inter">
                    Mon - Sun: 11:00 AM - 9:00 PM
                  </p>
                </div>
                
                <div>
                  <h4 className="font-poppins font-semibold text-foreground mb-2">
                    Customer Support
                  </h4>
                  <p className="text-muted-foreground font-inter">
                    Mon - Sun: 8:00 AM - 10:00 PM
                  </p>
                </div>
                
                <div>
                  <h4 className="font-poppins font-semibold text-foreground mb-2">
                    Order Booking
                  </h4>
                  <p className="text-muted-foreground font-inter">
                    24/7 via WhatsApp & Website
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;