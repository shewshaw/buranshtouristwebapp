import lodgeImage from "@assets/generated_images/Himalayan_lodge_with_flowers_bfb3cb8b.png";

export default function IntroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4" data-testid="heading-intro">
              Welcome to Buransh Tourist Lodge
            </h2>
            <p className="text-xl font-serif text-muted-foreground mb-6" data-testid="text-intro-hindi">
              बुरांश टूरिस्ट लॉज में आपका स्वागत है
            </p>
            <div className="space-y-4 text-muted-foreground">
              <p data-testid="text-intro-1">
                Nestled in the serene landscapes near Ransi Village at 2,200 meters altitude, 
                Buransh Tourist Lodge serves as the perfect base camp for the sacred Madhyamaheshwar trek. 
                Named after the vibrant red Buransh (Rhododendron) flowers that bloom across these mountains, 
                our lodge offers a blend of traditional Garhwali hospitality and modern comfort.
              </p>
              <p data-testid="text-intro-2">
                As the starting point for one of the revered Panch Kedar pilgrimages, we provide 
                trekkers and pilgrims with a peaceful retreat amidst the mighty Himalayas. Our location 
                offers breathtaking views of the Chaukhamba peaks and easy access to the spiritual journey ahead.
              </p>
              <p data-testid="text-intro-3">
                Whether you seek divine blessings at the ancient Madhyamaheshwar temple or adventure 
                through alpine meadows and coniferous forests, your Himalayan journey begins here.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={lodgeImage}
              alt="Buransh Tourist Lodge"
              className="rounded-lg shadow-lg w-full"
              data-testid="img-lodge"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <p className="text-sm font-semibold" data-testid="text-altitude">Altitude: 2,200m</p>
              <p className="text-xs font-serif" data-testid="text-location">Ransi Village, Uttarakhand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
