"use client";

import { useReaderSettingStore } from "@/store/settings-store";
import { Button } from "../ui/button";
import SettingsSection from "./settings-ui";

const BackgroundSection = () => {
  const { settings, setSettings } = useReaderSettingStore();

  const colors = [
    {
      id: "black",
      hexCode: "#000000",
      label: "Black",
    },
    {
      id: "white",
      hexCode: "#ffffff",
      label: "White",
    },
    {
      id: "red",
      hexCode: "#ff0033",
      label: "Red",
    },
  ];

  return (
    <SettingsSection title="Background">
      <div className="grid grid-cols-4 gap-3">
        {colors.map((color) => {
          const isSelected = settings.backgroundColor === color.hexCode;

          return (
            <div key={color.id} className="flex flex-col">
              <Button
                size="icon"
                style={{ background: color.hexCode }}
                variant={isSelected ? "default" : "outline"}
                className="aspect-square w-full h-fit"
                onClick={() =>
                  setSettings({
                    backgroundColor: color.hexCode,
                  })
                }
              >
                {}
              </Button>
              <div className="font-medium text-[13px] pl-0.5 mt-1 text-center">
                {color.label}
              </div>
            </div>
          );
        })}
        <div className="flex flex-col">
          <Button
            size="icon"
            // style={{ background: color.hexCode }}
            // variant={isSelected ? "default" : "outline"}
            className="aspect-square w-full h-fit"
            onClick={() =>
              setSettings({
                backgroundColor: "pink",
              })
            }
          >
            {}
          </Button>
          <div className="font-medium text-[13px] pl-0.5 mt-1 text-center">
            Custom
          </div>
        </div>
      </div>
    </SettingsSection>
  );
};

export default BackgroundSection;
