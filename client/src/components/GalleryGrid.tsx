import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  captionHindi: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg hover-elevate transition-all"
            onClick={() => setSelectedImage(image)}
            data-testid={`gallery-item-${index}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              data-testid={`gallery-img-${index}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-semibold" data-testid={`caption-${index}`}>{image.caption}</p>
                <p className="text-sm font-serif" data-testid={`caption-hindi-${index}`}>{image.captionHindi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="lightbox-overlay"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
            data-testid="button-close-lightbox"
          >
            <X className="h-6 w-6" />
          </Button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
              data-testid="lightbox-image"
            />
            <div className="mt-4 text-white text-center">
              <p className="text-lg font-semibold" data-testid="lightbox-caption">{selectedImage.caption}</p>
              <p className="text-sm font-serif" data-testid="lightbox-caption-hindi">{selectedImage.captionHindi}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
