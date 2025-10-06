import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import TrekHighlights from "@/components/TrekHighlights";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <TrekHighlights />
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" data-testid="heading-cta">
            Ready for Your Himalayan Adventure?
          </h2>
          <p className="text-lg font-serif text-muted-foreground mb-3" data-testid="text-cta-hindi">
            अपनी हिमालयी यात्रा के लिए तैयार हैं?
          </p>
          <p className="text-muted-foreground mb-8" data-testid="text-cta-description">
            Book your stay at Buransh Tourist Lodge and begin your sacred journey to Madhyamaheshwar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" data-testid="button-cta-book">
                Book Your Stay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/trek-info">
              <Button size="lg" variant="outline" data-testid="button-cta-trek">
                Learn About Trek
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
