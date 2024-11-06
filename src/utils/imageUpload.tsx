import { ChangeEvent, useRef } from "react";
import { Icon } from "@iconify/react";

interface ImageUploadProps {
  currentImage: string;
  onImageChange: (file: File) => Promise<void>;
}

export default function ImageUpload({
  currentImage,
  onImageChange,
}: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should be less than 5MB");
        return;
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please upload an image file");
        return;
      }

      try {
        await onImageChange(file);
      } catch (error) {
        console.error("Error processing image:", error);
        alert("Failed to process image");
      }
    }
  };

  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <img
        src={currentImage}
        alt="Profile"
        className="w-full h-full rounded-full object-cover"
      />
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <button
        type="button"
        onClick={handleClick}
        className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
      >
        <Icon icon="heroicons:pencil-square" className="w-5 h-5" />
      </button>
    </div>
  );
}
