import { Link, useLocation } from "wouter";
import { Menu, X, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home", hindi: "होम" },
    { path: "/about", label: "About", hindi: "हमारे बारे में" },
    { path: "/rooms", label: "Rooms", hindi: "कमरे" },
    { path: "/trek-info", label: "Trek Info", hindi: "ट्रेक जानकारी" },
    { path: "/gallery", label: "Gallery", hindi: "गैलरी" },
    { path: "/contact", label: "Contact", hindi: "संपर्क" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1">
            <Mountain className="h-6 w-6 text-primary" data-testid="icon-logo" />
            <div className="flex flex-col">
              <span className="font-semibold text-foreground" data-testid="text-brand">Buransh Tourist Lodge</span>
              <span className="text-xs text-muted-foreground font-serif" data-testid="text-brand-hindi">बुरांश टूरिस्ट लॉज</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant={location === link.path ? "secondary" : "ghost"}
                  className="flex flex-col items-center h-auto py-2 px-3"
                  data-testid={`link-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  <span className="text-sm">{link.label}</span>
                  <span className="text-xs font-serif text-muted-foreground">{link.hindi}</span>
                </Button>
              </Link>
            ))}
            <Link href="/booking">
              <Button variant="default" className="ml-2" data-testid="button-book-now">
                Book Now
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location === link.path ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  data-testid={`mobile-link-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  <span>{link.label}</span>
                  <span className="ml-2 text-sm font-serif text-muted-foreground">({link.hindi})</span>
                </Button>
              </Link>
            ))}
            <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="default" className="w-full" data-testid="mobile-button-book-now">
                Book Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
