"use client";

import { useReaderSettingStore } from "@/store/settings-store";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Switch } from "../ui/switch";
import SettingsSection from "./settings-ui";

const ImageAmbient = () => {
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
    <SettingsSection title="Image Ambient">
      <div className="bg-neutral-100 border rounded-md leading-none pt-2.5 pb-4  px-3 space-y-3.5">
        <div className="flex justify-between">
          <p className="text-sm">Enable Comic Ambient Background</p>
          <Switch
            checked={settings.ambientGlow.enabled}
            onCheckedChange={(value) =>
              setSettings({ ambientGlow: { enabled: value } })
            }
          />
        </div>
        <div
          className={`${settings.ambientGlow.enabled ? "" : "cursor-not-allowed opacity-50"}`}
        >
          <div className="flex items-center justify-between">
            <Label className="text-[13px]">Opacity</Label>
            <span className="text-[13px] font-medium">
              {settings.ambientGlow.opacity ?? 50}%
            </span>
          </div>
          <Slider
            defaultValue={settings.ambientGlow.opacity ?? [50]}
            max={100}
            step={1}
            className="mt-2"
            onValueChange={(value) =>
              setSettings({
                ambientGlow: { ...settings.ambientGlow, opacity: value },
              })
            }
            disabled={!settings.ambientGlow.enabled}
          />
        </div>
      </div>
    </SettingsSection>
  );
};

export default ImageAmbient;
