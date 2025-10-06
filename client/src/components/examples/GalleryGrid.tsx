import GalleryGrid from "../GalleryGrid";
import mountainImage from "@assets/generated_images/Himalayan_mountain_peaks_panorama_295170a4.png";
import templeImage from "@assets/generated_images/Himalayan_temple_with_mountains_37afb6a4.png";
import trekImage from "@assets/generated_images/Forest_trekking_trail_scene_c41a789b.png";

export default function GalleryGridExample() {
  const images = [
    {
      src: mountainImage,
      alt: "Chaukhamba Peaks",
      caption: "Chaukhamba Mountain Range",
      captionHindi: "चौखम्बा पर्वत श्रृंखला"
    },
    {
      src: templeImage,
      alt: "Madhyamaheshwar Temple",
      caption: "Sacred Madhyamaheshwar Temple",
      captionHindi: "पवित्र मध्यमहेश्वर मंदिर"
    },
    {
      src: trekImage,
      alt: "Trek Trail",
      caption: "Trek Through Coniferous Forests",
      captionHindi: "शंकुधारी वनों से होकर ट्रेक"
    }
  ];

  return (
    <div className="p-8">
      <GalleryGrid images={images} />
    </div>
  );
}
