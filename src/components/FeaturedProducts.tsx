import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import spicesImage from "@/assets/spices-product.jpg";
import oilsImage from "@/assets/oils-product.jpg";
import gheeImage from "@/assets/ghee-product.jpg";

const products = [
  {
    id: 1,
    name: "Kashmir Saffron",
    category: "Spices",
    price: 599,
    originalPrice: 799,
    rating: 4.9,
    reviews: 128,
    image: spicesImage,
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Cold-Pressed Coconut Oil",
    category: "Oils",
    price: 349,
    originalPrice: 449,
    rating: 4.8,
    reviews: 95,
    image: oilsImage,
    badge: "Organic",
  },
  {
    id: 3,
    name: "A2 Desi Cow Ghee",
    category: "Ghee",
    price: 899,
    originalPrice: 1099,
    rating: 5.0,
    reviews: 203,
    image: gheeImage,
    badge: "Premium",
  },
  {
    id: 4,
    name: "Garam Masala Blend",
    category: "Spices",
    price: 249,
    originalPrice: 299,
    rating: 4.7,
    reviews: 76,
    image: spicesImage,
    badge: null,
  },
  {
    id: 5,
    name: "Extra Virgin Olive Oil",
    category: "Oils",
    price: 599,
    originalPrice: 699,
    rating: 4.6,
    reviews: 54,
    image: oilsImage,
    badge: "Imported",
  },
  {
    id: 6,
    name: "Buffalo Ghee",
    category: "Ghee",
    price: 649,
    originalPrice: 799,
    rating: 4.8,
    reviews: 89,
    image: gheeImage,
    badge: null,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="animate-fade-up">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Handpicked for You
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-3">
              Featured Products
            </h2>
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full"
          >
            View All Products
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {product.badge}
                  </span>
                )}
                <Button
                  size="icon"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-card/90 hover:bg-card text-foreground rounded-full"
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-muted-foreground text-sm mb-1">
                  {product.category}
                </p>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-foreground">
                      ₹{product.price}
                    </span>
                    <span className="text-muted-foreground line-through text-sm">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
