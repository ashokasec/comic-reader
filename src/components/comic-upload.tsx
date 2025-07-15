"use client";

import { useFileUpload } from "@/hooks/use-file-upload";
import { AlertCircleIcon, FileUpIcon, XIcon } from "lucide-react";

export default function ComicFileUploader() {
  const maxSizeMB = 50;
  const maxSize = maxSizeMB * 1024 * 1024; // 50MB

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
  ] = useFileUpload({
    accept: ".cbz,.zip,.pdf,image/*",
    maxSize,
    multiple: false, // You can allow multiple image pages by setting this to true
  });

  const fileName = files[0]?.file?.name || null;

  console.log(files);

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        {/* biome-ignore lint/a11y/useFocusableInteractive: <explanation> */}
        <div
          // biome-ignore lint/a11y/useSemanticElements: <explanation>
          role="button"
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          className="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[input:focus]:ring-[3px]"
        >
          <input
            {...getInputProps()}
            className="sr-only"
            aria-label="Upload comic file"
          />

          {fileName ? (
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">
                📘 {fileName}
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Ready to upload
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
              <div
                className="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
                aria-hidden="true"
              >
                <FileUpIcon className="size-4 opacity-60" />
              </div>
              <p className="mb-1.5 text-sm font-medium">
                Drag & drop your comic here or click to browse
              </p>
              <p className="text-muted-foreground text-xs">
                Accepted: .cbz, .zip, .pdf, images • Max size: {maxSizeMB}MB
              </p>
            </div>
          )}
        </div>

        {fileName && (
          <div className="absolute top-4 right-4">
            <button
              type="button"
              className="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
              onClick={() => removeFile(files[0]?.id)}
              aria-label="Remove file"
            >
              <XIcon className="size-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div
          className="text-destructive flex items-center gap-1 text-xs"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}

      <p
        aria-live="polite"
        // biome-ignore lint/a11y/useSemanticElements: <explanation>
        role="region"
        className="text-muted-foreground mt-2 text-center text-xs"
      >
        Upload your comic file for publishing.{" "}
        <span className="underline">CBZ/ZIP recommended</span> for best reader
        experience.
      </p>
    </div>
  );
}
