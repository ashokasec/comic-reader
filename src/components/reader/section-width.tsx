"use client";

import { useReaderSettingStore } from "@/store/settings-store";
import { MoveHorizontal, MoveVertical } from "lucide-react";
import { Button } from "../ui/button";
import SettingsSection from "./settings-ui";

const WidthSection = () => {
  const { settings, setSettings } = useReaderSettingStore();

  const sizes = [
    {
      id: "fullWidth",
      icon: MoveHorizontal,
      label: "Fit to Width",
    },
    {
      id: "fullHeight",
      icon: MoveVertical,
      label: "Fit to Height",
    },
  ];

  return (
    <SettingsSection title="Page Width">
      <div className="grid grid-cols-3 gap-3">
        {sizes.map((size) => {
          const Icon = size.icon;
          const isSelected = settings.pageSize === size.id;

          return (
            <div key={size.id} className="flex flex-col">
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
                    pageSize: size.id as "fullWidth" | "fullHeight",
                  })
                }
              >
                <Icon className="!size-6 flex-shrink-0" strokeWidth={1.5} />
              </Button>
              <div className="font-medium text-[13px] pl-0.5 mt-1 text-center">
                {size.label}
              </div>
            </div>
          );
        })}
      </div>
    </SettingsSection>
  );
};

export default WidthSection;
