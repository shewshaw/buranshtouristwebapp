import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain } from "lucide-react";
import heroImage from "@assets/generated_images/Himalayan_mountain_peaks_panorama_295170a4.png";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center">
          <Mountain className="h-16 w-16 text-primary" data-testid="icon-hero-logo" />
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4" data-testid="heading-hero">
          Buransh Tourist Lodge
        </h1>
        
        <p className="text-2xl sm:text-3xl font-serif text-white/90 mb-6" data-testid="text-hero-hindi">
          बुरांश टूरिस्ट लॉज
        </p>
        
        <p className="text-xl sm:text-2xl text-white/95 mb-3" data-testid="text-tagline-main">
          Your Himalayan Gateway
        </p>
        
        <p className="text-lg sm:text-xl font-serif text-white/90 mb-8" data-testid="text-tagline-hindi">
          आपका हिमालयी द्वार - स्वागत है
        </p>
        
        <p className="text-base sm:text-lg text-white/85 mb-10 max-w-2xl mx-auto" data-testid="text-hero-description">
          Starting point of the sacred Madhyamaheshwar trek • Gateway to Panch Kedar pilgrimage • 
          Experience divine serenity at 2,200m altitude in Ransi Village
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-lg px-8 bg-primary/90 backdrop-blur-sm hover:bg-primary"
            data-testid="button-hero-booking"
          >
            Book Your Stay
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            data-testid="button-hero-trek"
          >
            Explore Trek Route
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-white/70 font-serif" data-testid="text-hero-blessing">
          ॐ नमः शिवाय • Where Pilgrimage Meets Adventure
        </p>
      </div>
    </section>
  );
}
