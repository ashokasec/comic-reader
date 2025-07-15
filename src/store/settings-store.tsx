import { create } from "zustand";
import { persist } from "zustand/middleware";

type ReaderSettingsType = {
  readingMode: "vertical" | "ltr" | "double-page";
  verticalMargin: boolean;
  backgroundColor: string;
  ambientGlow: {
    enabled?: boolean;
    opacity?: number[];
  };
  pageSize: "fullWidth" | "fullHeight";
};

type ReaderSettingsStore = {
  settings: ReaderSettingsType;
  setSettings: (newSettings: Partial<ReaderSettingsType>) => void;
};

export const useReaderSettingStore = create<ReaderSettingsStore>()(
  persist(
    (set) => ({
      settings: {
        readingMode: "vertical",
        verticalMargin: false,
        backgroundColor: "#ffffff",
        ambientGlow: {
          enabled: false,
          opacity: [50],
        },
        pageSize: "fullHeight",
      },
      setSettings: (newSettings) =>
        set((state) => ({
          settings: {
            ...state.settings,
            ...newSettings,
          },
        })),
    }),
    {
      name: "comics-settings", // localStorage key
    },
  ),
);
