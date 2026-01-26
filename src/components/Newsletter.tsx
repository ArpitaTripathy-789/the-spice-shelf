import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-spice-brown mb-4">
            Get Fresh Updates
          </h2>
          <p className="text-spice-brown/80 mb-8 text-lg">
            Subscribe to our newsletter for exclusive offers, recipes, and new product announcements.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 h-14 px-6 rounded-full bg-cream border-none text-foreground placeholder:text-muted-foreground"
            />
            <Button
              type="submit"
              size="lg"
              className="h-14 px-8 rounded-full bg-spice-brown hover:bg-spice-brown/90 text-cream"
            >
              <Send className="h-5 w-5 mr-2" />
              Subscribe
            </Button>
          </form>

          <p className="mt-4 text-sm text-spice-brown/60">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
