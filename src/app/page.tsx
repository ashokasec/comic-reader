import ComicFileUploader from "@/components/comic-upload";
import Reader from "@/components/comic-reader";
import MiniPreviews from "@/components/reader/mini-previews";
import ReaderSettings from "@/components/reader/reader-setting";
import React from "react";

const images = [
  "https://images.unsplash.com/photo-1581345331960-d1b0a223ef96?q=80&w=909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D#1",
  "https://images.unsplash.com/photo-1581345331960-d1b0a223ef96?q=80&w=909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D#2",
  "https://images.unsplash.com/photo-1581345331960-d1b0a223ef96?q=80&w=909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D#3",
  "https://images.unsplash.com/photo-1581345331960-d1b0a223ef96?q=80&w=909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D#4",
  "https://images.unsplash.com/photo-1581345331960-d1b0a223ef96?q=80&w=909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D#6",
  "https://images.unsplash.com/photo-1581345331960-d1b0a223ef96?q=80&w=909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D#7",
  "https://images.unsplash.com/photo-1581345331960-d1b0a223ef96?q=80&w=909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D#8",
  "https://images.unsplash.com/photo-1581345331960-d1b0a223ef96?q=80&w=909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D#9",
  "https://images.unsplash.com/photo-1581345331960-d1b0a223ef96?q=80&w=909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D#10",
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
