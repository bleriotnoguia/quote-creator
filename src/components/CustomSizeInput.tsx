import React from "react";

interface CustomSizeInputProps {
  width: number;
  height: number;
  onSizeChange: (width: number, height: number) => void;
}

export default function CustomSizeInput({
  width,
  height,
  onSizeChange,
}: CustomSizeInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-white">
        Custom Size
      </label>
      <div className="flex gap-2">
        <div className="flex-1">
          <label className="text-xs text-gray-600 dark:text-gray-100">
            Width (px)
          </label>
          <input
            type="number"
            min="100"
            max="4096"
            value={width}
            onChange={(e) => onSizeChange(Number(e.target.value), height)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1">
          <label className="text-xs text-gray-600 dark:text-gray-100">
            Height (px)
          </label>
          <input
            type="number"
            min="100"
            max="4096"
            value={height}
            onChange={(e) => onSizeChange(width, Number(e.target.value))}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
