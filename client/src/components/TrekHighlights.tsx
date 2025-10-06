import { Card } from "@/components/ui/card";
import { Mountain, Route, Clock, TrendingUp } from "lucide-react";

export default function TrekHighlights() {
  const highlights = [
    {
      icon: Route,
      title: "Distance",
      value: "16 km",
      description: "One way to temple",
      hindi: "दूरी"
    },
    {
      icon: TrendingUp,
      title: "Altitude",
      value: "3,497m",
      description: "Madhyamaheshwar Temple",
      hindi: "ऊंचाई"
    },
    {
      icon: Clock,
      title: "Duration",
      value: "3 Days",
      description: "Round trip trek",
      hindi: "अवधि"
    },
    {
      icon: Mountain,
      title: "Difficulty",
      value: "Moderate",
      description: "Good fitness needed",
      hindi: "कठिनाई"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3" data-testid="heading-trek-highlights">
          Madhyamaheshwar Trek Highlights
        </h2>
        <p className="text-lg font-serif text-muted-foreground" data-testid="text-trek-highlights-hindi">
          मध्यमहेश्वर ट्रेक मुख्य बातें
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <Card
            key={index}
            className="p-6 text-center hover-elevate transition-all"
            data-testid={`card-highlight-${index}`}
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <item.icon className="h-8 w-8 text-primary" data-testid={`icon-${item.title.toLowerCase()}`} />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-1" data-testid={`text-title-${index}`}>{item.title}</h3>
            <p className="text-xs font-serif text-muted-foreground mb-3" data-testid={`text-hindi-${index}`}>{item.hindi}</p>
            <p className="text-3xl font-bold text-primary mb-2" data-testid={`text-value-${index}`}>{item.value}</p>
            <p className="text-sm text-muted-foreground" data-testid={`text-description-${index}`}>{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
