import RoomCard from "@/components/RoomCard";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Coffee, Bed, Utensils, Shirt, Shield } from "lucide-react";
import roomImage from "@assets/generated_images/Cozy_lodge_room_interior_fa402585.png";

export default function Rooms() {
  const rooms = [
    {
      title: "Standard Room",
      titleHindi: "स्टैंडर्ड कमरा",
      image: roomImage,
      capacity: 2,
      amenities: ["Meals", "Mountain View"],
      price: "₹1,800"
    },
    {
      title: "Deluxe Room",
      titleHindi: "डीलक्स कमरा",
      image: roomImage,
      capacity: 3,
      amenities: ["WiFi", "Meals", "Mountain View"],
      price: "₹2,500"
    },
    {
      title: "Dormitory",
      titleHindi: "सामूहिक कमरा",
      image: roomImage,
      capacity: 6,
      amenities: ["Meals"],
      price: "₹800"
    }
  ];

  const facilities = [
    { icon: Wifi, title: "WiFi Available", description: "Internet in common areas (limited connectivity)" },
    { icon: Coffee, title: "Dining Hall", description: "Traditional Garhwali and North Indian cuisine" },
    { icon: Bed, title: "Clean Bedding", description: "Comfortable beds with warm blankets" },
    { icon: Utensils, title: "Meal Plans", description: "Breakfast, lunch, and dinner available" },
    { icon: Shirt, title: "Hot Water", description: "Available in morning and evening" },
    { icon: Shield, title: "Safe & Secure", description: "24/7 caretaker assistance" }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="heading-rooms">
              Rooms & Accommodation
            </h1>
            <p className="text-xl font-serif text-muted-foreground" data-testid="text-rooms-hindi">
              कमरे और आवास
            </p>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto" data-testid="text-rooms-intro">
              Experience comfortable mountain hospitality in our cozy rooms designed for trekkers and pilgrims. 
              Each room offers stunning Himalayan views and essential amenities for a restful stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>

          <div className="bg-card/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center" data-testid="heading-facilities">
              Lodge Facilities
            </h2>
            <p className="text-lg font-serif text-muted-foreground mb-8 text-center" data-testid="text-facilities-hindi">
              लॉज की सुविधाएं
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <Card key={index} className="hover-elevate transition-all" data-testid={`card-facility-${index}`}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <facility.icon className="h-6 w-6 text-primary" data-testid={`icon-facility-${index}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1" data-testid={`text-facility-title-${index}`}>
                          {facility.title}
                        </h3>
                        <p className="text-sm text-muted-foreground" data-testid={`text-facility-desc-${index}`}>
                          {facility.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4" data-testid="heading-what-to-expect">
                What to Expect
              </h3>
              <p className="font-serif text-muted-foreground mb-4" data-testid="text-expect-hindi">
                क्या अपेक्षा करें
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2" data-testid="text-expect-1">
                  <span className="text-primary">•</span>
                  <span>Simple, clean, and comfortable accommodation suitable for mountain conditions</span>
                </li>
                <li className="flex gap-2" data-testid="text-expect-2">
                  <span className="text-primary">•</span>
                  <span>Traditional Garhwali hospitality with home-cooked meals</span>
                </li>
                <li className="flex gap-2" data-testid="text-expect-3">
                  <span className="text-primary">•</span>
                  <span>Trek preparation assistance and local guide arrangements</span>
                </li>
                <li className="flex gap-2" data-testid="text-expect-4">
                  <span className="text-primary">•</span>
                  <span>Basic amenities adapted to high-altitude environment</span>
                </li>
                <li className="flex gap-2" data-testid="text-expect-5">
                  <span className="text-primary">•</span>
                  <span>Peaceful atmosphere perfect for rest before or after trek</span>
                </li>
                <li className="flex gap-2" data-testid="text-expect-6">
                  <span className="text-primary">•</span>
                  <span>Note: Limited mobile network - only available in Ransi village area</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
