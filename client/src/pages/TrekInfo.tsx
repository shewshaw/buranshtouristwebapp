import TrekRouteInfo from "@/components/TrekRouteInfo";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Calendar, Backpack, Heart, Mountain, Sun, Cloud } from "lucide-react";
import trekImage from "@assets/generated_images/Forest_trekking_trail_scene_c41a789b.png";

export default function TrekInfo() {
  const essentials = [
    {
      icon: Calendar,
      title: "Best Season",
      items: ["May to June (Summer)", "September to November (Autumn)", "Temple closed in winter"]
    },
    {
      icon: Backpack,
      title: "What to Carry",
      items: ["Trekking shoes & warm clothing", "Rain gear & trekking poles", "First aid & medicines", "Water bottle & snacks"]
    },
    {
      icon: Heart,
      title: "Fitness Level",
      items: ["Moderate to difficult trek", "Good cardiovascular fitness", "Previous trekking experience helpful", "Acclimatization important"]
    }
  ];

  const highlights = [
    "Part of sacred Panch Kedar pilgrimage circuit",
    "Navel (nabhi) of Lord Shiva worshipped here",
    "Spectacular views of Chaukhamba, Kedarnath, Neelkanth peaks",
    "Trek through dense coniferous forests and alpine meadows",
    "Ancient temple believed to be built by Pandavas",
    "Vriddh Madhyamaheshwar shrine on high ridge",
    "Crystal clear mountain streams and waterfalls",
    "Rich Himalayan flora including Buransh flowers"
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="heading-trek-info">
              Madhyamaheshwar Trek Information
            </h1>
            <p className="text-xl font-serif text-muted-foreground" data-testid="text-trek-info-hindi">
              मध्यमहेश्वर ट्रेक जानकारी
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <img
                src={trekImage}
                alt="Trek Trail"
                className="rounded-lg shadow-lg w-full"
                data-testid="img-trek-trail"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold" data-testid="heading-overview">Overview</h2>
              <p className="font-serif text-muted-foreground" data-testid="text-overview-hindi">
                संक्षिप्त विवरण
              </p>
              <p className="text-muted-foreground" data-testid="text-overview-1">
                The Madhyamaheshwar trek is one of the most spiritually significant journeys in the Garhwal Himalayas. 
                Starting from Ransi Village (2,200m), this 16-kilometer trek ascends to the sacred Madhyamaheshwar 
                temple at 3,497 meters altitude.
              </p>
              <p className="text-muted-foreground" data-testid="text-overview-2">
                As the fourth temple in the Panch Kedar circuit, Madhyamaheshwar holds immense religious importance. 
                According to legend, the middle part (nabhi/navel) of Lord Shiva appeared here when he tried to 
                escape the Pandavas in bull form. The temple showcases beautiful North Indian Himalayan architecture 
                and is surrounded by lush meadows with stunning views of the Chaukhamba massif.
              </p>
            </div>
          </div>

          <TrekRouteInfo />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            {essentials.map((item, index) => (
              <Card key={index} className="hover-elevate transition-all" data-testid={`card-essential-${index}`}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" data-testid={`icon-essential-${index}`} />
                    </div>
                    <h3 className="font-semibold text-lg" data-testid={`text-essential-title-${index}`}>
                      {item.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((point, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex gap-2" data-testid={`text-essential-item-${index}-${idx}`}>
                        <span className="text-primary">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/50 mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4" data-testid="heading-highlights">Trek Highlights</h2>
              <p className="font-serif text-muted-foreground mb-6" data-testid="text-highlights-hindi">
                ट्रेक की मुख्य विशेषताएं
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex gap-3" data-testid={`text-highlight-${index}`}>
                    <Mountain className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-8">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-4" data-testid="heading-important-info">
                    Important Information
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2" data-testid="text-info-1">
                      <span className="text-primary">•</span>
                      <span>Mobile network available only till Ransi - plan accordingly</span>
                    </li>
                    <li className="flex gap-2" data-testid="text-info-2">
                      <span className="text-primary">•</span>
                      <span>Altitude sickness precautions: ascend gradually, stay hydrated</span>
                    </li>
                    <li className="flex gap-2" data-testid="text-info-3">
                      <span className="text-primary">•</span>
                      <span>Lodges available at Gaundhar and Bantoli for overnight stays</span>
                    </li>
                    <li className="flex gap-2" data-testid="text-info-4">
                      <span className="text-primary">•</span>
                      <span>Hire local guides from Ransi for safe navigation</span>
                    </li>
                    <li className="flex gap-2" data-testid="text-info-5">
                      <span className="text-primary">•</span>
                      <span>Respect the sacred nature of the pilgrimage site</span>
                    </li>
                    <li className="flex gap-2" data-testid="text-info-6">
                      <span className="text-primary">•</span>
                      <span>Carry valid ID proof and permits as required</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
