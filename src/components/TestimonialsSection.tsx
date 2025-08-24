import { motion } from 'framer-motion';
import { Star, Quote, Heart, ThumbsUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: "Muskurahat Food has become our family's go-to for healthy meals. The taste is just like home cooking, and knowing that our orders support charity makes it even more special. The quality is consistently excellent!",
      location: 'Dehradun',
      meal: 'Traditional Veg Thali'
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: "Being a working professional, I don't always have time to cook. Muskurahat Food's lunch boxes are a lifesaver - fresh, nutritious, and delivered on time. It's like having mom's cooking at the office!",
      location: 'Sahastradhara',
      meal: 'Quick Lunch Box'
    },
    {
      name: 'Meera Gupta',
      rating: 5,
      text: "What I love most about Muskurahat Food is their commitment to giving back. The food is delicious and healthy, but knowing that 10% goes to charity makes every meal meaningful. True food with purpose!",
      location: 'Rajpur Road',
      meal: 'Family Pack'
    },
    {
      name: 'Ankit Verma',
      rating: 5,
      text: "The special meals during festivals are absolutely amazing! They bring back childhood memories of grandma's cooking. The team's dedication to quality and freshness is clearly visible in every bite.",
      location: 'Clement Town',
      meal: 'Special Meals'
    },
    {
      name: 'Sunita Devi',
      rating: 5,
      text: "As a mother of two, I appreciate the care Muskurahat Food puts into their meals. Everything is fresh, healthy, and made with love. My children always ask for 'Muskurahat aunty's food' - that says it all!",
      location: 'Mussoorie Road',
      meal: 'Family Pack'
    },
    {
      name: 'Dr. Arjun Singh',
      rating: 5,
      text: "Being in the medical field, I'm very particular about food quality and hygiene. Muskurahat Food exceeds my expectations in both areas. Their commitment to health and social service is truly commendable.",
      location: 'GMS Road',
      meal: 'Traditional Veg Thali'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Real stories from real customers who have experienced the joy of our homely meals
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-playfair font-bold text-primary mb-2">5000+</h3>
            <p className="text-muted-foreground font-inter">Happy Customers</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-3xl font-playfair font-bold text-accent mb-2">4.9/5</h3>
            <p className="text-muted-foreground font-inter">Average Rating</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-highlight/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="h-8 w-8 text-highlight" />
            </div>
            <h3 className="text-3xl font-playfair font-bold text-highlight mb-2">98%</h3>
            <p className="text-muted-foreground font-inter">Satisfaction Rate</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Quote className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-playfair font-bold text-primary mb-2">1500+</h3>
            <p className="text-muted-foreground font-inter">Reviews</p>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-highlight fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-muted-foreground font-inter leading-relaxed mb-6 flex-grow">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* Customer Info */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-poppins font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-poppins font-medium text-primary">
                          {testimonial.meal}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
              Join Our Happy Customers
            </h3>
            <p className="text-muted-foreground font-inter mb-6 max-w-2xl mx-auto">
              Experience the joy of homely meals delivered with love. Every order supports our community initiatives.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-poppins font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Order Your First Meal
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;