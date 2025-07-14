import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Contrast, Moon, Sun } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import SettingsSection from "./settings-ui";

const UserExpSection = () => {
  return (
    <SettingsSection>
      <h3 className="font-semibold text-sm">User Experience</h3>
      <div>
        <Label className="text-sm font-medium flex items-center gap-1">
          Color Modes
        </Label>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <Button variant="outline" size="sm">
            <Sun className="h-8 w-8" />
            Default
          </Button>
          <Button variant="outline" size="sm">
            <Moon className="h-8 w-8" />
            Greyscale
          </Button>
          <Button variant="outline" size="sm">
            <Contrast className="h-8 w-8" />
            High Contrast
          </Button>
        </div>
      </div>

      <div className="mt-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="haptic" />
          <Label htmlFor="haptic" className="flex items-center gap-1">
            Haptic feedback on page flip
          </Label>
        </div>
      </div>
    </SettingsSection>
  );
};

export default UserExpSection;
