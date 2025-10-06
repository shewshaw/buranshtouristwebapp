import ContactMap from "@/components/ContactMap";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="heading-contact">
              Contact & Location
            </h1>
            <p className="text-xl font-serif text-muted-foreground" data-testid="text-contact-hindi">
              संपर्क और स्थान
            </p>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-intro">
              Get in touch with us for bookings, trek information, or any queries about your Himalayan journey.
            </p>
          </div>

          <ContactMap />

          <div className="mt-16 bg-card/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-center" data-testid="heading-how-to-reach">
              How to Reach Ransi Village
            </h2>
            <p className="font-serif text-muted-foreground mb-8 text-center" data-testid="text-how-to-reach-hindi">
              रांसी गांव कैसे पहुंचें
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div data-testid="route-air">
                <h3 className="font-semibold text-lg mb-3">By Air</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Nearest Airport:</strong> Jolly Grant Airport, Dehradun (190 km)
                </p>
                <p className="text-sm text-muted-foreground">
                  From airport, hire taxi to Ukhimath (6-7 hours), then to Ransi (1 hour)
                </p>
              </div>

              <div data-testid="route-train">
                <h3 className="font-semibold text-lg mb-3">By Train</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Nearest Railway Station:</strong> Rishikesh (160 km)
                </p>
                <p className="text-sm text-muted-foreground">
                  From Rishikesh, take bus/taxi to Ukhimath, then local transport to Ransi
                </p>
              </div>

              <div data-testid="route-road">
                <h3 className="font-semibold text-lg mb-3">By Road</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Route:</strong> Delhi → Rishikesh → Rudraprayag → Ukhimath → Ransi
                </p>
                <p className="text-sm text-muted-foreground">
                  Regular buses available from Rishikesh to Ukhimath. Local jeeps from Ukhimath to Ransi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
