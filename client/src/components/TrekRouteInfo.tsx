import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, TrendingUp, Clock } from "lucide-react";

export default function TrekRouteInfo() {
  const routeStages = [
    {
      stage: "Day 1",
      route: "Ransi to Gaundhar",
      distance: "9 km",
      duration: "5-6 hours",
      elevation: "2,200m to 2,800m",
      description: "Gentle ascent through coniferous forests and small villages"
    },
    {
      stage: "Day 2",
      route: "Gaundhar to Madhyamaheshwar Temple",
      distance: "7 km",
      duration: "4-5 hours",
      elevation: "2,800m to 3,497m",
      description: "Steep climb through alpine meadows with panoramic Chaukhamba views"
    },
    {
      stage: "Day 3",
      route: "Return to Ransi",
      distance: "16 km",
      duration: "6-7 hours",
      elevation: "3,497m to 2,200m",
      description: "Descent back through the same scenic route"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3" data-testid="heading-trek-route">
          Trek Route Details
        </h2>
        <p className="text-lg font-serif text-muted-foreground" data-testid="text-trek-route-hindi">
          ट्रेक मार्ग विवरण
        </p>
        <p className="mt-4 text-muted-foreground max-w-3xl mx-auto" data-testid="text-route-intro">
          The Madhyamaheshwar trek from Ransi offers a perfect blend of spiritual pilgrimage and Himalayan adventure. 
          This moderate-to-difficult trek takes you to one of the sacred Panch Kedar temples at 3,497 meters.
        </p>
      </div>

      <div className="space-y-6">
        {routeStages.map((stage, index) => (
          <Card key={index} className="hover-elevate transition-all" data-testid={`card-route-${index}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3" data-testid={`heading-stage-${index}`}>
                <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                <div>
                  <div>{stage.stage}: {stage.route}</div>
                  <div className="text-sm font-serif text-muted-foreground font-normal mt-1">
                    {stage.stage === "Day 1" ? "दिन १" : stage.stage === "Day 2" ? "दिन २" : "दिन ३"}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-semibold" data-testid={`text-distance-${index}`}>{stage.distance}</p>
                    <p className="text-xs text-muted-foreground">Distance</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-semibold" data-testid={`text-duration-${index}`}>{stage.duration}</p>
                    <p className="text-xs text-muted-foreground">Duration</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-semibold" data-testid={`text-elevation-${index}`}>{stage.elevation}</p>
                    <p className="text-xs text-muted-foreground">Elevation</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground" data-testid={`text-description-${index}`}>{stage.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
