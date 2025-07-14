"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NotebookText } from "lucide-react";
import { Button } from "../ui/button";

const MiniPreviews = ({ images }: { images: string[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="cursor-pointer">
          <NotebookText className="h-5" />
        </Button>
      </SheetTrigger>

      <SheetContent className="bg-transparent border-0 shadow-none p-2">
        <div className="h-full rounded-md border bg-white p-4 overflow-y-auto">
          <SheetHeader className="p-0 mb-2">
            <SheetTitle>Mini Previews</SheetTitle>
            <SheetDescription className="sr-only">
              Customize your comic reading experience
            </SheetDescription>
          </SheetHeader>

          <div className="grid grid-cols-3 gap-2">
            {images.map((src, index) => (
              <figure
                key={src}
                className="relative flex items-center justify-center rounded-md overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Comic page ${index + 1}`}
                  className="w-full max-w-3xl"
                />
                <div className="absolute z-10 text-2xl h-full w-full bg-black/50 text-white flex items-center justify-center">
                  {index + 1}
                </div>
              </figure>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MiniPreviews;
