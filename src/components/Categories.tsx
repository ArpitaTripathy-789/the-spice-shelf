import { ArrowRight } from "lucide-react";
import spicesImage from "@/assets/spices-product.jpg";
import oilsImage from "@/assets/oils-product.jpg";
import gheeImage from "@/assets/ghee-product.jpg";

const categories = [
  {
    name: "Premium Spices",
    description: "Hand-ground spices with authentic aroma and flavor",
    image: spicesImage,
    count: "25+ Varieties",
  },
  {
    name: "Cold-Pressed Oils",
    description: "Pure, unrefined oils extracted using traditional methods",
    image: oilsImage,
    count: "12+ Types",
  },
  {
    name: "Traditional Ghee",
    description: "Slow-cooked clarified butter from grass-fed cows",
    image: gheeImage,
    count: "5+ Options",
  },
];

const Categories = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our carefully curated selection of premium kitchen essentials, 
            each sourced with care and quality in mind.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-2xl cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-spice-brown via-spice-brown/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                <span className="text-primary text-sm font-medium">
                  {category.count}
                </span>
                <h3 className="text-2xl font-serif font-bold mt-1 mb-2">
                  {category.name}
                </h3>
                <p className="text-cream/80 text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                  <span>Shop Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
