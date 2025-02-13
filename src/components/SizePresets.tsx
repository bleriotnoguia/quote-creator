import React from "react";
import { socialPresets } from "../utils/socialPresets";

interface SizePresetsProps {
  onSelect: (width: number, height: number) => void;
}

export default function SizePresets({ onSelect }: SizePresetsProps) {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-white">
        Size Presets
      </label>
      <div className="grid grid-cols-2 gap-2">
        {socialPresets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => onSelect(preset.width, preset.height)}
            className="px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm"
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
}
