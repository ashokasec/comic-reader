import ComicFileUploader from "@/components/comic-upload";
import Reader from "@/components/reader";
import MiniPreviews from "@/components/reader/mini-previews";
import ReaderSettings from "@/components/reader/reader-setting";
import React from "react";

const images = [
  "https://i.pinimg.com/736x/c6/f5/d9/c6f5d9b419f220d29c9bc9b5a5e9e2c3.jpg#1",
  "https://i.pinimg.com/736x/c6/f5/d9/c6f5d9b419f220d29c9bc9b5a5e9e2c3.jpg#2",
  "https://i.pinimg.com/736x/c6/f5/d9/c6f5d9b419f220d29c9bc9b5a5e9e2c3.jpg#3",
  "https://i.pinimg.com/736x/c6/f5/d9/c6f5d9b419f220d29c9bc9b5a5e9e2c3.jpg#4",
  "https://i.pinimg.com/736x/c6/f5/d9/c6f5d9b419f220d29c9bc9b5a5e9e2c3.jpg#6",
  "https://i.pinimg.com/736x/c6/f5/d9/c6f5d9b419f220d29c9bc9b5a5e9e2c3.jpg#7",
  "https://i.pinimg.com/736x/c6/f5/d9/c6f5d9b419f220d29c9bc9b5a5e9e2c3.jpg#8",
  "https://i.pinimg.com/736x/c6/f5/d9/c6f5d9b419f220d29c9bc9b5a5e9e2c3.jpg#9",
  "https://i.pinimg.com/736x/c6/f5/d9/c6f5d9b419f220d29c9bc9b5a5e9e2c3.jpg#10",
];

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
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
