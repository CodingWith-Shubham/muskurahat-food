import { motion } from 'framer-motion';
import { User, Heart, Truck, MessageSquare, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Pankaj Dhondiyal',
      role: 'Founder',
      icon: <Users className="h-8 w-8" />,
      quote: "I run a self-funded NGO and carry a powerful vision for prosperity built on compassion. In today's world, people are surrounded by unhealthy food habits. Through Muskurahat Food, my mission is to supply clean, pure, and healthy meals that not only nourish the body but also support society. With every meal we serve, we deliver purity on the plate and smiles in the heart. Our vision is simple – Food with Purpose, Profit with Charity.",
      color: 'primary'
    },
    {
      name: 'Amit Sundriyal',
      role: 'Co-Founder',
      icon: <Heart className="h-8 w-8" />,
      quote: "For me, Muskurahat Food is not just about delivering meals, it's about delivering trust and care with every bite. I believe that food has the power to heal, connect, and spread happiness. As a co-founder, my role is to ensure that our values of purity, consistency, and compassion reach every customer's home. Together, we are building more than a food service – we are building smiles, one plate at a time.",
      color: 'accent'
    },
    {
      name: 'Anmol Singh',
      role: 'Transport Manager',
      icon: <Truck className="h-8 w-8" />,
      quote: "I ensure that Muskurahat Food reaches every home fresh, safe, and on time. From arranging essential supplies like ration and vegetables to managing transport with care, my mission is to keep quality moving without compromise. Every delivery is not just food on wheels—it is trust, freshness, and responsibility delivered with a smile.",
      color: 'highlight'
    },
    {
      name: 'Deepika Bandari',
      role: 'Digital Marketing',
      icon: <TrendingUp className="h-8 w-8" />,
      quote: "I believe that true growth comes from listening to people. At Muskurahat Food Services, I focus on gathering genuine customer feedback, building trust through testimonials, and sharing the stories of how our food and our 10% charity initiative touch lives. For me, marketing is not just about promotion, it's about connecting purity, health, and compassion with every meal we serve.",
      color: 'primary'
    },
    {
      name: 'Mamta Bangari',
      role: 'HR & Customer Feedback',
      icon: <MessageSquare className="h-8 w-8" />,
      quote: "At Muskurahat Food Service, our goal is to bring smiles through our food. We want to offer tasty and healthy meals that feel just like home. Muskurahat Club is not just a business — it's a way to serve people with good food, great quality, and timely service. We are not here just to earn money, but to support NGOs and help those in need. As our company grows, we hope to support more and more people. Every meal we prepare is made with love, and every smile we receive is our true success.",
      color: 'accent'
    },
    {
      name: 'Rakesh Prasad',
      role: 'Marketing',
      icon: <TrendingUp className="h-8 w-8" />,
      quote: "I handle marketing for Muskurahat Food Services with a focus on creating awareness and building strong community connections. My goal is to make our brand stand out through creative campaigns, partnerships, and promotions while always keeping our vision of purity and charity at the center. I believe good food with a good purpose deserves to reach every home.",
      color: 'highlight'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          border: 'border-accent/20'
        };
      case 'highlight':
        return {
          bg: 'bg-highlight/10',
          text: 'text-highlight',
          border: 'border-highlight/20'
        };
      default:
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20'
        };
    }
  };

  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            The passionate people behind Muskurahat Food Services, united in our mission of spreading smiles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const colorClasses = getColorClasses(member.color);
            
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className={`h-full bg-card border-2 ${colorClasses.border} shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <CardHeader className="text-center">
                    <div className={`w-20 h-20 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <div className={colorClasses.text}>
                        {member.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-poppins font-semibold text-foreground">
                      {member.name}
                    </CardTitle>
                    <CardDescription className={`font-inter font-medium ${colorClasses.text}`}>
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <blockquote className="text-sm text-muted-foreground font-inter leading-relaxed italic">
                      "{member.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
              Our Shared Values
            </h3>
            <p className="text-muted-foreground font-inter">
              What unites our team in delivering exceptional service
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-poppins font-semibold text-foreground">Compassion</h4>
              <p className="text-sm text-muted-foreground">Every action driven by care</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-poppins font-semibold text-foreground">Community</h4>
              <p className="text-sm text-muted-foreground">Supporting each other</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-highlight" />
              </div>
              <h4 className="font-poppins font-semibold text-foreground">Excellence</h4>
              <p className="text-sm text-muted-foreground">Quality in everything</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-poppins font-semibold text-foreground">Trust</h4>
              <p className="text-sm text-muted-foreground">Built through consistency</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;