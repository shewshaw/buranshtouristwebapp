import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Wifi, Coffee, Mountain } from "lucide-react";

interface RoomCardProps {
  title: string;
  titleHindi: string;
  image: string;
  capacity: number;
  amenities: string[];
  price?: string;
}

export default function RoomCard({ title, titleHindi, image, capacity, amenities, price }: RoomCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all" data-testid="card-room">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          data-testid="img-room"
        />
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

          <Button className="w-full" variant="default" data-testid="button-book-room">
            Book Room
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
