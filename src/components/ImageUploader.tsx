import React, { useRef } from "react";
import { Upload, Image as ImageIcon } from "lucide-react";
import { handleImageUpload } from "../utils/imageUpload";

interface ImageUploaderProps {
  onImageSelect: (imageUrl: string) => void;
  onShowImageSearch: () => void;
}

export default function ImageUploader({
  onImageSelect,
  onShowImageSearch,
}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const imageUrl = await handleImageUpload(file);
        onImageSelect(imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
        Background
      </label>
      <div className="flex gap-2">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          <Upload size={16} />
          <span>Upload Image</span>
        </button>
        <button
          onClick={onShowImageSearch}
          className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          <ImageIcon size={16} />
          <span>Search Images</span>
        </button>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
