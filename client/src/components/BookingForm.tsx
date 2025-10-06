import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    roomType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    alert("Booking inquiry submitted! We'll contact you soon.");
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl" data-testid="heading-booking-form">
          Book Your Stay
        </CardTitle>
        <p className="text-sm font-serif text-muted-foreground" data-testid="text-booking-hindi">
          अपना प्रवास बुक करें
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" data-testid="label-name">Full Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                data-testid="input-name"
              />
            </div>
            <div>
              <Label htmlFor="phone" data-testid="label-phone">Phone Number *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  className="pl-9"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  data-testid="input-phone"
                />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="email" data-testid="label-email">Email Address *</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                className="pl-9"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                data-testid="input-email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="checkIn" data-testid="label-checkin">Check-in Date *</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="checkIn"
                  type="date"
                  className="pl-9"
                  required
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  data-testid="input-checkin"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="checkOut" data-testid="label-checkout">Check-out Date *</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="checkOut"
                  type="date"
                  className="pl-9"
                  required
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  data-testid="input-checkout"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="guests" data-testid="label-guests">Number of Guests *</Label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  className="pl-9"
                  required
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  data-testid="input-guests"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="roomType" data-testid="label-room-type">Room Type *</Label>
              <Select
                required
                value={formData.roomType}
                onValueChange={(value) => setFormData({ ...formData, roomType: value })}
              >
                <SelectTrigger data-testid="select-room-type">
                  <SelectValue placeholder="Select room type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard" data-testid="option-standard">Standard Room</SelectItem>
                  <SelectItem value="deluxe" data-testid="option-deluxe">Deluxe Room</SelectItem>
                  <SelectItem value="dormitory" data-testid="option-dormitory">Dormitory</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="message" data-testid="label-message">Special Requests (Optional)</Label>
            <Textarea
              id="message"
              rows={4}
              placeholder="Any special requirements or questions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              data-testid="textarea-message"
            />
          </div>

          <Button type="submit" size="lg" className="w-full" data-testid="button-submit-booking">
            Submit Booking Inquiry
          </Button>

          <p className="text-xs text-muted-foreground text-center" data-testid="text-booking-note">
            Trek season: May-June and September-November. We'll confirm availability and contact you within 24 hours.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
