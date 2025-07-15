"use client";

import Reader from "@/components/comic-reader";
import ComicFileUploader from "@/components/comic-upload";
import MiniPreviews from "@/components/reader/mini-previews";
import ReaderSettings from "@/components/reader/reader-setting";
import { useReaderSettingStore } from "@/store/settings-store";
import React from "react";

const COMIC_IMAGE =
  "https://i.pinimg.com/736x/0e/92/20/0e9220b511058c66e9295309d00d2116.jpg";

const images = [
  `${COMIC_IMAGE}#1`,
  `${COMIC_IMAGE}#2`,
  `${COMIC_IMAGE}#3`,
  `${COMIC_IMAGE}#4`,
  `${COMIC_IMAGE}#6`,
  `${COMIC_IMAGE}#7`,
  `${COMIC_IMAGE}#8`,
  `${COMIC_IMAGE}#9`,
  `${COMIC_IMAGE}#10`,
];

const page = () => {
  const { settings } = useReaderSettingStore();

  return (
    <div
      className="min-h-screen flex items-center justify-center transition-all"
      style={{ background: settings.backgroundColor }}
    >
      {/* <div className="max-w-2xl mx-auto relative bottom-8">
        <ComicFileUploader />
      </div> */}
      <div className="flex flex-col space-y-1.5 fixed top-4 right-4 z-50">
        <ReaderSettings />
        <MiniPreviews images={images} />
      </div>
      <Reader images={images} />
    </div>
  );
};

export default page;
