import { Mountain, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-6 w-6 text-primary" data-testid="icon-footer-logo" />
              <div className="flex flex-col">
                <span className="font-semibold" data-testid="text-footer-brand">Buransh Tourist Lodge</span>
                <span className="text-xs font-serif text-muted-foreground" data-testid="text-footer-brand-hindi">बुरांश टूरिस्ट लॉज</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2" data-testid="text-tagline">
              Your Himalayan Gateway
            </p>
            <p className="text-sm font-serif text-muted-foreground" data-testid="text-tagline-hindi">
              आपका हिमालयी द्वार
            </p>
            <p className="text-xs text-muted-foreground mt-4" data-testid="text-trek-season">
              Trek Season: May-June, Sept-Nov
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="heading-quick-links">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-home">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">About Us</Link></li>
              <li><Link href="/rooms" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-rooms">Rooms & Facilities</Link></li>
              <li><Link href="/trek-info" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-trek">Trek Information</Link></li>
              <li><Link href="/booking" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-booking">Book Your Stay</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="heading-contact">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span data-testid="text-address">Near Ransi Village, Ukhimath, Rudraprayag, Uttarakhand</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span data-testid="text-phone">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span data-testid="text-email">info@buranshlodge.com</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Buransh Tourist Lodge. All rights reserved.
          </p>
          <p className="text-xs font-serif text-muted-foreground mt-1" data-testid="text-blessing">
            ॐ नमः शिवाय - Om Namah Shivaya
          </p>
        </div>
      </div>
    </footer>
  );
}
