import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { Users, Wifi, Coffee, Mountain } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface RoomCardProps {
  title: string;
  titleHindi: string;
  images: string[];
  capacity: number;
  amenities: string[];
  price?: string;
}

export default function RoomCard({ title, titleHindi, images, capacity, amenities, price }: RoomCardProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((api: CarouselApi) => {
    if (!api) return;
    setScrollSnaps(api.scrollSnapList());
    api.on("select", () => setSelectedIndex(api.selectedScrollSnap()));
  }, []);

  const scrollTo = useCallback(
    (index: number) => api?.scrollTo(index),
    [api]
  );

  const hasMultipleImages = images.length > 1;

  return (
    <Card className="overflow-hidden hover-elevate transition-all" data-testid="card-room">
      <div className="relative h-48 overflow-hidden">
        <Carousel
          opts={{ loop: hasMultipleImages, align: "start" }}
          setApi={onInit}
          className="h-full group"
        >
          <CarouselContent className="h-full">
            {images.map((src, index) => (
              <CarouselItem key={index} className="h-48 basis-full pl-0">
                <img
                  src={src}
                  alt={`${title} - image ${index + 1}`}
                  className="w-full h-full object-cover"
                  data-testid="img-room"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {hasMultipleImages && (
            <>
              <CarouselPrevious
                className="no-default-hover-elevate no-default-active-elevate z-10 left-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-black/50 hover:bg-black/70 text-white border-none opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-100"
              />
              <CarouselNext
                className="no-default-hover-elevate no-default-active-elevate z-10 right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-black/50 hover:bg-black/70 text-white border-none opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-100"
              />
            </>
          )}
        </Carousel>
        {hasMultipleImages && scrollSnaps.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === selectedIndex
                    ? "bg-white w-4"
                    : "bg-white/50"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="flex flex-col gap-1" data-testid="heading-room-title">
          <span>{title}</span>
          <span className="text-sm font-serif text-muted-foreground font-normal" data-testid="text-room-hindi">
            {titleHindi}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span data-testid="text-capacity">Up to {capacity} guests</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {amenities.includes("WiFi") && (
              <div className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded" data-testid="badge-wifi">
                <Wifi className="h-3 w-3" />
                <span>WiFi</span>
              </div>
            )}
            {amenities.includes("Meals") && (
              <div className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded" data-testid="badge-meals">
                <Coffee className="h-3 w-3" />
                <span>Meals</span>
              </div>
            )}
            {amenities.includes("Mountain View") && (
              <div className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded" data-testid="badge-view">
                <Mountain className="h-3 w-3" />
                <span>View</span>
              </div>
            )}
          </div>

          {price && (
            <div className="pt-2 border-t">
              <p className="text-2xl font-bold text-primary" data-testid="text-price">{price}</p>
              <p className="text-xs text-muted-foreground" data-testid="text-price-note">per night</p>
            </div>
          )}

          <Link href="/contact" className="block">
            <Button className="w-full" variant="default" data-testid="button-contact-booking">
              Contact for Booking
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
