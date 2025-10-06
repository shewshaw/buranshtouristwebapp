import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";

export default function ContactMap() {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.234!2d79.14247!3d30.58763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM1JzE1LjUiTiA3OcKwMDgnMzIuOSJF!5e0!3m2!1sen!2sin!4v1234567890`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <Card>
          <CardHeader>
            <CardTitle data-testid="heading-contact-info">Contact Information</CardTitle>
            <p className="text-sm font-serif text-muted-foreground" data-testid="text-contact-hindi">
              संपर्क जानकारी
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1" data-testid="text-location-title">Location</p>
                <p className="text-sm text-muted-foreground" data-testid="text-location">
                  Near Ransi Village, Ukhimath<br />
                  Rudraprayag District<br />
                  Uttarakhand, India - 246439
                </p>
                <p className="text-xs text-muted-foreground mt-2" data-testid="text-coordinates">
                  Coordinates: 30.58763°N, 79.14247°E<br />
                  Altitude: 2,200 meters
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1" data-testid="text-phone-title">Phone</p>
                <p className="text-sm text-muted-foreground" data-testid="text-phone-number">
                  +91 XXXXX XXXXX<br />
                  +91 XXXXX XXXXX (Alternative)
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1" data-testid="text-email-title">Email</p>
                <p className="text-sm text-muted-foreground" data-testid="text-email-address">
                  info@buranshlodge.com<br />
                  booking@buranshlodge.com
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Navigation className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1" data-testid="text-directions-title">How to Reach</p>
                <p className="text-sm text-muted-foreground" data-testid="text-directions">
                  <strong>From Ukhimath:</strong> 20 km by road (taxi/local transport)<br />
                  <strong>Nearest Town:</strong> Ukhimath (base for Panch Kedar treks)<br />
                  <strong>Nearest Railway:</strong> Rishikesh (160 km)<br />
                  <strong>Nearest Airport:</strong> Jolly Grant, Dehradun (190 km)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className="h-full">
          <CardHeader>
            <CardTitle data-testid="heading-map">Location Map</CardTitle>
            <p className="text-sm font-serif text-muted-foreground" data-testid="text-map-hindi">
              स्थान का नक्शा
            </p>
          </CardHeader>
          <CardContent>
            <div className="aspect-square rounded-lg overflow-hidden">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Buransh Tourist Lodge Location"
                data-testid="iframe-map"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
