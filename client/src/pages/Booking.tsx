import BookingForm from "@/components/BookingForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Booking() {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="heading-booking">
              Book Your Stay
            </h1>
            <p className="text-xl font-serif text-muted-foreground" data-testid="text-booking-hindi">
              अपना प्रवास बुक करें
            </p>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto" data-testid="text-booking-intro">
              Begin your Himalayan adventure at Buransh Tourist Lodge. Fill out the form below or 
              contact us directly to secure your accommodation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover-elevate transition-all" data-testid="card-contact-phone">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground mb-1">+91 XXXXX XXXXX</p>
                <p className="text-xs text-muted-foreground">Available 8 AM - 8 PM</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate transition-all" data-testid="card-contact-email">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-1">booking@buranshlodge.com</p>
                <p className="text-xs text-muted-foreground">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate transition-all" data-testid="card-contact-whatsapp">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-1">+91 XXXXX XXXXX</p>
                <p className="text-xs text-muted-foreground">Quick response guaranteed</p>
              </CardContent>
            </Card>
          </div>

          <BookingForm />

          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4" data-testid="heading-booking-policy">
                Booking Policy
              </h3>
              <p className="font-serif text-muted-foreground mb-4" data-testid="text-booking-policy-hindi">
                बुकिंग नीति
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2" data-testid="text-policy-1">
                  <span className="text-primary">•</span>
                  <span>Advance booking recommended during peak season (May-June, Sept-Nov)</span>
                </li>
                <li className="flex gap-2" data-testid="text-policy-2">
                  <span className="text-primary">•</span>
                  <span>Partial payment required to confirm booking</span>
                </li>
                <li className="flex gap-2" data-testid="text-policy-3">
                  <span className="text-primary">•</span>
                  <span>Cancellation policy: 50% refund if cancelled 7 days before check-in</span>
                </li>
                <li className="flex gap-2" data-testid="text-policy-4">
                  <span className="text-primary">•</span>
                  <span>Check-in: 12:00 PM | Check-out: 10:00 AM</span>
                </li>
                <li className="flex gap-2" data-testid="text-policy-5">
                  <span className="text-primary">•</span>
                  <span>Valid ID proof required at check-in</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
