import GalleryGrid from "@/components/GalleryGrid";
import mountainImage from "@assets/generated_images/Himalayan_mountain_peaks_panorama_295170a4.png";
import lodgeImage from "@assets/generated_images/Himalayan_lodge_with_flowers_bfb3cb8b.png";
import templeImage from "@assets/generated_images/Himalayan_temple_with_mountains_37afb6a4.png";
import roomImage from "@assets/generated_images/Cozy_lodge_room_interior_fa402585.png";
import trekImage from "@assets/generated_images/Forest_trekking_trail_scene_c41a789b.png";
import flowersImage from "@assets/generated_images/Buransh_flowers_close-up_fa5ea8dd.png";

export default function Gallery() {
  const images = [
    {
      src: mountainImage,
      alt: "Chaukhamba Peaks",
      caption: "Majestic Chaukhamba Mountain Range",
      captionHindi: "भव्य चौखम्बा पर्वत श्रृंखला"
    },
    {
      src: lodgeImage,
      alt: "Buransh Lodge",
      caption: "Buransh Tourist Lodge with Himalayan Backdrop",
      captionHindi: "हिमालय की पृष्ठभूमि के साथ बुरांश टूरिस्ट लॉज"
    },
    {
      src: templeImage,
      alt: "Madhyamaheshwar Temple",
      caption: "Sacred Madhyamaheshwar Temple at 3,497m",
      captionHindi: "पवित्र मध्यमहेश्वर मंदिर ३,४९७ मीटर पर"
    },
    {
      src: roomImage,
      alt: "Lodge Room",
      caption: "Cozy Room with Mountain View",
      captionHindi: "पहाड़ी दृश्य के साथ आरामदायक कमरा"
    },
    {
      src: trekImage,
      alt: "Trek Trail",
      caption: "Trek Through Coniferous Forests",
      captionHindi: "शंकुधारी वनों से होकर ट्रेक मार्ग"
    },
    {
      src: flowersImage,
      alt: "Buransh Flowers",
      caption: "Vibrant Buransh Rhododendron Flowers",
      captionHindi: "जीवंत बुरांश के फूल"
    },
    {
      src: mountainImage,
      alt: "Himalayan Sunrise",
      caption: "Golden Hour in the Himalayas",
      captionHindi: "हिमालय में सुनहरी घड़ी"
    },
    {
      src: trekImage,
      alt: "Alpine Meadows",
      caption: "Alpine Meadows Along the Trail",
      captionHindi: "मार्ग के साथ अल्पाइन घास के मैदान"
    },
    {
      src: templeImage,
      alt: "Temple View",
      caption: "Panoramic View from Temple",
      captionHindi: "मंदिर से व्यापक दृश्य"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="heading-gallery">
              Photo Gallery
            </h1>
            <p className="text-xl font-serif text-muted-foreground" data-testid="text-gallery-hindi">
              फोटो गैलरी
            </p>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto" data-testid="text-gallery-intro">
              Explore the breathtaking beauty of Buransh Tourist Lodge, the Madhyamaheshwar trek, 
              and the stunning Himalayan landscapes that await you.
            </p>
          </div>

          <GalleryGrid images={images} />

          <div className="mt-16 bg-card/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-3" data-testid="heading-gallery-note">
              Capture Your Journey
            </h2>
            <p className="font-serif text-muted-foreground mb-4" data-testid="text-gallery-note-hindi">
              अपनी यात्रा को कैद करें
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-gallery-note">
              Share your experiences at Buransh Lodge and the Madhyamaheshwar trek with us. 
              Tag us on social media to be featured in our guest gallery!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
