"use client";

import React from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useReaderSettingStore } from "@/store/settings-store";

const ComicReader = ({
  images,
}: {
  images: string[];
}) => {
  const { settings } = useReaderSettingStore();

  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handlePrev = () => api?.scrollPrev();
  const handleNext = () => api?.scrollNext();

  if (settings.readingMode === "vertical") {
    return (
      <div className="flex flex-col items-center w-full">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Comic page ${index + 1}`}
            className="w-full max-w-4xl"
          />
        ))}
      </div>
    );
  }

  // Logic for grouping into double pages
  const pageGroups =
    settings.readingMode === "double-page"
      ? images.reduce<string[][]>((acc, curr, index) => {
          if (index % 2 === 0) acc.push([curr]);
          else acc[acc.length - 1].push(curr);
          return acc;
        }, [])
      : images.map((img) => [img]);

  return (
    <div className="min-h-screen max-h-screen overflow-hidden flex items-center justify-center gap-4">
      <Button onClick={handlePrev} disabled={!api?.canScrollPrev?.()}>
        Previous
      </Button>

      <Carousel
        opts={{ align: "start" }}
        setApi={setApi}
        className="w-full max-w-6xl"
      >
        <CarouselContent>
          {pageGroups.map((group) => (
            <CarouselItem
              key={group.join("-")}
              className="flex justify-center gap-2"
            >
              {group.map((src) => (
                <div key={src}>
                  <img
                    src={src}
                    alt={`Page ${src}`}
                    className="h-[calc(100vh-2rem)] object-contain aspect-[20/31]"
                  />
                </div>
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Button onClick={handleNext} disabled={!api?.canScrollNext?.()}>
        Next
      </Button>
    </div>
  );
};

export default ComicReader;
