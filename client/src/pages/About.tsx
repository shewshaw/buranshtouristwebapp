import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Heart, Users, Leaf } from "lucide-react";
import templeImage from "@assets/generated_images/Himalayan_temple_with_mountains_37afb6a4.png";
import flowersImage from "@assets/generated_images/Buransh_flowers_close-up_fa5ea8dd.png";

export default function About() {
  const features = [
    {
      icon: Mountain,
      title: "Trek Base Camp",
      description: "Perfect starting point for Madhyamaheshwar trek, one of the sacred Panch Kedar temples"
    },
    {
      icon: Heart,
      title: "Local Hospitality",
      description: "Experience authentic Garhwali warmth and traditional mountain hospitality"
    },
    {
      icon: Users,
      title: "Pilgrims & Trekkers",
      description: "Welcoming both spiritual seekers and adventure enthusiasts since our establishment"
    },
    {
      icon: Leaf,
      title: "Natural Beauty",
      description: "Surrounded by Buransh flowers, pine forests, and pristine Himalayan landscapes"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="heading-about">
              About Buransh Tourist Lodge
            </h1>
            <p className="text-xl font-serif text-muted-foreground" data-testid="text-about-hindi">
              बुरांश टूरिस्ट लॉज के बारे में
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={templeImage}
                alt="Madhyamaheshwar Temple"
                className="rounded-lg shadow-lg w-full"
                data-testid="img-temple"
              />
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p data-testid="text-history-1">
                Nestled in the tranquil foothills near Ransi Village at an elevation of 2,200 meters, 
                Buransh Tourist Lodge has been serving as a gateway to spiritual enlightenment and 
                Himalayan adventure for pilgrims and trekkers alike.
              </p>
              <p data-testid="text-history-2">
                Our lodge derives its name from the vibrant Buransh (Rhododendron) flowers that paint 
                these mountains in brilliant shades of red every spring. This natural beauty symbolizes 
                the warmth and welcome that awaits every guest at our establishment.
              </p>
              <p data-testid="text-history-3">
                Located just 20 kilometers from Ukhimath, the winter seat of Lord Kedarnath and Lord 
                Madhyamaheshwar, we stand at the threshold of one of the most sacred Panch Kedar pilgrimages. 
                Our strategic location makes us the ideal base camp for the 16-kilometer trek to the ancient 
                Madhyamaheshwar temple.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover-elevate transition-all" data-testid={`card-feature-${index}`}>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <feature.icon className="h-8 w-8 text-primary" data-testid={`icon-feature-${index}`} />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-feature-desc-${index}`}>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-4 text-muted-foreground">
              <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="heading-surroundings">
                Ransi Village & Surroundings
              </h2>
              <p className="font-serif text-muted-foreground mb-4" data-testid="text-surroundings-hindi">
                रांसी गांव और आसपास का क्षेत्र
              </p>
              <p data-testid="text-surroundings-1">
                Ransi Village, our home, is a serene hamlet in the Rudraprayag district of Uttarakhand. 
                The village offers the last point of mobile connectivity before trekkers embark on their 
                spiritual journey to Madhyamaheshwar.
              </p>
              <p data-testid="text-surroundings-2">
                The area is blessed with breathtaking views of the Chaukhamba massif and neighboring peaks. 
                Dense coniferous forests, alpine meadows, and crystal-clear mountain streams create an 
                atmosphere of pristine natural beauty that rejuvenates the soul.
              </p>
              <p data-testid="text-surroundings-3">
                Our region holds deep spiritual significance as part of the Panch Kedar circuit, where 
                according to legend, the Pandavas sought Lord Shiva's blessings. The navel (nabhi) of 
                Shiva is worshipped at Madhyamaheshwar, making this journey both physically rewarding 
                and spiritually transformative.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={flowersImage}
                alt="Buransh Flowers"
                className="rounded-lg shadow-lg w-full"
                data-testid="img-flowers"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
