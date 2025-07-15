"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useReaderSettingStore } from "@/store/settings-store";
import React from "react";

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
      <div
        className={`flex flex-col items-center w-full p-2 ${settings.readingMode === "vertical" && settings.verticalMargin ? "space-y-2" : ""}`}
      >
        {images.map((src, index) => (
          <div
            key={src}
            className={`relative ${settings.pageSize === "fullHeight" ? "h-[calc(100vh_-_1rem)]" : ""} ${settings.pageSize === "fullWidth" ? "w-full" : ""}`}
          >
            {settings.ambientGlow.enabled && (
              <img
                src={src}
                style={{
                  opacity: (settings.ambientGlow.opacity?.[0] ?? 50) / 100,
                }}
                alt={`Comic page ${index + 1}`}
                className={`absolute inset-0 blur-[10rem] brightness-105 saturate-200 ${settings.pageSize === "fullHeight" ? "h-[calc(100vh_-_2rem)]" : ""} ${settings.pageSize === "fullWidth" ? "w-full" : ""}`}
              />
            )}
            <img
              src={src}
              alt={`Comic page ${index + 1}`}
              className={`relative ${settings.pageSize === "fullHeight" ? "h-[calc(100vh_-_1rem)]" : ""} ${settings.pageSize === "fullWidth" ? "w-full" : ""}`}
            />
          </div>
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
    <div className="min-h-screen max-h-screen flex items-center justify-center gap-4">
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
                  {settings.ambientGlow.enabled && (
                    <img
                      src={src}
                      alt={`Page ${src}`}
                      style={{
                        opacity:
                          (settings.ambientGlow.opacity?.[0] ?? 50) / 100,
                      }}
                      className="h-[calc(100vh-2rem)] object-contain aspect-[20/31] absolute blur-3xl -z-10 opacity-50"
                    />
                  )}
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
