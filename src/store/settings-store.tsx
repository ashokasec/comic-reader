import { create } from "zustand";
import { persist } from "zustand/middleware";

type ReadingMode = "vertical" | "ltr" | "double-page";

type ReaderSettingsType = {
  readingMode: ReadingMode;
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
