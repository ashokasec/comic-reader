import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import SettingsSection from "./settings-ui";

const NavAndControlSection = () => {
  return (
    <SettingsSection>
      <h3 className="font-semibold text-sm">Navigation & Controls</h3>
      <div className="space-y-2 mt-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="progress" />
          <Label htmlFor="progress">Show progress bar</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="page-num" />
          <Label htmlFor="page-num">Show current page number</Label>
        </div>
      </div>
    </SettingsSection>
  );
};

export default NavAndControlSection;
