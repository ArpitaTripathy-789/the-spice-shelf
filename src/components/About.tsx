import { Leaf, Heart, Award, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No additives, preservatives, or artificial colors",
  },
  {
    icon: Heart,
    title: "Farm to Table",
    description: "Sourced directly from trusted farmers",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Rigorous quality checks at every step",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Fresh products delivered to your doorstep",
  },
];
heyyyyy there
const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
              Rooted in Tradition,{" "}
              <span className="text-gradient">Crafted with Love</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For over three decades, our family has been on a mission to bring the 
              purest spices, oils, and ghee to kitchens across the nation. What started 
              as a small shop in a bustling market has grown into a trusted name synonymous 
              with quality and authenticity.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every product in our collection is carefully sourced from farmers who share 
              our passion for purity. From the saffron fields of Kashmir to the coconut 
              groves of Kerala, we travel far and wide to ensure you get nothing but the best.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 rounded-xl bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="bg-gradient-to-br from-accent to-spice-brown rounded-3xl p-8 md:p-12 text-cream">
              <h3 className="text-2xl font-serif font-bold mb-8">
                Why Customers Love Us
              </h3>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-cream/10 rounded-2xl backdrop-blur-sm">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                    35+
                  </p>
                  <p className="text-cream/80">Years of Excellence</p>
                </div>
                <div className="text-center p-6 bg-cream/10 rounded-2xl backdrop-blur-sm">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                    50+
                  </p>
                  <p className="text-cream/80">Product Varieties</p>
                </div>
                <div className="text-center p-6 bg-cream/10 rounded-2xl backdrop-blur-sm">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                    10K+
                  </p>
                  <p className="text-cream/80">Happy Customers</p>
                </div>
                <div className="text-center p-6 bg-cream/10 rounded-2xl backdrop-blur-sm">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                    100%
                  </p>
                  <p className="text-cream/80">Natural Products</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-cream/10 rounded-2xl backdrop-blur-sm">
                <p className="text-lg italic text-cream/90">
                  "The quality of their spices is unmatched. Once you try them, 
                  you'll never go back to store-bought brands."
                </p>
                <p className="mt-4 text-primary font-semibold">— Priya Sharma, Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
