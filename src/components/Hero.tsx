import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-spices.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Artisanal spices collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-spice-brown/90 via-spice-brown/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block px-4 py-2 bg-primary/20 text-cream rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            Premium Quality Since 1985
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream leading-tight mb-6">
            Authentic Flavors,{" "}
            <span className="text-primary">Pure Tradition</span>
          </h1>
          <p className="text-xl text-cream/90 mb-8 leading-relaxed">
            Discover our handpicked collection of premium spices, cold-pressed oils, 
            and traditional ghee sourced directly from trusted farmers across the land.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full group"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cream/50 text-cream hover:bg-cream/10 text-lg px-8 py-6 rounded-full backdrop-blur-sm"
            >
              Our Story
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-cream/20">
            <div className="text-center">
              <p className="text-3xl font-serif font-bold text-primary">100%</p>
              <p className="text-cream/80 text-sm">Natural</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-serif font-bold text-primary">50+</p>
              <p className="text-cream/80 text-sm">Varieties</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-serif font-bold text-primary">10K+</p>
              <p className="text-cream/80 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
