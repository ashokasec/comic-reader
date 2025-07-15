"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Settings } from "lucide-react";
import { Button } from "../ui/button";
import ImageAmbient from "./section-ambient";
import BackgroundSection from "./section-background";
import DislpaySection from "./section-display";

const ReaderSettings = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="cursor-pointer">
          <Settings className="h-5" />
        </Button>
      </SheetTrigger>

      <SheetContent className="bg-transparent border-0 shadow-none p-2">
        <div className="h-full rounded-md border bg-white p-4 overflow-y-auto">
          <SheetHeader className="p-0 mb-2">
            <SheetTitle>Reader Settings</SheetTitle>
            <SheetDescription className="sr-only">
              Customize your comic reading experience
            </SheetDescription>
          </SheetHeader>

          <div className="space-y-6">
            {/* Display & Layout */}
            <DislpaySection />

            {/* Background */}
            <BackgroundSection />

            {/* Image Ambient */}
            <ImageAmbient />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ReaderSettings;
