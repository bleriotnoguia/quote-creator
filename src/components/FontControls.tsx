import React from 'react';
import { Quote } from '../types';

interface FontControlsProps {
  quote: Quote;
  onUpdate: (updates: Partial<Quote>) => void;
}

export const fontFamilies = [
  'Inter',
  'Playfair Display',
  'Montserrat',
  'Roboto',
  'Open Sans',
];

export default function FontControls({ quote, onUpdate }: FontControlsProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Font Family
        </label>
        <select
          value={quote.fontFamily}
          onChange={(e) => onUpdate({ fontFamily: e.target.value })}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          {fontFamilies.map((font) => (
            <option key={font} value={font} style={{ fontFamily: font }}>
              {font}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Text Color
        </label>
        <input
          type="color"
          value={quote.textColor}
          onChange={(e) => onUpdate({ textColor: e.target.value })}
          className="w-full h-10 rounded-lg cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Text Opacity
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={quote.textOpacity}
          onChange={(e) => onUpdate({ textOpacity: Number(e.target.value) })}
          className="w-full"
        />
      </div>
    </div>
  );
}