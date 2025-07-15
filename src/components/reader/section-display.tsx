"use client";

import { useReaderSettingStore } from "@/store/settings-store";
import { BookOpen, Columns2, GalleryVertical } from "lucide-react";
import { Button } from "../ui/button";
import SettingsSection from "./settings-ui";

const DisplaySection = () => {
  const { settings, setSettings } = useReaderSettingStore();

  const layouts = [
    {
      id: "vertical",
      icon: GalleryVertical,
      label: "Vertical",
      description: "Scroll vertically",
    },
    {
      id: "ltr",
      icon: BookOpen,
      label: "Left to Right",
      description: "Page by page",
    },
    {
      id: "double-page",
      icon: Columns2,
      label: "Double Page",
      description: "Two pages side by side",
    },
  ];

  return (
    <SettingsSection title="Reading Mode">
      <div className="grid grid-cols-3 gap-3">
        {layouts.map((layout) => {
          const Icon = layout.icon;
          const isSelected = settings.readingMode === layout.id;

          return (
            <div key={layout.id} className="flex flex-col">
              <Button
                size="icon"
                variant={isSelected ? "default" : "outline"}
                className={`aspect-square w-full h-fit ${
                  isSelected
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "hover:bg-gray-50"
                }`}
                onClick={() =>
                  setSettings({
                    readingMode: layout.id as
                      | "vertical"
                      | "ltr"
                      | "double-page",
                  })
                }
              >
                <Icon className="!size-6 flex-shrink-0" strokeWidth={1.5} />
              </Button>
              <div className="font-medium text-[13px] pl-0.5 mt-1 text-center">
                {layout.label}
              </div>
            </div>
          );
        })}
      </div>
    </SettingsSection>
  );
};

export default DisplaySection;
